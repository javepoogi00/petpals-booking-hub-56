
import Sidebar from "@/components/layout/Sidebar";
import AppointmentsHeader from "@/components/appointments/AppointmentsHeader";
import AppointmentFilters from "@/components/appointments/AppointmentFilters";
import AppointmentList from "@/components/appointments/AppointmentList";
import EmptyAppointments from "@/components/appointments/EmptyAppointments";

export default function Appointments() {
  // This is just for demo purposes
  const hasAppointments = false;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <AppointmentsHeader />
          <AppointmentFilters />
          {hasAppointments ? <AppointmentList /> : <EmptyAppointments />}
        </div>
      </div>
    </div>
  );
}
