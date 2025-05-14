
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CreditCard,
  Home,
  PawPrint,
  Settings,
  User,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const navigate = useNavigate();

  const sidebarItems = [
    { 
      icon: <Home className="h-5 w-5" />, 
      label: "Dashboard", 
      href: "/dashboard" 
    },
    { 
      icon: <Calendar className="h-5 w-5" />, 
      label: "Appointments", 
      href: "/appointments" 
    },
    { 
      icon: <PawPrint className="h-5 w-5" />, 
      label: "My Pets", 
      href: "/pets" 
    },
    { 
      icon: <CreditCard className="h-5 w-5" />, 
      label: "Billing", 
      href: "/billing" 
    },
    { 
      icon: <User className="h-5 w-5" />, 
      label: "Profile", 
      href: "/profile" 
    },
    { 
      icon: <Settings className="h-5 w-5" />, 
      label: "Settings", 
      href: "/settings" 
    },
  ];

  return (
    <div className={cn("flex h-screen flex-col bg-pink-50", className)}>
      <div className="px-4 py-4">
        <div className="mb-8 flex items-center px-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/lovable-uploads/c999e0e9-f852-4128-a4c0-58740869d932.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Xanthei Iona Pilares</p>
              <p className="text-xs text-coquette-600">Pet Parent</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-1 flex-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                window.location.pathname === item.href ? 
                "bg-pink-200 text-coquette-700" : 
                "hover:bg-pink-100"
              )}
              onClick={() => navigate(item.href)}
            >
              <div className="mr-2">{item.icon}</div>
              {item.label}
            </Button>
          ))}
        </div>
        
        <div className="mt-auto pt-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={() => navigate("/login")}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
