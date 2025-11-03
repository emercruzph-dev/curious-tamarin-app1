import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import the new Layout component
import MoviesPage from "./pages/MoviesPage"; // Import MoviesPage
import CinemasPage from "./pages/CinemasPage"; // Import CinemasPage
import MovieDetailPage from "./pages/MovieDetailPage"; // Import MovieDetailPage
import CinemaDetailPage from "./pages/CinemaDetailPage"; // Import CinemaDetailPage
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* Wrap routes with the Layout component */}
          <Routes>
            <Route path="/" element={<MoviesPage />} /> {/* Default to MoviesPage */}
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/cinemas" element={<CinemasPage />} />
            <Route path="/cinemas/:id" element={<CinemaDetailPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;