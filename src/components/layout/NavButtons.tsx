
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavButtonsProps {
  isDashboardPath: boolean;
  onClick?: () => void;
}

export const NavButtons: React.FC<NavButtonsProps> = ({ isDashboardPath, onClick }) => {
  return (
    <>
      {isDashboardPath ? (
        <Link to="/appointments/new" onClick={onClick}>
          <Button variant="primary" size="sm">
            New Appointment
            <Calendar className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      ) : (
        <Link to="/register" onClick={onClick}>
          <Button variant="primary" size="sm">
            Register
            <Calendar className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </>
  );
};

export default NavButtons;
