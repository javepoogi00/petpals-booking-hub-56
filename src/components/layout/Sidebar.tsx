
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  X
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
    title: "Profile",
    href: "/profile",
    icon: <UserIcon className="w-5 h-5" />,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cn(
      "h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
      collapsed ? "w-[70px]" : "w-[250px]"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="font-bold text-xl text-primary">PetPals</div>
        )}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-auto">
          {collapsed ? <MenuIcon size={20} /> : <X size={20} />}
        </Button>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center px-4 py-2 mx-2 rounded-md transition-colors",
              location.pathname === item.href
                ? "bg-primary/10 text-primary"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <span className="mr-3">{item.icon}</span>
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
