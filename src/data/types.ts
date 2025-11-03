export type Location =
  | "Metro Manila"
  | "Laguna"
  | "Antipolo"
  | "Bulacan"
  | "Pampanga"
  | "Cavite";

export type MetroManilaCity =
  | "Mandaluyong"
  | "Quezon City"
  | "Parañaque"
  | "Makati"
  | "Taguig"
  | "Pasig"
  | "Las Piñas"
  | "Manila"
  | "Caloocan"
  | "Marikina"
  | "Malabon"
  | "Navotas"
  | "Pasay"
  | "Valenzuela"
  | "Muntinlupa"
  | "Novaliches"; // Added Novaliches

export interface Showtime {
  time: string; // e.g., "10:00 AM", "01:30 PM"
  type: "2D" | "3D" | "IMAX" | "Director's Club";
}

export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  genre: string[];
  duration: string; // e.g., "2h 15min"
  rating: string; // e.g., "PG", "R-13"
  synopsis: string;
  cast: string[];
  director: string;
  releaseDate: string; // e.g., "October 26, 2023"
  trailerUrl?: string;
}

export interface Cinema {
  id: string;
  name: string;
  location: Location;
  city?: MetroManilaCity; // Optional city property for Metro Manila cinemas
  address: string;
  contact: string;
  latitude: number; // Added latitude
  longitude: number; // Added longitude
  moviesPlaying: {
    movieId: string;
    showtimes: Showtime[];
  }[];
}