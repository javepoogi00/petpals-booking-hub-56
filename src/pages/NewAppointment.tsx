
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, PawPrint, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewAppointment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    
    // Show success toast
    toast({
      title: "Appointment Booked",
      description: "Your appointment has been successfully scheduled.",
    });
    
    // Navigate to appointments list
    setTimeout(() => {
      navigate('/appointments');
    }, 1500);
  };

  const services = [
    { id: 'checkup', name: 'General Check-up', icon: '🩺' },
    { id: 'vaccination', name: 'Vaccination', icon: '💉' },
    { id: 'grooming', name: 'Pet Grooming', icon: '✂️' },
    { id: 'dental', name: 'Dental Cleaning', icon: '🦷' },
    { id: 'surgery', name: 'Surgery', icon: '🏥' },
  ];
  
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-white">
      <Navbar />
      <main className="container mx-auto pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-display text-coquette-800">Book an Appointment</h1>
            <p className="text-muted-foreground">Schedule a visit for your furry friend</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center w-full max-w-md">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-coquette-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <PawPrint className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">Pet Info</span>
              </div>
              <div className={`flex-1 h-1 ${step >= 2 ? 'bg-coquette-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-coquette-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">Date & Time</span>
              </div>
              <div className={`flex-1 h-1 ${step >= 3 ? 'bg-coquette-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-coquette-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">Confirm</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-subtle border border-coquette-100">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Pet Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="petName">Pet Name</Label>
                    <Input 
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      placeholder="Your pet's name"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="petType">Pet Type</Label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coquette-500 focus:ring focus:ring-coquette-500 focus:ring-opacity-50"
                      required
                    >
                      <option value="">Select pet type</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Bird">Bird</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label>Select Service</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {services.map(service => (
                        <div
                          key={service.id}
                          className={`p-3 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors ${
                            formData.service === service.id 
                              ? 'bg-coquette-50 border-coquette-300' 
                              : 'border-gray-200 hover:border-coquette-200'
                          }`}
                          onClick={() => setFormData({...formData, service: service.id})}
                        >
                          <span className="text-2xl mb-1">{service.icon}</span>
                          <span className="text-sm text-center">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!formData.petName || !formData.petType || !formData.service}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="date">Select Date</Label>
                    <div className="mt-1">
                      <Input 
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Select Time</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-2">
                      {times.map((time) => (
                        <div
                          key={time}
                          className={`p-3 border rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
                            formData.time === time 
                              ? 'bg-coquette-50 border-coquette-300' 
                              : 'border-gray-200 hover:border-coquette-200'
                          }`}
                          onClick={() => setFormData({...formData, time})}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          <span className="text-sm">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific concerns or requests?"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coquette-500 focus:ring focus:ring-coquette-500 focus:ring-opacity-50 h-24"
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!formData.date || !formData.time}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-coquette-50 p-6 rounded-lg border border-coquette-100">
                    <h3 className="font-bold mb-4 text-xl text-center">Appointment Summary</h3>
                    
                    <div className="divide-y divide-coquette-100">
                      <div className="py-3 grid grid-cols-3">
                        <span className="font-medium">Pet Name:</span>
                        <span className="col-span-2">{formData.petName}</span>
                      </div>
                      <div className="py-3 grid grid-cols-3">
                        <span className="font-medium">Pet Type:</span>
                        <span className="col-span-2">{formData.petType}</span>
                      </div>
                      <div className="py-3 grid grid-cols-3">
                        <span className="font-medium">Service:</span>
                        <span className="col-span-2">
                          {services.find(s => s.id === formData.service)?.name}
                        </span>
                      </div>
                      <div className="py-3 grid grid-cols-3">
                        <span className="font-medium">Date:</span>
                        <span className="col-span-2">{formData.date}</span>
                      </div>
                      <div className="py-3 grid grid-cols-3">
                        <span className="font-medium">Time:</span>
                        <span className="col-span-2">{formData.time}</span>
                      </div>
                      {formData.notes && (
                        <div className="py-3 grid grid-cols-3">
                          <span className="font-medium">Notes:</span>
                          <span className="col-span-2">{formData.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <p className="text-yellow-800 text-sm">
                      By booking this appointment, you agree to our scheduling and cancellation policies. You can cancel or reschedule your appointment up to 24 hours before the scheduled time.
                    </p>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-coquette-500 hover:bg-coquette-600"
                    >
                      Confirm Appointment
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewAppointment;
