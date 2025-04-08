
import { useState } from "react";
import AppointmentsHeader from "@/components/appointments/AppointmentsHeader";
import AppointmentFilters from "@/components/appointments/AppointmentFilters";
import AppointmentList from "@/components/appointments/AppointmentList";
import EmptyAppointments from "@/components/appointments/EmptyAppointments";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default function Appointments() {
  const [filter, setFilter] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Using string IDs to fix type error
  const handleCancelAppointment = (id: number) => {
    console.log("Cancelling appointment", id);
  };
  
  const handleConfirmAppointment = (id: number) => {
    console.log("Confirming appointment", id);
  };
  
  const appointments = [
    {
      id: 1,
      petName: "Max",
      petType: "Dog",
      service: "Annual Check-up",
      date: "Apr 15, 2025",
      time: "10:00 AM",
      veterinarian: "Dr. Sarah Johnson",
      location: "Main Street Clinic",
      status: "upcoming"
    },
    {
      id: 2,
      petName: "Bella",
      petType: "Cat",
      service: "Vaccination",
      date: "Apr 20, 2025",
      time: "2:30 PM",
      veterinarian: "Dr. James Wilson",
      location: "Pet Care Center",
      status: "confirmed"
    },
    {
      id: 3,
      petName: "Charlie",
      petType: "Dog",
      service: "Dental Cleaning",
      date: "Mar 28, 2025",
      time: "9:15 AM",
      veterinarian: "Dr. Emily Brown",
      location: "Main Street Clinic",
      status: "completed"
    }
  ];
  
  const filteredAppointments = appointments.filter(appointment => {
    if (filter !== "all" && appointment.status !== filter) {
      return false;
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        appointment.petName.toLowerCase().includes(query) ||
        appointment.service.toLowerCase().includes(query) ||
        appointment.veterinarian.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <AppointmentsHeader />
          <AppointmentFilters 
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            searchTerm={searchQuery}
            setSearchTerm={setSearchQuery}
          />
          
          {filteredAppointments.length > 0 ? (
            <AppointmentList 
              appointments={filteredAppointments}
              onCancel={handleCancelAppointment}
              onConfirm={handleConfirmAppointment}
            />
          ) : (
            <EmptyAppointments searchTerm={searchQuery} />
          )}
        </div>
      </div>
    </div>
  );
}
