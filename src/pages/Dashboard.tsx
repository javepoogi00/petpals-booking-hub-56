
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, PawPrint, Clock, Home, Bell } from 'lucide-react';

const Dashboard = () => {
  const upcomingAppointments = [
    { id: 1, pet: 'Max', service: 'Checkup', date: 'Today, 2:30 PM', status: 'Confirmed' },
    { id: 2, pet: 'Bella', service: 'Vaccination', date: 'Tomorrow, 10:00 AM', status: 'Pending' },
  ];
  
  const recentBilling = [
    { id: 1, service: 'Annual Checkup', amount: 350, date: '2023-08-15', status: 'Paid' },
    { id: 2, service: 'Dental Cleaning', amount: 200, date: '2023-07-28', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-coquette-100 paw-pattern">
      <Navbar />
      <div className="container mx-auto pt-28 pb-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Welcome Section */}
          <div className="bg-white p-6 rounded-xl shadow-subtle border border-coquette-100 w-full md:w-2/3">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-coquette-100 flex items-center justify-center">
                <PawPrint className="h-6 w-6 text-coquette-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-display">Welcome back, Pet Parent!</h1>
                <p className="text-muted-foreground">Here's an overview of your pet's care</p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-coquette-50 p-4 rounded-lg border border-coquette-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Upcoming</span>
                  <Calendar className="h-5 w-5 text-coquette-500" />
                </div>
                <p className="text-2xl font-bold mt-2">{upcomingAppointments.length}</p>
                <p className="text-xs text-muted-foreground">Appointments</p>
              </div>
              
              <div className="bg-coquette-50 p-4 rounded-lg border border-coquette-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Due</span>
                  <DollarSign className="h-5 w-5 text-coquette-500" />
                </div>
                <p className="text-2xl font-bold mt-2">₱{recentBilling.filter(bill => bill.status === 'Pending').reduce((sum, bill) => sum + bill.amount, 0)}</p>
                <p className="text-xs text-muted-foreground">Payments</p>
              </div>
              
              <div className="bg-coquette-50 p-4 rounded-lg border border-coquette-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Next Visit</span>
                  <Clock className="h-5 w-5 text-coquette-500" />
                </div>
                <p className="text-lg font-bold mt-2">{upcomingAppointments[0]?.date || 'None'}</p>
                <p className="text-xs text-muted-foreground">Scheduled</p>
              </div>
            </div>
            
            {/* Upcoming Appointments */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold font-display">Upcoming Appointments</h2>
                <Link to="/appointments">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-3">
                  {upcomingAppointments.map(appointment => (
                    <div key={appointment.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-coquette-100 hover:border-coquette-200 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-coquette-100 rounded-full">
                          <PawPrint className="h-4 w-4 text-coquette-600" />
                        </div>
                        <div>
                          <p className="font-medium">{appointment.pet}</p>
                          <p className="text-sm text-muted-foreground">{appointment.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{appointment.date}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 bg-gray-50 rounded-lg">
                  <p className="text-muted-foreground">No upcoming appointments</p>
                  <Link to="/appointments/new">
                    <Button className="mt-3" size="sm">Schedule New</Button>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link to="/appointments/new">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/billing">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <DollarSign className="mr-2 h-4 w-4" />
                  View Billing
                </Button>
              </Link>
              <Link to="/pets">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <PawPrint className="mr-2 h-4 w-4" />
                  Pet Profiles
                </Button>
              </Link>
              <Link to="/notifications">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Recent Billing */}
          <div className="bg-white p-6 rounded-xl shadow-subtle border border-coquette-100 w-full md:w-1/3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold font-display">Recent Billing</h2>
              <Link to="/billing">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            {recentBilling.length > 0 ? (
              <div className="space-y-4">
                {recentBilling.map(bill => (
                  <div key={bill.id} className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">{bill.service}</p>
                      <p className="text-sm text-muted-foreground">{bill.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₱{bill.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        bill.status === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {bill.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 rounded-lg">
                <p className="text-muted-foreground">No billing history</p>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Total Due</span>
                <span className="font-bold text-lg">₱{recentBilling.filter(bill => bill.status === 'Pending').reduce((sum, bill) => sum + bill.amount, 0)}</span>
              </div>
              <Link to="/billing/pay">
                <Button className="w-full justify-center bg-coquette-500 hover:bg-coquette-600 mt-2">
                  Pay Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
