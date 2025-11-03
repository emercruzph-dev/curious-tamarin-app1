import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockMovies, mockCinemas, metroManilaCities, Movie, Cinema, Showtime, Location, MetroManilaCity } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, CalendarDays, Film, MapPin, LocateFixed } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUserLocation } from "@/hooks/useUserLocation";
import { getDistance } from "@/utils/location";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = mockMovies.find((m) => m.id === id);
  const [selectedLocation, setSelectedLocation] = React.useState<Location | "all">("all");
  const [selectedMetroManilaCity, setSelectedMetroManilaCity] = React.useState<MetroManilaCity | "all">("all");
  const [showNearby, setShowNearby] = React.useState(false);

  const userLocation = useUserLocation();

  if (!movie) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">Movie Not Found</h2>
        <p className="text-muted-foreground mt-2">The movie you are looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link to="/">Back to Movies</Link>
        </Button>
      </div>
    );
  }

  const handleLocationChange = (value: Location | "all") => {
    setSelectedLocation(value);
    // Reset city filter if location changes and it's not Metro Manila
    if (value !== "Metro Manila") {
      setSelectedMetroManilaCity("all");
    }
  };

  const filteredAndSortedCinemas = React.useMemo(() => {
    let cinemas = mockCinemas.filter((cinema) => {
      const hasMovie = cinema.moviesPlaying.some((mp) => mp.movieId === movie.id);
      const matchesLocation = selectedLocation === "all" || cinema.location === selectedLocation;
      const matchesCity =
        selectedLocation !== "Metro Manila" ||
        selectedMetroManilaCity === "all" ||
        cinema.city === selectedMetroManilaCity;
      return hasMovie && matchesLocation && matchesCity;
    });

    if (showNearby && userLocation.latitude && userLocation.longitude) {
      cinemas = cinemas
        .map((cinema) => {
          const distance = getDistance(
            userLocation.latitude!,
            userLocation.longitude!,
            cinema.latitude,
            cinema.longitude
          );
          return { ...cinema, distance };
        })
        .sort((a, b) => a.distance - b.distance);
    }

    return cinemas;
  }, [movie.id, selectedLocation, selectedMetroManilaCity, showNearby, userLocation]);

  // Sort locations with "Metro Manila" always at the top
  const allLocations = Array.from(new Set(mockCinemas.map(c => c.location)));
  const otherLocations = allLocations.filter(loc => loc !== "Metro Manila").sort();
  const sortedLocations = ["Metro Manila", ...otherLocations];

  const sortedMetroManilaCities = [...metroManilaCities].sort();

  return (
    <ScrollArea className="h-[calc(100vh-180px)]">
      <div className="p-4 space-y-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 w-full sm:w-1/3">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-grow space-y-3">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genre.map((genre) => (
                <Badge key={genre} variant="secondary">{genre}</Badge>
              ))}
              <Badge>{movie.rating}</Badge>
            </div>
            <p className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" /> {movie.duration}
            </p>
            <p className="text-muted-foreground flex items-center gap-1">
              <CalendarDays className="h-4 w-4" /> Released: {movie.releaseDate}
            </p>
            {movie.trailerUrl && (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch Trailer
                </a>
              </Button>
            )}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Synopsis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{movie.synopsis}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cast & Crew</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast.join(", ")}</p>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-bold mt-6">Showtimes</h3>
        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <Select value={selectedLocation} onValueChange={handleLocationChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {sortedLocations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedLocation === "Metro Manila" && (
            <Select value={selectedMetroManilaCity} onValueChange={(value: MetroManilaCity | "all") => setSelectedMetroManilaCity(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                {sortedMetroManilaCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        <div className="flex items-center space-x-2 justify-end">
          <LocateFixed className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="show-nearby-movie">Show Nearby Cinemas</Label>
          <Switch
            id="show-nearby-movie"
            checked={showNearby}
            onCheckedChange={setShowNearby}
            disabled={userLocation.loading || userLocation.error !== null}
          />
        </div>
        {userLocation.loading && showNearby && (
          <p className="text-sm text-muted-foreground text-right">Getting your location...</p>
        )}
        {userLocation.error && showNearby && (
          <p className="text-sm text-destructive text-right">
            {userLocation.error} Please enable location services.
          </p>
        )}

        {filteredAndSortedCinemas.length > 0 ? (
          <div className="space-y-4">
            {filteredAndSortedCinemas.map((cinema) => {
              const movieShowtimes = cinema.moviesPlaying.find(
                (mp) => mp.movieId === movie.id
              )?.showtimes;

              if (!movieShowtimes || movieShowtimes.length === 0) {
                return null;
              }

              return (
                <Card key={cinema.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Film className="h-5 w-5" />
                      <Link to={`/cinemas/${cinema.id}`} className="hover:underline">
                        {cinema.name}
                      </Link>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {cinema.address}
                    </p>
                    {showNearby && typeof cinema.distance === 'number' && (
                      <p className="text-sm text-primary mt-2">
                        {cinema.distance.toFixed(2)} km away
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {movieShowtimes.map((showtime, index) => (
                        <Badge key={index} variant="default" className="px-3 py-1 text-sm">
                          {showtime.time} ({showtime.type})
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No showtimes available for this movie in the selected location.</p>
        )}
      </div>
    </ScrollArea>
  );
};

export default MovieDetailPage;