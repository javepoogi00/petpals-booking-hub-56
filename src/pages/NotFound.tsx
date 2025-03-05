
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PawPrint, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-subtle p-8 animate-fade-in">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <PawPrint className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl font-medium mb-2">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button 
          variant="primary" 
          icon={<ArrowLeft className="w-4 h-4" />}
          className="mx-auto"
          onClick={() => window.location.href = '/'}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
