import React from "react";
import { Link } from "react-router-dom";
import { mockMovies, locations, metroManilaCities, Movie, Location, MetroManilaCity } from "@/data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MoviesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState<Location | "all">("all");
  const [selectedMetroManilaCity, setSelectedMetroManilaCity] = React.useState<MetroManilaCity | "all">("all");

  const handleLocationChange = (value: Location | "all") => {
    setSelectedLocation(value);
    // Reset city filter if location changes and it's not Metro Manila
    if (value !== "Metro Manila") {
      setSelectedMetroManilaCity("all");
    }
  };

  const filteredMovies = mockMovies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    // For movies, we don't filter by location directly on the movie list,
    // but rather show all movies and then their showtimes will be location-specific.
    // The location filter here will be for future use or if we decide to show
    // "movies playing in X location" on this page. For now, it's a placeholder.
    return matchesSearch;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedLocation} onValueChange={handleLocationChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((loc) => (
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
              {metroManilaCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-3 flex-grow flex flex-col justify-between">
                  <CardTitle className="text-sm font-semibold mb-1 line-clamp-2">
                    {movie.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1">
                    {movie.genre.map((genre) => (
                      <Badge key={genre} variant="secondary" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;