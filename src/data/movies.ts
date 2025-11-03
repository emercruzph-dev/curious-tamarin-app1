import { format } from "date-fns";
import { Movie } from "./types";

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
      "A detective races against time to uncover the truth behind a series of mysterious disappearations.",
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