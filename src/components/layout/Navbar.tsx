import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import DashboardSidebar from './DashboardSidebar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboardPath = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/appointments') || 
                          location.pathname.includes('/profile') || 
                          location.pathname.includes('/billing') ||
                          location.pathname.includes('/pets') ||
                          location.pathname.includes('/settings');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If it's a dashboard path, use a different layout with sidebar
  if (isDashboardPath) {
    return (
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1">
          <header 
            className={`z-10 transition-all duration-300 border-b ${
              isScrolled 
                ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' 
                : 'py-4 bg-white'
            }`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between">
                <div className="lg:hidden">
                  <Logo size="sm" linkTo="/" />
                </div>
                <div className="flex-1 lg:ml-64"></div>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/lovable-uploads/c999e0e9-f852-4128-a4c0-58740869d932.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }

  // Regular navigation for non-dashboard pages
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo size="md" linkTo="/" />
          
          <DesktopNav isDashboardPath={isDashboardPath} />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        isDashboardPath={isDashboardPath} 
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
