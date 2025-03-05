import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, Plus, Search, Filter, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/ui/logo';

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

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAppointments = appointments.filter(app => 
    app.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.veterinarian.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-white">
      <header className="bg-white shadow-sm border-b border-coquette-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo size="sm" />
            <h1 className="ml-4 text-xl font-semibold text-foreground">My Appointments</h1>
          </div>
          <Button 
            variant="primary"
            size="sm"
            icon={<Plus className="w-4 h-4" />}
          >
            New Appointment
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 overflow-hidden">
          <div className="p-4 border-b border-coquette-100 flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                className="pl-9 border-coquette-200 focus-visible:ring-coquette-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Button 
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
                {filterOpen ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {filterOpen && (
            <div className="p-4 bg-coquette-50 border-b border-coquette-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <select 
                  id="status" 
                  className="mt-1 block w-full rounded-md border-coquette-200 focus:border-coquette-500 focus:ring focus:ring-coquette-500 focus:ring-opacity-50"
                >
                  <option value="">All Statuses</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </div>
              <div>
                <Label htmlFor="pet">Pet</Label>
                <select 
                  id="pet" 
                  className="mt-1 block w-full rounded-md border-coquette-200 focus:border-coquette-500 focus:ring focus:ring-coquette-500 focus:ring-opacity-50"
                >
                  <option value="">All Pets</option>
                  <option value="Max">Max</option>
                  <option value="Bella">Bella</option>
                  <option value="Charlie">Charlie</option>
                </select>
              </div>
              <div>
                <Label htmlFor="date-from">From Date</Label>
                <Input 
                  id="date-from" 
                  type="date" 
                  className="mt-1 border-coquette-200 focus-visible:ring-coquette-500"
                />
              </div>
              <div>
                <Label htmlFor="date-to">To Date</Label>
                <Input 
                  id="date-to" 
                  type="date" 
                  className="mt-1 border-coquette-200 focus-visible:ring-coquette-500"
                />
              </div>
            </div>
          )}

          {filteredAppointments.length > 0 ? (
            <div className="divide-y divide-coquette-100">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="p-4 hover:bg-coquette-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-coquette-100 rounded-full flex items-center justify-center">
                          {appointment.petType === 'Dog' ? (
                            <span className="text-xl">🐕</span>
                          ) : appointment.petType === 'Cat' ? (
                            <span className="text-xl">🐈</span>
                          ) : (
                            <span className="text-xl">🐾</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{appointment.petName} - {appointment.service}</h3>
                          <div className="mt-1 flex flex-wrap gap-y-1 gap-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-1.5 h-3.5 w-3.5" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1.5 h-3.5 w-3.5" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center">
                              <User className="mr-1.5 h-3.5 w-3.5" />
                              {appointment.veterinarian}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1.5 h-3.5 w-3.5" />
                              {appointment.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-auto">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                      {appointment.status === 'upcoming' && (
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleCancelAppointment(appointment.id)}
                            icon={<X className="w-4 h-4" />}
                          >
                            Cancel
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleConfirmAppointment(appointment.id)}
                            icon={<Check className="w-4 h-4" />}
                          >
                            Confirm
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-coquette-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-coquette-500" />
              </div>
              <h3 className="text-lg font-medium text-foreground">No appointments found</h3>
              <p className="mt-1 text-muted-foreground">
                {searchTerm ? 'Try adjusting your search or filters' : 'Schedule your first appointment with us'}
              </p>
              {!searchTerm && (
                <Button 
                  variant="primary"
                  className="mt-4"
                  icon={<Plus className="w-4 h-4" />}
                >
                  Book Appointment
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Appointments;
