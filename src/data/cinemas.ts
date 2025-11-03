import { Cinema, Showtime } from "./types";

// Define a standard set of movies and showtimes to distribute
const standardMoviesPlaying = [
  {
    movieId: "m1",
    showtimes: [
      { time: "10:00 AM", type: "2D" },
      { time: "01:30 PM", type: "2D" },
      { time: "04:00 PM", type: "2D" },
      { time: "07:00 PM", type: "2D" },
      { time: "09:30 PM", type: "2D" },
    ],
  },
  {
    movieId: "m2",
    showtimes: [
      { time: "11:00 AM", type: "2D" },
      { time: "02:00 PM", type: "2D" },
      { time: "05:00 PM", type: "2D" },
      { time: "08:00 PM", type: "2D" },
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
    movieId: "m4",
    showtimes: [
      { time: "12:00 PM", type: "2D" },
      { time: "03:00 PM", type: "2D" },
      { time: "06:00 PM", type: "2D" },
      { time: "09:00 PM", type: "2D" },
    ],
  },
  {
    movieId: "m5",
    showtimes: [
      { time: "10:45 AM", type: "2D" },
      { time: "01:45 PM", type: "2D" },
      { time: "04:45 PM", type: "2D" },
      { time: "07:45 PM", type: "2D" },
    ],
  },
];

// Helper function to create cinemas based on a list of screen names
function createCinemasFromScreenList(
  baseCinema: Omit<Cinema, 'id' | 'name' | 'moviesPlaying'>,
  baseName: string,
  screenNames: string[],
  availableMovies: { movieId: string; showtimes: Showtime[] }[] = standardMoviesPlaying
): Cinema[] {
  return screenNames.map((screenName, index) => {
    const cinemaId = `${baseCinema.id}-${screenName.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const cinemaFullName = `${baseName} - ${screenName}`;

    // Distribute movies in a round-robin fashion to ensure each cinema gets some movies
    const moviesForThisCinema: { movieId: string; showtimes: Showtime[] }[] = [];
    if (availableMovies.length > 0) {
      // Assign 1-2 unique movies per screen
      const assignedMovieIndices = new Set<number>();
      const numMoviesToAssign = Math.min(2, availableMovies.length);

      for (let i = 0; i < numMoviesToAssign; i++) {
        let movieIndex = (index + i) % availableMovies.length;
        // Ensure unique movies for this specific cinema if possible
        while (assignedMovieIndices.has(movieIndex) && assignedMovieIndices.size < availableMovies.length) {
          movieIndex = (movieIndex + 1) % availableMovies.length;
        }
        assignedMovieIndices.add(movieIndex);
        moviesForThisCinema.push(availableMovies[movieIndex]);
      }
    }

    return {
      ...baseCinema,
      id: cinemaId,
      name: cinemaFullName,
      moviesPlaying: moviesForThisCinema,
    };
  });
}

export const mockCinemas: Cinema[] = [
  // --- METRO MANILA CINEMAS ---

  // MANDALUYONG CITY
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Mandaluyong",
      address: "EDSA, Mandaluyong, Metro Manila",
      contact: "(02) 8633-5041",
      latitude: 14.5833, // Approx. center of Mandaluyong
      longitude: 121.0333,
    },
    "SM Megamall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Cinema 7", "Cinema 8", "Cinema 9", "Cinema 10", "Cinema 11", "Cinema 12", "IMAX", "Director's Club"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Mandaluyong",
      address: "Shangri-La Plaza, Mandaluyong, Metro Manila",
      contact: "(02) 8633-7851",
      latitude: 14.5830,
      longitude: 121.0560,
    },
    "Shangri-La Plaza",
    ["Red Carpet Cinema 1", "Red Carpet Cinema 2", "Red Carpet Cinema 3", "Red Carpet Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Mandaluyong",
      address: "ADB Ave, Ortigas Center, Mandaluyong, Metro Manila",
      contact: "(02) 8638-9781",
      latitude: 14.5870,
      longitude: 121.0580,
    },
    "The Podium",
    ["Podium Cinema 1", "Podium Cinema 2", "Podium Cinema 3"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Mandaluyong",
      address: "EDSA corner Madison St., Mandaluyong, Metro Manila",
      contact: "(02) 8717-0000",
      latitude: 14.5790,
      longitude: 121.0480,
    },
    "SM Light Mall",
    ["Cinema 1", "Cinema 2"]
  ),

  // PASIG CITY
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Pasig",
      address: "Capitol Commons, Meralco Ave, Pasig, Metro Manila",
      contact: "(02) 7755-0000",
      latitude: 14.5790,
      longitude: 121.0650,
    },
    "Estancia Mall",
    ["Estancia Cinema 1", "Estancia Cinema 2", "Estancia Cinema 3", "Estancia Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Pasig",
      address: "Meralco Ave, Pasig, Metro Manila",
      contact: "(02) 7759-8000",
      latitude: 14.5850,
      longitude: 121.0680,
    },
    "Ayala Malls The 30th",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Pasig",
      address: "Ortigas Ave Ext, Pasig, Metro Manila",
      contact: "(02) 8655-0000",
      latitude: 14.5950,
      longitude: 121.0800,
    },
    "SM City East Ortigas",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Pasig",
      address: "Marcos Hwy, Pasig, Metro Manila",
      contact: "(02) 8681-0530",
      latitude: 14.6100,
      longitude: 121.0950,
    },
    "Robinsons Metro East",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),

  // QUEZON CITY
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "EDSA, Quezon City, Metro Manila",
      contact: "(02) 8929-1671",
      latitude: 14.6500, // Approx. center of SM North EDSA
      longitude: 121.0330,
    },
    "SM North EDSA",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Cinema 7", "Cinema 8", "IMAX", "Director's Club"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "EDSA cor. North Ave., Quezon City, Metro Manila",
      contact: "(02) 8925-7777",
      latitude: 14.6520,
      longitude: 121.0350,
    },
    "Trinoma",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Cinema 7"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "Araneta Center, Quezon City, Metro Manila",
      contact: "(02) 8911-5555",
      latitude: 14.6100,
      longitude: 121.0550,
    },
    "Gateway Cineplex 18",
    Array.from({ length: 18 }, (_, i) => `Cinema ${i + 1}`)
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "Aurora Blvd, Quezon City, Metro Manila",
      contact: "(02) 8961-0000",
      latitude: 14.6200,
      longitude: 121.0250,
    },
    "Robinsons Magnolia",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "Quezon Ave, Quezon City, Metro Manila",
      contact: "(02) 8294-9000",
      latitude: 14.6300,
      longitude: 121.0200,
    },
    "Fisher Mall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Quezon City",
      address: "Katipunan Ave, Quezon City, Metro Manila",
      contact: "(02) 7759-8000",
      latitude: 14.6400,
      longitude: 121.0750,
    },
    "UP Town Center",
    ["Cinema 1", "Cinema 2", "Cinema 3"]
  ),

  // MARIKINA
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Marikina",
      address: "Marcos Hwy, Marikina, Metro Manila",
      contact: "(02) 8477-1788",
      latitude: 14.6300,
      longitude: 121.0950,
    },
    "SM City Marikina",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Marikina",
      address: "Marcos Hwy, Marikina, Metro Manila",
      contact: "(02) 8681-0000",
      latitude: 14.6250,
      longitude: 121.1000,
    },
    "Bluewave Marikina",
    ["Cinema 1", "Cinema 2"]
  ),

  // MAKATI
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Makati",
      address: "Ayala Center, Makati, Metro Manila",
      contact: "(02) 7752-7272",
      latitude: 14.5500, // Approx. center of Glorietta
      longitude: 121.0250,
    },
    "Glorietta",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Makati",
      address: "Ayala Center, Makati, Metro Manila",
      contact: "(02) 7752-7272",
      latitude: 14.5520,
      longitude: 121.0260,
    },
    "Greenbelt 1",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Makati",
      address: "Ayala Center, Makati, Metro Manila",
      contact: "(02) 7752-7272",
      latitude: 14.5530,
      longitude: 121.0270,
    },
    "Greenbelt 3",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Cinema 7", "Director's Club"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Makati",
      address: "Century City, Makati, Metro Manila",
      contact: "(02) 8705-6200",
      latitude: 14.5650,
      longitude: 121.0280,
    },
    "Century City Mall",
    ["Cinema 1", "Cinema 2"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Makati",
      address: "Rockwell Center, Makati, Metro Manila",
      contact: "(02) 8898-1702",
      latitude: 14.5680,
      longitude: 121.0350,
    },
    "Power Plant Mall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6"]
  ),

  // PASAY
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Pasay",
      address: "SM Mall of Asia Complex, Pasay, Metro Manila",
      contact: "(02) 8556-0600",
      latitude: 14.5350, // Approx. center of SM Mall of Asia
      longitude: 120.9830,
    },
    "SM Mall of Asia",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "IMAX", "Director's Club"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Pasay",
      address: "Newport Blvd, Pasay, Metro Manila",
      contact: "(02) 8908-8888",
      latitude: 14.5200,
      longitude: 121.0150,
    },
    "Newport World Resorts",
    ["Newport Cinema 1", "Newport Cinema 2", "Newport Cinema 3", "Newport Cinema 4", "VIP Cinema"]
  ),

  // PARAÑAQUE
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Parañaque",
      address: "Dr. A. Santos Ave, Parañaque, Metro Manila",
      contact: "(02) 8820-0000",
      latitude: 14.4700, // Approx. center of SM City Sucat
      longitude: 121.0100,
    },
    "SM City Sucat",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Parañaque",
      address: "Dr. A. Santos Ave, Parañaque, Metro Manila",
      contact: "(02) 8829-0000",
      latitude: 14.4500,
      longitude: 121.0150,
    },
    "SM City BF Parañaque",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Parañaque",
      address: "Aseana Ave., Parañaque, Metro Manila",
      contact: "(02) 7759-8000",
      latitude: 14.5200,
      longitude: 120.9900,
    },
    "Ayala Malls Manila Bay",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "A-Giant Screen", "Director's Club 1", "Director's Club 2"]
  ),

  // TAGUIG
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Taguig",
      address: "Market! Market!, Taguig, Metro Manila",
      contact: "(02) 8886-7600",
      latitude: 14.5490, // Approx. center of Market! Market!
      longitude: 121.0540,
    },
    "Market! Market!",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Taguig",
      address: "McKinley Hill, Taguig, Metro Manila",
      contact: "(02) 7798-0000",
      latitude: 14.5350,
      longitude: 121.0500,
    },
    "Venice Grand Canal Mall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Taguig",
      address: "Uptown Bonifacio, Taguig, Metro Manila",
      contact: "(02) 7798-0000",
      latitude: 14.5580,
      longitude: 121.0450,
    },
    "Uptown Mall Bonifacio",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Ultra Cinema"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Taguig",
      address: "C5 Road, Taguig, Metro Manila",
      contact: "(02) 8815-7888",
      latitude: 14.5400,
      longitude: 121.0550,
    },
    "SM Aura Premier",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Director's Club"]
  ),

  // NOVALICHES
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Novaliches",
      address: "Quirino Hwy, Novaliches, Quezon City, Metro Manila",
      contact: "(02) 8939-0000",
      latitude: 14.7300,
      longitude: 121.0300,
    },
    "SM City Novaliches",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),

  // NAVOTAS
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Navotas",
      address: "C3 Road, Navotas, Metro Manila",
      contact: "(02) 8281-0000",
      latitude: 14.6600,
      longitude: 120.9400,
    },
    "Navotas Cinema",
    ["Cinema 1", "Cinema 2"]
  ),

  // LAS PIÑAS
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Las Piñas",
      address: "Alabang–Zapote Road, Las Piñas, Metro Manila",
      contact: "(02) 8800-0000",
      latitude: 14.4500,
      longitude: 120.9900,
    },
    "SM Southmall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Director's Club 1", "Director's Club 2"]
  ),

  // MUNTINLUPA
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Muntinlupa",
      address: "Alabang–Zapote Road, Muntinlupa, Metro Manila",
      contact: "(02) 8842-1888",
      latitude: 14.4100,
      longitude: 121.0300,
    },
    "Alabang Town Center",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Muntinlupa",
      address: "Filinvest City, Muntinlupa, Metro Manila",
      contact: "(02) 8850-3555",
      latitude: 14.4150,
      longitude: 121.0400,
    },
    "Festival Mall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Director's Club 1", "Director's Club 2"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Muntinlupa",
      address: "National Road, Muntinlupa, Metro Manila",
      contact: "(02) 8862-0000",
      latitude: 14.3800,
      longitude: 121.0450,
    },
    "SM Center Muntinlupa",
    ["Cinema 1", "Cinema 2"]
  ),

  // MANILA
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Manila",
      address: "Natividad Almeda-Lopez St., Ermita, Manila",
      contact: "(02) 8523-7044",
      latitude: 14.5900, // Approx. center of SM City Manila
      longitude: 120.9800,
    },
    "SM City Manila",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Manila",
      address: "Pedro Gil St, Ermita, Manila",
      contact: "(02) 8526-0000",
      latitude: 14.5800,
      longitude: 120.9900,
    },
    "Robinsons Place Manila",
    Array.from({ length: 8 }, (_, i) => `Cinema ${i + 1}`)
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Manila",
      address: "Binondo, Manila",
      contact: "(02) 8242-0000",
      latitude: 14.6000,
      longitude: 120.9700,
    },
    "Lucky Chinatown Mall",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "VIP Cinema"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Manila",
      address: "C.M. Recto Ave, Manila",
      contact: "(02) 8733-0000",
      latitude: 14.6050,
      longitude: 120.9850,
    },
    "Ever Gotesco Manila Plaza",
    ["Cinema 1", "Cinema 2"]
  ),

  // MALABON
  ...createCinemasFromScreenList(
    {
      location: "Metro Manila",
      city: "Malabon",
      address: "C4 Road, Malabon, Metro Manila",
      contact: "(02) 8294-9000",
      latitude: 14.6650,
      longitude: 120.9600,
    },
    "Fishermall Malabon",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5"]
  ),

  // --- BULACAN CINEMAS ---
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "MacArthur Hwy., Marilao, Bulacan",
      contact: "(044) 933-2000",
      latitude: 14.7800,
      longitude: 120.9500,
    },
    "SM City Marilao",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "DRT Highway, Baliwag, Bulacan",
      contact: "(044) 761-0000",
      latitude: 14.9500,
      longitude: 120.9000,
    },
    "SM City Baliwag",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "Quirino Highway, San Jose Del Monte, Bulacan",
      contact: "(044) 769-0000",
      latitude: 14.8000,
      longitude: 121.0500,
    },
    "SM City San Jose Del Monte",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "Plaridel-Pulilan Diversion Road, Pulilan, Bulacan",
      contact: "(044) 795-0000",
      latitude: 14.9000,
      longitude: 120.8500,
    },
    "SM Center Pulilan",
    ["Cinema 1", "Cinema 2"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "MacArthur Hwy., Malolos, Bulacan",
      contact: "(044) 791-0000",
      latitude: 14.8400,
      longitude: 120.8100,
    },
    "Robinsons Place Malolos",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "Quirino Highway, San Jose Del Monte, Bulacan",
      contact: "(044) 769-0000",
      latitude: 14.8100,
      longitude: 121.0600,
    },
    "Starmall San Jose Del Monte",
    ["Cinema 1", "Cinema 2", "Cinema 3"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "MacArthur Hwy., Bocaue, Bulacan",
      contact: "(044) 792-0000",
      latitude: 14.8100,
      longitude: 120.9300,
    },
    "CityMall Bocaue",
    ["Cinema 1"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "MacArthur Hwy., Malolos, Bulacan",
      contact: "(044) 794-0000",
      latitude: 14.8500,
      longitude: 120.8200,
    },
    "Vista Mall Malolos",
    ["VIP Theater", "Multiplex"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Bulacan",
      address: "Sta. Maria-Tungkong Mangga Road, Sta. Maria, Bulacan",
      contact: "(044) 793-0000",
      latitude: 14.8200,
      longitude: 120.9800,
    },
    "Waltermart Sta. Maria",
    ["Cinema 1", "Cinema 2"]
  ),

  // --- CAVITE CINEMAS ---
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Governor's Dr., Dasmariñas, Cavite",
      contact: "(046) 416-0000",
      latitude: 14.3200,
      longitude: 120.9300,
    },
    "SM City Dasmariñas",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Director’s Club"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Aguinaldo Hwy., Bacoor, Cavite",
      contact: "(046) 417-0000",
      latitude: 14.4300,
      longitude: 120.9400,
    },
    "SM City Bacoor",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Molino Rd., Bacoor, Cavite",
      contact: "(046) 481-0000",
      latitude: 14.4000,
      longitude: 120.9700,
    },
    "SM City Molino",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Aguinaldo Hwy., Imus, Cavite",
      contact: "(046) 471-0000",
      latitude: 14.4200,
      longitude: 120.9300,
    },
    "Robinsons Place Imus",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Arnaldo Hwy., General Trias, Cavite",
      contact: "(046) 437-0000",
      latitude: 14.3500,
      longitude: 120.8900,
    },
    "Robinsons Place General Trias",
    ["Cinema 1", "Cinema 2"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Aguinaldo Hwy., Tagaytay, Cavite",
      contact: "(046) 413-0000",
      latitude: 14.1000,
      longitude: 120.9500,
    },
    "Fora Mall Tagaytay",
    ["Cinema 1", "Cinema 2"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Aguinaldo Hwy., Dasmariñas, Cavite",
      contact: "(046) 412-0000",
      latitude: 14.3100,
      longitude: 120.9400,
    },
    "Vista Mall Dasmariñas",
    ["VIP Theater", "Multiplex"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Molino Blvd., Bacoor, Cavite",
      contact: "(046) 481-0000",
      latitude: 14.4050,
      longitude: 120.9650,
    },
    "NOMO Lifestyle Center",
    ["Multiplex", "VIP"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Cavite",
      address: "Anabu Coastal Road, Imus, Cavite",
      contact: "(046) 472-0000",
      latitude: 14.4150,
      longitude: 120.9200,
    },
    "CityMall Anabu",
    ["Cinema 1", "Cinema 2"]
  ),

  // --- ANTIPOLO (RIZAL) CINEMAS ---
  ...createCinemasFromScreenList(
    {
      location: "Antipolo",
      address: "Sumulong Hwy., Antipolo, Rizal",
      contact: "(02) 8650-3000",
      latitude: 14.5900,
      longitude: 121.1700,
    },
    "Robinsons Place Antipolo",
    ["Cinema 1", "Cinema 2", "Cinema 4", "Cinema 5", "Cinema 6", "Cinema 7", "Cinema 8"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Antipolo",
      address: "Marcos Hwy., Antipolo, Rizal",
      contact: "(02) 8655-0000",
      latitude: 14.6200,
      longitude: 121.1200,
    },
    "SM City Masinag",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),

  // --- LAGUNA CINEMAS ---
  ...createCinemasFromScreenList(
    {
      location: "Laguna",
      address: "National Rd., Santa Rosa, Laguna",
      contact: "(049) 534-0400",
      latitude: 14.2800,
      longitude: 121.0700,
    },
    "SM City Sta. Rosa",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4", "Cinema 5", "Cinema 6", "Director’s Club"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Laguna",
      address: "National Rd., Calamba, Laguna",
      contact: "(049) 545-0000",
      latitude: 14.2000,
      longitude: 121.1600,
    },
    "SM City Calamba",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Laguna",
      address: "National Rd., San Pablo, Laguna",
      contact: "(049) 562-0000",
      latitude: 14.0700,
      longitude: 121.3200,
    },
    "SM City San Pablo",
    ["Cinema 1", "Cinema 2", "Cinema 3", "Cinema 4"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Laguna",
      address: "Sta. Rosa-Tagaytay Rd., Santa Rosa, Laguna",
      contact: "(049) 544-0000",
      latitude: 14.2700,
      longitude: 121.0600,
    },
    "Vista Mall Sta. Rosa",
    ["VIP Cinema", "Multiplex"]
  ),
  ...createCinemasFromScreenList(
    {
      location: "Laguna",
      address: "National Rd., Santa Rosa, Laguna",
      contact: "(049) 534-0000",
      latitude: 14.2850,
      longitude: 121.0750,
    },
    "Robinsons Sta. Rosa",
    ["Cinema 1", "Cinema 2"]
  ),
];