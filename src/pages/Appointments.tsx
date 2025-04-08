
import { useState } from "react";
import { AppointmentsHeader } from "@/components/appointments/AppointmentsHeader";
import { AppointmentFilters } from "@/components/appointments/AppointmentFilters";
import { AppointmentList } from "@/components/appointments/AppointmentList";
import { EmptyAppointments } from "@/components/appointments/EmptyAppointments";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default function Appointments() {
  const [filter, setFilter] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Using string IDs to fix type error
  const handleCancelAppointment = (id: string) => {
    console.log("Cancelling appointment", id);
  };
  
  const handleRescheduleAppointment = (id: string) => {
    console.log("Rescheduling appointment", id);
  };
  
  const appointments = [
    // Sample appointment data
  ];
  
  const filteredAppointments = appointments.filter(appointment => {
    // Filter logic here
    return true;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <AppointmentsHeader />
          <AppointmentFilters 
            filter={filter} 
            setFilter={setFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          {filteredAppointments.length > 0 ? (
            <AppointmentList 
              appointments={filteredAppointments}
              onCancel={handleCancelAppointment}
              onReschedule={handleRescheduleAppointment}
            />
          ) : (
            <EmptyAppointments />
          )}
        </div>
      </div>
    </div>
  );
}
