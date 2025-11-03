import React from "react";
import { Link } from "react-router-dom";
import { mockCinemas, locations, Cinema, Location } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const CinemasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState<Location | "all">("all");

  const filteredCinemas = mockCinemas.filter((cinema) => {
    const matchesSearch = cinema.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedLocation === "all" || cinema.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          placeholder="Search cinemas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedLocation} onValueChange={(value: Location | "all") => setSelectedLocation(value)}>
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCinemas.length > 0 ? (
          filteredCinemas.map((cinema) => (
            <Link to={`/cinemas/${cinema.id}`} key={cinema.id}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">{cinema.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {cinema.address}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cinema.location}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No cinemas found.</p>
        )}
      </div>
    </div>
  );
};

export default CinemasPage;