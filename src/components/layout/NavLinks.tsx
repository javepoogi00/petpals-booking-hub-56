
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, CreditCard, User } from 'lucide-react';

interface NavLinkProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface NavLinksProps {
  isDashboardPath: boolean;
  onClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ isDashboardPath, onClick }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
  ];

  const dashboardLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { name: 'Appointments', href: '/appointments', icon: <Calendar className="h-4 w-4 mr-2" /> },
    { name: 'Billing', href: '/billing', icon: <CreditCard className="h-4 w-4 mr-2" /> },
    { name: 'Profile', href: '/profile', icon: <User className="h-4 w-4 mr-2" /> },
  ];

  const NavLink: React.FC<NavLinkProps> = ({ name, href, icon, onClick }) => {
    const isActive = location.pathname === href;
    
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          onClick={onClick}
        >
          {name}
        </a>
      );
    }
    
    return (
      <Link
        to={href}
        className={`flex items-center text-sm font-medium transition-colors ${
          isActive ? 'text-coquette-600' : 'text-foreground/80 hover:text-primary'
        }`}
        onClick={onClick}
      >
        {icon}
        {name}
      </Link>
    );
  };

  return (
    <>
      {isDashboardPath
        ? dashboardLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={link.icon}
              onClick={onClick}
            />
          ))
        : navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              onClick={onClick}
            />
          ))}
    </>
  );
};

export default NavLinks;
