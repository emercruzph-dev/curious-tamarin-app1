import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockCinemas, mockMovies, Cinema, Movie, Showtime } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Film, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const CinemaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cinema = mockCinemas.find((c) => c.id === id);

  if (!cinema) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">Cinema Not Found</h2>
        <p className="text-muted-foreground mt-2">The cinema you are looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link to="/cinemas">Back to Cinemas</Link>
        </Button>
      </div>
    );
  }

  const moviesPlayingDetails = cinema.moviesPlaying
    .map((mp) => {
      const movie = mockMovies.find((m) => m.id === mp.movieId);
      return movie ? { ...movie, showtimes: mp.showtimes } : null;
    })
    .filter(Boolean) as (Movie & { showtimes: Showtime[] })[];

  return (
    <ScrollArea className="h-[calc(100vh-180px)]">
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">{cinema.name}</h2>
          <p className="text-muted-foreground flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {cinema.address}, {cinema.location}
          </p>
          <p className="text-muted-foreground flex items-center gap-1">
            <Phone className="h-4 w-4" /> {cinema.contact}
          </p>
        </div>

        <Separator />

        <h3 className="text-2xl font-bold mt-6">Now Showing</h3>
        {moviesPlayingDetails.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {moviesPlayingDetails.map((movie) => (
              <Card key={movie.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Film className="h-5 w-5" />
                    <Link to={`/movies/${movie.id}`} className="hover:underline">
                      {movie.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {movie.duration} | {movie.rating}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {movie.genre.map((genre) => (
                      <Badge key={genre} variant="secondary" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {movie.synopsis}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {movie.showtimes.map((showtime, index) => (
                      <Badge key={index} variant="default" className="px-3 py-1 text-sm">
                        {showtime.time} ({showtime.type})
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No movies currently showing at this cinema.</p>
        )}
      </div>
    </ScrollArea>
  );
};

export default CinemaDetailPage;