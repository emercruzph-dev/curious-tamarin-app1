import { Cinema, Showtime } from "./types";

// Helper function to create numbered cinemas from a base cinema entry
function createNumberedCinemas(
  baseCinema: Omit<Cinema, 'id' | 'name' | 'moviesPlaying'>,
  baseName: string,
  numCinemas: number,
  moviesPlaying: { movieId: string; showtimes: Showtime[] }[]
): Cinema[] {
  const numberedCinemas: Cinema[] = [];
  const moviesPerCinema = Math.ceil(moviesPlaying.length / numCinemas);

  for (let i = 0; i < numCinemas; i++) {
    const cinemaId = `${baseCinema.id}-cinema${i + 1}`;
    const cinemaName = `${baseName} Cinema ${i + 1}`;
    const assignedMovies: { movieId: string; showtimes: Showtime[] }[] = [];

    // Distribute movies somewhat evenly in a round-robin fashion
    for (let j = 0; j < moviesPlaying.length; j++) {
      if (j % numCinemas === i) {
        assignedMovies.push(moviesPlaying[j]);
      }
    }

    // Ensure each cinema has at least one movie if available, to avoid empty lists
    if (assignedMovies.length === 0 && moviesPlaying.length > 0) {
      assignedMovies.push(moviesPlaying[i % moviesPlaying.length]);
    }

    numberedCinemas.push({
      ...baseCinema,
      id: cinemaId,
      name: cinemaName,
      moviesPlaying: assignedMovies,
    });
  }
  return numberedCinemas;
}

export const mockCinemas: Cinema[] = [
  // SM Megamall
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Mandaluyong",
      address: "EDSA, Mandaluyong, Metro Manila",
      contact: "(02) 8633-5041",
    },
    "SM Megamall",
    4, // 4 regular cinemas
    [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "07:00 PM", type: "2D" },
        ],
      },
      {
        movieId: "m2",
        showtimes: [
          { time: "11:00 AM", type: "2D" },
          { time: "02:00 PM", type: "2D" },
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
    ]
  ),
  {
    id: "c1-imax",
    name: "SM Megamall - IMAX",
    location: "Metro Manila",
    city: "Mandaluyong",
    address: "EDSA, Mandaluyong, Metro Manila",
    contact: "(02) 8633-5041",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "04:00 PM", type: "IMAX" },
          { time: "09:30 PM", type: "IMAX" },
        ],
      },
    ],
  },
  {
    id: "c1-directors-club",
    name: "SM Megamall - Director's Club",
    location: "Metro Manila",
    city: "Mandaluyong",
    address: "EDSA, Mandaluyong, Metro Manila",
    contact: "(02) 8633-5041",
    moviesPlaying: [
      {
        movieId: "m2",
        showtimes: [
          { time: "05:00 PM", type: "Director's Club" },
        ],
      },
    ],
  },

  // Robinsons Galleria Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "EDSA cor. Ortigas Ave., Quezon City, Metro Manila",
      contact: "(02) 8631-8000",
    },
    "Robinsons Galleria",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Ayala Malls Manila Bay Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Parañaque",
      address: "Aseana Ave., Parañaque, Metro Manila",
      contact: "(02) 7759-8000",
    },
    "Ayala Malls Manila Bay",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // SM Aura Premier
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Taguig",
      address: "C5 Road, Taguig, Metro Manila",
      contact: "(02) 8815-7888",
    },
    "SM Aura Premier",
    3, // 3 regular cinemas
    [
      {
        movieId: "m1",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "03:30 PM", type: "2D" },
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
    ]
  ),
  {
    id: "c12-directors-club",
    name: "SM Aura Premier - Director's Club",
    location: "Metro Manila",
    city: "Taguig",
    address: "C5 Road, Taguig, Metro Manila",
    contact: "(02) 8815-7888",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "01:00 PM", type: "Director's Club" },
        ],
      },
    ],
  },
  {
    id: "c12-imax",
    name: "SM Aura Premier - IMAX",
    location: "Metro Manila",
    city: "Taguig",
    address: "C5 Road, Taguig, Metro Manila",
    contact: "(02) 8815-7888",
    moviesPlaying: [
      {
        movieId: "m1",
        showtimes: [
          { time: "06:00 PM", type: "IMAX" },
        ],
      },
    ],
  },

  // Greenbelt 3
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Makati",
      address: "Ayala Center, Makati, Metro Manila",
      contact: "(02) 7752-7272",
    },
    "Greenbelt 3",
    3, // 3 regular cinemas
    [
      {
        movieId: "m2",
        showtimes: [
          { time: "10:00 AM", type: "2D" },
          { time: "01:00 PM", type: "2D" },
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
    ]
  ),
  {
    id: "c13-directors-club",
    name: "Greenbelt 3 - Director's Club",
    location: "Metro Manila",
    city: "Makati",
    address: "Ayala Center, Makati, Metro Manila",
    contact: "(02) 7752-7272",
    moviesPlaying: [
      {
        movieId: "m2",
        showtimes: [
          { time: "04:00 PM", type: "Director's Club" },
        ],
      },
    ],
  },

  // Robinsons Metro East Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Pasig",
      address: "Marcos Hwy, Pasig, Metro Manila",
      contact: "(02) 8681-0530",
    },
    "Robinsons Metro East",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Robinsons Place Las Piñas Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Las Piñas",
      address: "Alabang–Zapote Road, Las Piñas, Metro Manila",
      contact: "(02) 8800-0000",
    },
    "Robinsons Place Las Piñas",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // SM City Manila Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Manila",
      address: "Natividad Almeda-Lopez St., Ermita, Manila",
      contact: "(02) 8523-7044",
    },
    "SM City Manila",
    3, // 3 regular cinemas
    [
      {
        movieId: "m2",
        showtimes: [
          { time: "10:30 AM", type: "2D" },
          { time: "01:30 PM", type: "2D" },
          { time: "04:30 PM", type: "2D" },
        ],
      },
      {
        movieId: "m4",
        showtimes: [
          { time: "11:30 AM", type: "2D" },
          { time: "02:30 PM", type: "2D" },
          { time: "05:30 PM", type: "2D" },
        ],
      },
    ]
  ),

  // SM City Caloocan Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Caloocan",
      address: "Bagong Barrio, Caloocan, Metro Manila",
      contact: "(02) 8362-0000",
    },
    "SM City Caloocan",
    3, // 3 regular cinemas
    [
      {
        movieId: "m5",
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
    ]
  ),

  // Ayala Malls South Park Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Muntinlupa",
      address: "National Road, Alabang, Muntinlupa, Metro Manila",
      contact: "(02) 7759-8000",
    },
    "Ayala Malls South Park",
    3, // 3 regular cinemas
    [
      {
        movieId: "m2",
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
    ]
  ),

  // SM City Sta. Rosa Cinema
  ...createNumberedCinemas(
    {
      location: "Laguna",
      address: "National Rd., Santa Rosa, Laguna",
      contact: "(049) 534-0400",
    },
    "SM City Sta. Rosa",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Robinsons Place Antipolo Cinema
  ...createNumberedCinemas(
    {
      location: "Antipolo",
      address: "Sumulong Hwy., Antipolo, Rizal",
      contact: "(02) 8650-3000",
    },
    "Robinsons Place Antipolo",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Ayala Malls Cloverleaf Cinema
  ...createNumberedCinemas(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "A. Bonifacio Ave., Quezon City, Metro Manila",
      contact: "(02) 7759-8000",
    },
    "Ayala Malls Cloverleaf",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // SM City Marilao Cinema
  ...createNumberedCinemas(
    {
      location: "Bulacan",
      address: "MacArthur Hwy., Marilao, Bulacan",
      contact: "(044) 933-2000",
    },
    "SM City Marilao",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Robinsons Starmills Pampanga Cinema
  ...createNumberedCinemas(
    {
      location: "Pampanga",
      address: "Jose Abad Santos Ave., San Fernando, Pampanga",
      contact: "(045) 875-1000",
    },
    "Robinsons Starmills Pampanga",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Ayala Malls Solenad Cinema
  ...createNumberedCinemas(
    {
      location: "Laguna",
      address: "Nuvali Blvd., Santa Rosa, Laguna",
      contact: "(049) 544-5000",
    },
    "Ayala Malls Solenad",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // SM City Dasmariñas Cinema
  ...createNumberedCinemas(
    {
      location: "Cavite",
      address: "Governor's Dr., Dasmariñas, Cavite",
      contact: "(046) 416-0000",
    },
    "SM City Dasmariñas",
    3, // 3 regular cinemas
    [
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
    ]
  ),

  // Robinsons Place Gen. Trias Cinema
  ...createNumberedCinemas(
    {
      location: "Cavite",
      address: "Arnaldo Hwy., General Trias, Cavite",
      contact: "(046) 437-0000",
    },
    "Robinsons Place Gen. Trias",
    3, // 3 regular cinemas
    [
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
          { time: "07:00 PM", "type": "2D" },
        ],
      },
    ]
  ),
];