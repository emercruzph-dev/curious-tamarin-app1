import React from "react";
import { toast } from "sonner";

interface UserLocation {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

export function useUserLocation(): UserLocation {
  const [location, setLocation] = React.useState<UserLocation>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
  });

  React.useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by your browser.",
        loading: false,
      }));
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        loading: false,
      });
      toast.success("Your location has been detected!");
    };

    const handleError = (geoError: GeolocationPositionError) => {
      let errorMessage = "An unknown error occurred.";
      switch (geoError.code) {
        case geoError.PERMISSION_DENIED:
          errorMessage = "Permission to access location was denied.";
          break;
        case geoError.POSITION_UNAVAILABLE:
          errorMessage = "Location information is unavailable.";
          break;
        case geoError.TIMEOUT:
          errorMessage = "The request to get user location timed out.";
          break;
      }
      setLocation((prev) => ({
        ...prev,
        error: errorMessage,
        loading: false,
      }));
      toast.error(`Location error: ${errorMessage}`);
    };

    setLocation((prev) => ({ ...prev, loading: true }));
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  }, []);

  return location;
}