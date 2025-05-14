
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-coquette-50/50 p-4">
      {/* Header with navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg py-3 px-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Logo size="md" linkTo="/" />
            <nav className="hidden md:flex space-x-8">
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/appointments" className="text-muted-foreground hover:text-foreground transition-colors">Appointments</Link>
              <Link to="/billing" className="text-muted-foreground hover:text-foreground transition-colors">Billing</Link>
              <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">Profile</Link>
            </nav>
            <Button variant="primary" className="bg-coquette-500 hover:bg-coquette-600">
              <Link to="/appointments/new">New Appointment</Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-subtle p-8 flex flex-col items-center">
          {/* Logo Icon */}
          <div className="w-20 h-20 bg-coquette-100 rounded-full flex items-center justify-center mb-6">
            <Logo size="sm" showText={false} />
          </div>
          
          <h1 className="text-5xl font-bold mb-2">404</h1>
          <p className="text-2xl font-medium mb-2">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8 text-center">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <Button 
            variant="primary" 
            className="bg-coquette-500 hover:bg-coquette-600"
          >
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
