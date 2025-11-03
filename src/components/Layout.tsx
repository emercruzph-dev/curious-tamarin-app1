import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ThemeToggle } from "@/components/ThemeToggle"; // Import ThemeToggle

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentTab = location.pathname.startsWith("/cinemas") ? "cinemas" : "movies";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center flex-grow">PH Movies and NCR Cinema Guide</h1>
        <ThemeToggle /> {/* Add ThemeToggle here */}
      </header>

      <div className="flex-grow container mx-auto p-4 max-w-screen-md">
        <Tabs value={currentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="movies" asChild>
              <Link to="/">Movies</Link>
            </TabsTrigger>
            <TabsTrigger value="cinemas" asChild>
              <Link to="/cinemas">Cinemas</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={currentTab} className="mt-0">
            {children}
          </TabsContent>
        </Tabs>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Layout;