import { format } from "date-fns";

export type Location =
  | "Metro Manila"
  | "Rizal"
  | "Laguna"
  | "Pampanga"
  | "Cavite"
  | "Bulacan"
  | "Batangas"
  | "Pangasinan"
  | "Zambales"
  | "Quezon"
  | "Baguio";

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
  address: string;
  contact: string;
  moviesPlaying: {
    movieId: string;
    showtimes: Showtime[];
  }[];
}

export const locations: Location[] = [
  "Metro Manila",
  "Rizal",
  "Laguna",
  "Pampanga",
  "Cavite",
  "Bulacan",
  "Batangas",
  "Pangasinan",
  "Zambales",
  "Quezon",
  "Baguio",
];

export const mockMovies: Movie[] = [
  {
    id: "m1",
    title: "The Galactic Odyssey",
    posterUrl: "https://picsum.photos/id/237/200/300",
    genre: ["Sci-Fi", "Action"],
    duration: "2h 20min",
    rating: "PG-13",
    synopsis:
      "A thrilling journey across the galaxy to save humanity from an ancient alien threat.",
    cast: ["Alice Johnson", "Bob Williams", "Charlie Brown"],
    director: "Eve Davis",
    releaseDate: format(new Date(2024, 9, 26), "MMMM dd, yyyy"),
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "m2",
    title: "Love in the Time of AI",
    posterUrl: "https://picsum.photos/id/238/200/300",
    genre: ["Romance", "Drama"],
    duration: "1h 55min",
    rating: "PG",
    synopsis:
      "In a future where AI companions are common, a human falls in love with an advanced AI.",
    cast: ["David Green", "Fiona White"],
    director: "Grace Black",
    releaseDate: format(new Date(2024, 10, 15), "MMMM dd, yyyy"),
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "m3",
    title: "The Silent Witness",
    posterUrl: "https://picsum.photos/id/239/200/300",
    genre: ["Thriller", "Mystery"],
    duration: "2h 10min",
    rating: "R-16",
    synopsis:
      "A detective races against time to uncover the truth behind a series of mysterious disappearances.",
    cast: ["Henry King", "Ivy Queen"],
    director: "Jack Knight",
    releaseDate: format(new Date(2024, 8, 1), "MMMM dd, yyyy"),
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "m4",
    title: "Fantasy Realm",
    posterUrl: "https://picsum.photos/id/240/200/300",
    genre: ["Fantasy", "Adventure"],
    duration: "2h 40min",
    rating: "PG",
    synopsis:
      "A group of unlikely heroes embarks on a quest to save their magical world from an evil sorcerer.",
    cast: ["Liam O'Connell", "Mia Rodriguez"],
    director: "Noah Peterson",
    releaseDate: format(new Date(2024, 11, 5), "MMMM dd, yyyy"),
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "m5",
    title: "City Under Siege",
    posterUrl: "https://picsum.photos/id/241/200/300",
    genre: ["Action", "Crime"],
    duration: "2h 05min",
    rating: "R-13",
    synopsis:
      "A rogue cop must protect his city from a ruthless crime syndicate.",
    cast: ["Olivia Chen", "Paul Smith"],
    director: "Quinn Taylor",
    releaseDate: format(new Date(2024, 7, 20), "MMMM dd, yyyy"),
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const mockCinemas: Cinema[] = [
  {
    id: "c1",
    name: "Mega Cinema Manila",
    location: "Metro Manila",
    address: "123 Main St, City Center, Metro Manila",
    contact: "(02) 8123-4567",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "04:00 PM", type: "3D" },
          { time: "07:00 PM", type: "2D" },
          { time: "09:30 PM", type: "IMAX" },
        ],
      },
      {
        movieId: "m2",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "Director's Club" },
          { time: "08:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c2",
    name: "Star Cineplex Rizal",
    location: "Rizal",
    address: "456 Rizal Ave, Greenhills, Rizal",
    contact: "(02) 8987-6543",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "11:30 AM", type: "2D" },
          { time: "02:30 PM", type: "2D" },
          { time: "06:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m3",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:30 PM", type: "2D" },
          { time: "07:30 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c3",
    name: "Laguna Grand Cinemas",
    location: "Laguna",
    address: "789 Lakeview Rd, Santa Rosa, Laguna",
    contact: "(049) 555-1234",
    moviesPlaying: [
      {
        movieId: "m2",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m4",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:30 PM", type: "2D" },
          { time: "06:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c4",
    name: "Pampanga CineHub",
    location: "Pampanga",
    address: "101 Angeles Blvd, Angeles City, Pampanga",
    contact: "(045) 666-7890",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m5",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c5",
    name: "Cavite Filmhouse",
    location: "Cavite",
    address: "202 Coastal Rd, Bacoor, Cavite",
    contact: "(046) 777-1122",
    moviesPlaying: [
      {
        movieId: "m3",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m4",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c6",
    name: "Bulacan Cinema World",
    location: "Bulacan",
    address: "303 Bulacan St, Malolos, Bulacan",
    contact: "(044) 888-3344",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c7",
    name: "Batangas Cineplex",
    location: "Batangas",
    address: "404 Batangas Blvd, Lipa City, Batangas",
    contact: "(043) 999-5566",
    moviesPlaying: [
      {
        movieId: "m2",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c8",
    name: "Pangasinan Movie House",
    location: "Pangasinan",
    address: "505 Dagupan Rd, Dagupan City, Pangasinan",
    contact: "(075) 111-7788",
    moviesPlaying: [
      {
        movieId: "m3",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c9",
    name: "Zambales Silver Screen",
    location: "Zambales",
    address: "606 Olongapo St, Olongapo City, Zambales",
    contact: "(047) 222-9900",
    moviesPlaying: [
      {
        movieId: "m4",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c10",
    name: "Quezon Cine Vista",
    location: "Quezon",
    address: "707 Lucena Ave, Lucena City, Quezon",
    contact: "(042) 333-1122",
    moviesPlaying: [
      {
        movieId: "m5",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c11",
    name: "Baguio Peak Cinemas",
    location: "Baguio",
    address: "808 Session Rd, Baguio City, Baguio",
    contact: "(074) 444-3344",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
    ],
  },
];