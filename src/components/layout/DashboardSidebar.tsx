
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Calendar,
  PawPrint,
  CreditCard,
  User,
  Settings,
  LogOut,
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
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

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
      "flex h-full flex-col text-coquette-900 bg-pink-50",
      className
    )}>
      <div className="p-4 flex items-center">
        <Logo size="sm" showText={true} linkTo="/" className="text-coquette-700" />
      </div>
      
      <div className="px-4 py-3 mb-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/lovable-uploads/c999e0e9-f852-4128-a4c0-58740869d932.png" alt="User" />
            <AvatarFallback>XP</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Xanthei Iona Pilares</p>
            <p className="text-xs text-coquette-600">Pet Parent</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                "w-full flex items-center justify-start rounded-none h-12 px-4",
                isActive 
                  ? "bg-pink-200 text-coquette-700" 
                  : "hover:bg-pink-100 text-coquette-900"
              )}
              onClick={() => navigate(item.url)}
            >
              <div className="mr-3">{item.icon}</div>
              <span>{item.title}</span>
            </Button>
          );
        })}
      </div>
      
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full flex items-center justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={() => navigate("/login")}
        >
          <LogOut className="mr-3" />
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  );

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
        <DrawerContent className="h-[90vh] p-0">
          <DrawerClose className="absolute right-4 top-4" />
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    );
  }

  return <SidebarContent />;
}

export default DashboardSidebar;
