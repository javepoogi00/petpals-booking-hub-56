
import Sidebar from "@/components/layout/Sidebar";

export default function NewAppointment() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Book a New Appointment</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 mb-4">Fill out the form below to book a new appointment for your pet.</p>
            {/* Form would go here */}
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
