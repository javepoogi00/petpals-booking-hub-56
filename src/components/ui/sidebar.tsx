// Update the import to use the correct hook name
import { useIsMobile } from "@/hooks/use-mobile";
import React, { useState } from 'react';
import {
  Home,
  Calendar,
  Users,
  BarChart,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const sidebarItems = [
    {
      href: '/dashboard',
      icon: Home,
      label: 'Dashboard',
    },
    {
      href: '/appointments',
      icon: Calendar,
      label: 'Appointments',
    },
    {
      href: '/billing',
      icon: BarChart,
      label: 'Billing',
    },
    {
      href: '/users',
      icon: Users,
      label: 'Users',
    },
    {
      href: '/settings',
      icon: Settings,
      label: 'Settings',
    },
    {
      href: '/help',
      icon: HelpCircle,
      label: 'Help',
    },
  ];

  const activeSidebarItem = sidebarItems.find(item => location.pathname === item.href);

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 flex-col bg-sidebar border-r border-sidebar-border shadow-lg transition-transform duration-300 ease-in-out",
        isOpen ? 'translate-x-0' : '-translate-x-full',
        isMobile ? 'top-0' : 'top-16 mt-0',
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between py-4 px-6">
        <Logo size="md" linkTo="/dashboard" />
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col justify-between h-[calc(100vh-8rem)]">
        <nav className="flex-1">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center py-3 px-6 text-sm font-medium rounded-md transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground",
                    )
                  }
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Account Menu */}
        <div className="border-t border-sidebar-border py-3">
          <div className="px-6">
            <Button variant="ghost" className="w-full justify-between" onClick={toggleAccountMenu}>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Account
              </div>
              {isAccountMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
          {isAccountMenuOpen && (
            <div className="py-2">
              <ul>
                <li>
                  <Link to="/profile" className="block py-2 px-6 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="block py-2 px-6 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className="block py-2 px-6 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
