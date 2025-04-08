
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CreditCard,
  Home,
  PawPrint,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  className?: string;
  expanded?: boolean;
}

export function DashboardSidebar({ className, expanded = true }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(expanded);
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  const sidebarItems = [
    { 
      title: "Dashboard", 
      url: "/dashboard", 
      icon: <Home className="h-5 w-5" />, 
    },
    { 
      title: "Appointments", 
      url: "/appointments", 
      icon: <Calendar className="h-5 w-5" />, 
    },
    { 
      title: "My Pets", 
      url: "/pets", 
      icon: <PawPrint className="h-5 w-5" />, 
    },
    { 
      title: "Billing", 
      url: "/billing", 
      icon: <CreditCard className="h-5 w-5" />, 
    },
    { 
      title: "Profile", 
      url: "/profile", 
      icon: <User className="h-5 w-5" />, 
    },
    { 
      title: "Settings", 
      url: "/settings", 
      icon: <Settings className="h-5 w-5" />, 
    },
  ];

  const SidebarContent = () => (
    <div className={cn(
      "flex h-full flex-col bg-white border-r border-gray-200", 
      "text-coquette-900 bg-coquette-50", // Pink color scheme
      isExpanded ? "w-64" : "w-20",
      className
    )}>
      <div className="px-3 py-4 flex flex-col h-full">
        <div className="mb-8 flex items-center px-2 justify-between">
          <div className={cn("flex items-center gap-2", !isExpanded && "justify-center w-full")}>
            <Logo size="sm" showText={isExpanded} linkTo="/" />
          </div>
          {isDesktop && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-0 h-8 w-8 hover:bg-coquette-100"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          )}
        </div>
        
        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-4 w-full flex items-center justify-start bg-coquette-100 text-coquette-700 hover:bg-coquette-200"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {isExpanded && <span>Back</span>}
        </Button>
        
        {isExpanded && (
          <div className="mb-8 px-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/lovable-uploads/c999e0e9-f852-4128-a4c0-58740869d932.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Emma Thompson</p>
                <p className="text-xs text-coquette-600">Pet Parent</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-1 flex-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                "w-full flex items-center justify-start",
                !isExpanded && "px-2 justify-center",
                location.pathname === item.url ? 
                "bg-coquette-100 text-coquette-700" : 
                "hover:bg-coquette-50 text-coquette-900"
              )}
              onClick={() => navigate(item.url)}
            >
              <div className="mr-2">{item.icon}</div>
              {isExpanded && <span>{item.title}</span>}
            </Button>
          ))}
        </div>
        
        <div className="mt-auto pb-4">
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center justify-start text-red-500 hover:text-red-600 hover:bg-red-50",
              !isExpanded && "px-2 justify-center"
            )}
          >
            <LogOut className="mr-2 h-5 w-5" />
            {isExpanded && <span>Sign Out</span>}
          </Button>
        </div>
      </div>
    </div>
  );

  // Mobile version uses a drawer
  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-coquette-50 text-coquette-700 hover:bg-coquette-100"
          >
            <PawPrint className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh] bg-coquette-50">
          <DrawerClose className="absolute right-4 top-4" />
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    );
  }

  // Desktop version
  return <SidebarContent />;
}

export default DashboardSidebar;
