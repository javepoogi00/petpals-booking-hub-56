
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, Calendar, Filter, PlusCircle, 
  PawPrint, User, Clock, CheckCircle, AlertCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Appointments = () => {
  const [filter, setFilter] = useState('upcoming');
  
  // Mock appointment data
  const appointments = [
    { 
      id: 1, 
      pet: 'Max', 
      petType: 'Dog, Golden Retriever', 
      service: 'Annual Checkup', 
      date: 'Aug 15, 2023', 
      time: '2:30 PM', 
      doctor: 'Dr. Sarah Johnson',
      status: 'confirmed' 
    },
    { 
      id: 2, 
      pet: 'Bella', 
      petType: 'Cat, Siamese', 
      service: 'Vaccination', 
      date: 'Aug 16, 2023', 
      time: '10:00 AM', 
      doctor: 'Dr. Robert Smith',
      status: 'pending' 
    },
    { 
      id: 3, 
      pet: 'Charlie', 
      petType: 'Dog, Beagle', 
      service: 'Dental Cleaning', 
      date: 'Aug 18, 2023', 
      time: '3:15 PM', 
      doctor: 'Dr. Sarah Johnson',
      status: 'confirmed' 
    },
    { 
      id: 4, 
      pet: 'Luna', 
      petType: 'Cat, Maine Coon', 
      service: 'Neutering', 
      date: 'Jul 29, 2023', 
      time: '9:00 AM', 
      doctor: 'Dr. Michael Chen',
      status: 'completed' 
    },
    { 
      id: 5, 
      pet: 'Max', 
      petType: 'Dog, Golden Retriever', 
      service: 'Skin Condition', 
      date: 'Jul 15, 2023', 
      time: '11:45 AM', 
      doctor: 'Dr. Sarah Johnson',
      status: 'completed' 
    },
  ];
  
  // Filter appointments based on status
  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'upcoming') {
      return appointment.status === 'confirmed' || appointment.status === 'pending';
    } else if (filter === 'completed') {
      return appointment.status === 'completed';
    }
    return true; // 'all' filter
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-coquette-100 paw-pattern">
      <Navbar />
      <div className="container mx-auto pt-28 pb-16 px-4">
        <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold font-display">Appointments</h1>
              <p className="text-muted-foreground">Manage and schedule your pet's appointments</p>
            </div>
            <Link to="/appointments/new">
              <Button className="bg-coquette-500 hover:bg-coquette-600">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </Link>
          </div>
          
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center space-x-2">
              <Button 
                variant={filter === 'upcoming' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </Button>
              <Button 
                variant={filter === 'completed' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('completed')}
              >
                Completed
              </Button>
              <Button 
                variant={filter === 'all' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search appointments..." 
                  className="pl-9"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Appointments List */}
          <div className="space-y-4">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map(appointment => (
                <div 
                  key={appointment.id} 
                  className="border border-gray-100 rounded-lg p-4 hover:border-coquette-200 transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        appointment.status === 'completed' 
                          ? 'bg-green-100' 
                          : appointment.status === 'pending' 
                            ? 'bg-yellow-100' 
                            : 'bg-blue-100'
                      }`}>
                        <PawPrint className={`h-5 w-5 ${
                          appointment.status === 'completed' 
                            ? 'text-green-600' 
                            : appointment.status === 'pending' 
                              ? 'text-yellow-600' 
                              : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold">{appointment.service}</h3>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                            appointment.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : appointment.status === 'pending' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-blue-100 text-blue-800'
                          }`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <PawPrint className="mr-1 h-3.5 w-3.5" />
                          <span>{appointment.pet} ({appointment.petType})</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <User className="mr-1 h-3.5 w-3.5" />
                          <span>{appointment.doctor}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <Calendar className="mr-1 h-4 w-4 text-coquette-500" />
                        <span className="font-medium">{appointment.date}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Clock className="mr-1 h-4 w-4 text-coquette-500" />
                        <span className="font-medium">{appointment.time}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        {appointment.status !== 'completed' && (
                          <>
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">Cancel</Button>
                          </>
                        )}
                        {appointment.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            <CheckCircle className="mr-1 h-4 w-4" />
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium mb-2">No appointments found</h3>
                <p className="text-muted-foreground mb-4">You haven't scheduled any appointments yet.</p>
                <Link to="/appointments/new">
                  <Button className="bg-coquette-500 hover:bg-coquette-600">
                    Schedule Your First Appointment
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
