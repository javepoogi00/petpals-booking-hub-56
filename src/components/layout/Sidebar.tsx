
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  PawPrint,
  Settings,
  LogOut
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    title: "Appointments",
    href: "/appointments",
    icon: <CalendarIcon className="w-5 h-5" />,
  },
  {
    title: "My Pets",
    href: "/pets",
    icon: <PawPrint className="w-5 h-5" />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <UserIcon className="w-5 h-5" />,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen bg-pink-50 flex flex-col">
      <div className="flex items-center p-4">
        <div className="font-bold text-xl text-primary">FurCare</div>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center px-4 py-2 mx-2 rounded-md transition-colors",
              location.pathname === item.href
                ? "bg-pink-200 text-coquette-700"
                : "text-gray-700 hover:bg-pink-100"
            )}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
      
      <div className="p-4">
        <Link
          to="/login"
          className="flex items-center px-4 py-2 mx-2 rounded-md transition-colors text-red-500 hover:bg-red-50"
        >
          <LogOut className="mr-3 h-5 w-5" />
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
