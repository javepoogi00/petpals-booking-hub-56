
import React from 'react';
import { Calendar, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type EmptyAppointmentsProps = {
  searchTerm: string;
};

const EmptyAppointments = ({ searchTerm }: EmptyAppointmentsProps) => {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto w-16 h-16 bg-coquette-100 rounded-full flex items-center justify-center mb-4">
        <Calendar className="h-8 w-8 text-coquette-500" />
      </div>
      <h3 className="text-lg font-medium text-foreground">No appointments found</h3>
      <p className="mt-1 text-muted-foreground">
        {searchTerm ? 'Try adjusting your search or filters' : 'Schedule your first appointment with us'}
      </p>
      {!searchTerm && (
        <Link to="/appointments/new">
          <Button 
            variant="primary"
            className="mt-4"
          >
            <Plus className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        </Link>
      )}
    </div>
  );
};

export default EmptyAppointments;
