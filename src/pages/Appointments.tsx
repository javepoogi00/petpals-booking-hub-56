
import React, { useState } from 'react';
import Sidebar from "@/components/layout/Sidebar";
import AppointmentsHeader from "@/components/appointments/AppointmentsHeader";
import AppointmentFilters from "@/components/appointments/AppointmentFilters";
import AppointmentList from "@/components/appointments/AppointmentList";
import EmptyAppointments from "@/components/appointments/EmptyAppointments";

// Sample appointment data
const sampleAppointments = [
  // Add your sample appointments here if needed
];

export default function Appointments() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [appointments, setAppointments] = useState(sampleAppointments);

  const handleCancelAppointment = (id: string) => {
    // Handle cancellation logic here
    console.log('Cancelling appointment', id);
  };

  const handleConfirmAppointment = (id: string) => {
    // Handle confirmation logic here
    console.log('Confirming appointment', id);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <AppointmentsHeader />
          <AppointmentFilters 
            filterOpen={filterOpen} 
            setFilterOpen={setFilterOpen} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
          {appointments.length > 0 ? (
            <AppointmentList 
              appointments={appointments} 
              onCancelAppointment={handleCancelAppointment} 
              onConfirmAppointment={handleConfirmAppointment} 
            />
          ) : (
            <EmptyAppointments searchTerm={searchTerm} />
          )}
        </div>
      </div>
    </div>
  );
}
