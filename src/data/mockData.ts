import { format } from "date-fns";

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
  | "Pasig";

export const metroManilaCities: MetroManilaCity[] = [
  "Mandaluyong",
  "Quezon City",
  "Parañaque",
  "Makati",
  "Taguig",
  "Pasig",
];

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
  moviesPlaying: {
    movieId: string;
    showtimes: Showtime[];
  }[];
}

export const locations: Location[] = [
  "Metro Manila",
  "Laguna",
  "Antipolo",
  "Bulacan",
  "Pampanga",
  "Cavite",
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
    name: "SM Megamall Cinema",
    location: "Metro Manila",
    city: "Mandaluyong",
    address: "EDSA, Mandaluyong, Metro Manila",
    contact: "(02) 8633-5041",
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
      {
        movieId: "m3",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:30 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c2",
    name: "Robinsons Galleria Cinema",
    location: "Metro Manila",
    city: "Quezon City",
    address: "EDSA cor. Ortigas Ave., Quezon City, Metro Manila",
    contact: "(02) 8631-8000",
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
      {
        movieId: "m5",
        showtimes: [
          { time: "12:00 PM", type: "2D" },
          { time: "03:00 PM", type: "2D" },
          { time: "09:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c3",
    name: "Ayala Malls Manila Bay Cinema",
    location: "Metro Manila",
    city: "Parañaque",
    address: "Aseana Ave., Parañaque, Metro Manila",
    contact: "(02) 7759-8000",
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
      {
        movieId: "m1",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:30 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c12",
    name: "SM Aura Premier Cinema",
    location: "Metro Manila",
    city: "Taguig",
    address: "C5 Road, Taguig, Metro Manila",
    contact: "(02) 8815-7888",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:00 PM", type: "Director's Club" },
          { time: "03:30 PM", type: "2D" },
          { time: "06:00 PM", type: "IMAX" },
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
    id: "c13",
    name: "Greenbelt 3 Cinemas",
    location: "Metro Manila",
    city: "Makati",
    address: "Ayala Center, Makati, Metro Manila",
    contact: "(02) 7752-7272",
    moviesPlaying: [
      {
        movieId: "m2",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "Director's Club" },
        ],
      },
      {
        movieId: "m3",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m4",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c14",
    name: "Robinsons Metro East Cinema",
    location: "Metro Manila",
    city: "Pasig",
    address: "Marcos Hwy, Pasig, Metro Manila",
    contact: "(02) 8681-0530",
    moviesPlaying: [
      {
        movieId: "m4",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m1",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m5",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c4",
    name: "SM City Sta. Rosa Cinema",
    location: "Laguna",
    address: "National Rd., Santa Rosa, Laguna",
    contact: "(049) 534-0400",
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
      {
        movieId: "m2",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c5",
    name: "Robinsons Place Antipolo Cinema",
    location: "Antipolo",
    address: "Sumulong Hwy., Antipolo, Rizal",
    contact: "(02) 8650-3000",
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
      {
        movieId: "m1",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c6",
    name: "Ayala Malls Cloverleaf Cinema",
    location: "Metro Manila",
    city: "Quezon City",
    address: "A. Bonifacio Ave., Quezon City, Metro Manila",
    contact: "(02) 7759-8000",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m3",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m5",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c7",
    name: "SM City Marilao Cinema",
    location: "Bulacan",
    address: "MacArthur Hwy., Marilao, Bulacan",
    contact: "(044) 933-2000",
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
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m1",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c8",
    name: "Robinsons Starmills Pampanga Cinema",
    location: "Pampanga",
    address: "Jose Abad Santos Ave., San Fernando, Pampanga",
    contact: "(045) 875-1000",
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
        movieId: "m5",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m2",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c9",
    name: "Ayala Malls Solenad Cinema",
    location: "Laguna",
    address: "Nuvali Blvd., Santa Rosa, Laguna",
    contact: "(049) 544-5000",
    moviesPlaying: [
      {
        movieId: "m4",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m1",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m3",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c10",
    name: "SM City Dasmariñas Cinema",
    location: "Cavite",
    address: "Governor's Dr., Dasmariñas, Cavite",
    contact: "(046) 416-0000",
    moviesPlaying: [
      {
        movieId: "m5",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m2",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m4",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
  {
    id: "c11",
    name: "Robinsons Place Gen. Trias Cinema",
    location: "Cavite",
    address: "Arnaldo Hwy., General Trias, Cavite",
    contact: "(046) 437-0000",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
          { time: "04:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m3",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
          { time: "05:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m5",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
    ],
  },
];