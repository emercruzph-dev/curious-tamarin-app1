import { Cinema } from "./types";

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