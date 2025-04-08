
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Link } from 'react-router-dom';

const AppointmentsHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-coquette-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo size="sm" />
          <h1 className="ml-4 text-xl font-semibold text-foreground">My Appointments</h1>
        </div>
        <Link to="/appointments/new">
          <Button 
            variant="primary"
            size="sm"
            className="bg-coquette-600 hover:bg-coquette-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Appointment
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default AppointmentsHeader;
