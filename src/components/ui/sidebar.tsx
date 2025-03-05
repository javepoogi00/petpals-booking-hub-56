import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Settings, 
  CreditCard, 
  User, 
  Bell, 
  Menu, 
  X,
  LogOut,
  HelpCircle,
  Heart,
  Paw,
  MessageSquare,
  ShoppingBag,
  BarChart
} from 'lucide-react';

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ className, isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const sidebarLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home className="h-5 w-5" /> },
    { name: 'Appointments', path: '/appointments', icon: <Calendar className="h-5 w-5" /> },
    { name: 'My Pets', path: '/pets', icon: <Paw className="h-5 w-5" /> },
    { name: 'Messages', path: '/messages', icon: <MessageSquare className="h-5 w-5" /> },
    { name: 'Shop', path: '/shop', icon: <ShoppingBag className="h-5 w-5" /> },
    { name: 'Billing', path: '/billing', icon: <CreditCard className="h-5 w-5" /> },
    { name: 'Health Records', path: '/health-records', icon: <BarChart className="h-5 w-5" /> },
  ];

  const bottomLinks = [
    { name: 'Help & Support', path: '/support', icon: <HelpCircle className="h-5 w-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 flex flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:z-0",
          className
        )}
      >
        {/* Mobile close button */}
        <div className="absolute right-2 top-2 lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-sidebar-foreground hover:bg-sidebar-accent/10"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        {/* Logo and branding */}
        <div className="flex h-14 items-center border-b border-sidebar-border px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-1">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-sidebar-foreground">FurCare</span>
          </Link>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-2 border-b border-sidebar-border p-4">
          <Avatar size="sm">
            <AvatarImage src="/lovable-uploads/c999e0e9-f852-4128-a4c0-58740869d932.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">Sarah Johnson</span>
            <Link to="/profile" className="text-xs text-sidebar-foreground/60 hover:text-sidebar-primary">
              View Profile
            </Link>
          </div>
        </div>

        {/* Main navigation */}
        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {sidebarLinks.map((link) => (
              <Tooltip key={link.path} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link to={link.path}>
                    <Button
                      variant={isActive(link.path) ? "sidebar" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start",
                        isActive(link.path) 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                      )}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="border-sidebar-border bg-sidebar text-sidebar-foreground">
                  {link.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </ScrollArea>

        {/* Bottom links */}
        <div className="grid gap-1 px-2 py-2 border-t border-sidebar-border">
          {bottomLinks.map((link) => (
            <Tooltip key={link.path} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link to={link.path}>
                  <Button
                    variant={isActive(link.path) ? "sidebar" : "ghost"}
                    size="sm"
                    className={cn(
                      "w-full justify-start",
                      isActive(link.path) 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="border-sidebar-border bg-sidebar text-sidebar-foreground">
                {link.name}
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Logout button */}
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
          >
            <LogOut className="h-5 w-5" />
            <span className="ml-2">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Toggle button for mobile */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-40 rounded-full shadow-lg lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
    </>
  );
}
