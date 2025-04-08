
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import AppointmentsHeader from '@/components/appointments/AppointmentsHeader';
import AppointmentFilters from '@/components/appointments/AppointmentFilters';
import AppointmentList from '@/components/appointments/AppointmentList';
import EmptyAppointments from '@/components/appointments/EmptyAppointments';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      petName: 'Max',
      petType: 'Dog',
      service: 'Vaccination',
      date: '2023-06-15',
      time: '10:00 AM',
      veterinarian: 'Dr. Smith',
      location: 'Main Clinic',
      status: 'completed'
    },
    {
      id: 2,
      petName: 'Bella',
      petType: 'Cat',
      service: 'Check-up',
      date: '2023-06-20',
      time: '2:30 PM',
      veterinarian: 'Dr. Johnson',
      location: 'Main Clinic',
      status: 'upcoming'
    },
    {
      id: 3,
      petName: 'Charlie',
      petType: 'Dog',
      service: 'Grooming',
      date: '2023-06-25',
      time: '11:15 AM',
      veterinarian: 'Dr. Williams',
      location: 'Downtown Branch',
      status: 'upcoming'
    }
  ]);

  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleCancelAppointment = (id: number) => {
    // In a real app, this would make an API call
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'cancelled' } : app
    ));
    
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been successfully cancelled.",
    });
  };

  const handleConfirmAppointment = (id: number) => {
    // In a real app, this would make an API call
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'confirmed' } : app
    ));
    
    toast({
      title: "Appointment Confirmed",
      description: "Your appointment has been confirmed.",
    });
  };

  const filteredAppointments = appointments.filter(app => 
    app.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.veterinarian.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-white">
      <AppointmentsHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 overflow-hidden">
          <AppointmentFilters 
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {filteredAppointments.length > 0 ? (
            <AppointmentList 
              appointments={filteredAppointments}
              onCancelAppointment={handleCancelAppointment}
              onConfirmAppointment={handleConfirmAppointment}
            />
          ) : (
            <EmptyAppointments searchTerm={searchTerm} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Appointments;
