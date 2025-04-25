
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon, Clock, Check, ArrowLeft } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function NewAppointment() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [service, setService] = useState("");
  const [veterinarian, setVeterinarian] = useState("");
  const [time, setTime] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !petName || !petType || !service || !veterinarian || !time) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill out all fields to book your appointment."
      });
      return;
    }
    
    // In a real app, this would send data to a backend
    toast({
      title: "Appointment booked!",
      description: `Your appointment has been scheduled for ${format(date, 'PPP')} at ${time}.`,
      action: (
        <div className="h-8 w-8 bg-coquette-100 rounded-full flex items-center justify-center">
          <Check className="h-4 w-4 text-coquette-700" />
        </div>
      ),
    });
    
    // Navigate to appointments page
    navigate("/appointments");
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM"
  ];
  
  const veterinarians = [
    "Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Jessica Rodriguez", 
    "Dr. David Smith", "Dr. Emily Parker"
  ];
  
  const services = [
    "Wellness Exam", "Vaccination", "Dental Cleaning", 
    "Spay/Neuter", "Skin Condition", "Preventive Care"
  ];
  
  const petTypes = ["Dog", "Cat", "Bird", "Hamster", "Rabbit", "Guinea Pig"];

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleBack} 
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5 text-coquette-600" />
        </Button>
        <h1 className="text-3xl font-bold text-coquette-800">Book a New Appointment</h1>
      </div>
      
      <Card>
        <CardHeader className="bg-gradient-to-r from-coquette-400 to-coquette-500 text-white">
          <CardTitle>Schedule Your Pet's Visit</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="petName">Pet Name</Label>
                <Input 
                  id="petName" 
                  value={petName} 
                  onChange={(e) => setPetName(e.target.value)} 
                  placeholder="Enter your pet's name"
                  className="border-coquette-200 focus-visible:ring-coquette-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="petType">Pet Type</Label>
                <Select value={petType} onValueChange={setPetType}>
                  <SelectTrigger id="petType" className="border-coquette-200 focus:ring-coquette-500">
                    <SelectValue placeholder="Select pet type" />
                  </SelectTrigger>
                  <SelectContent>
                    {petTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className="border-coquette-200 focus:ring-coquette-500">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((svc) => (
                      <SelectItem key={svc} value={svc}>
                        {svc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="veterinarian">Veterinarian</Label>
                <Select value={veterinarian} onValueChange={setVeterinarian}>
                  <SelectTrigger id="veterinarian" className="border-coquette-200 focus:ring-coquette-500">
                    <SelectValue placeholder="Select veterinarian" />
                  </SelectTrigger>
                  <SelectContent>
                    {veterinarians.map((vet) => (
                      <SelectItem key={vet} value={vet}>
                        {vet}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-coquette-200"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and weekends
                        const day = date.getDay();
                        const isWeekend = day === 0 || day === 6;
                        return isWeekend || date < new Date(new Date().setHours(0, 0, 0, 0));
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time" className="border-coquette-200 focus:ring-coquette-500">
                    <SelectValue placeholder="Select time slot">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {time || "Select time slot"}
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-coquette-500 hover:bg-coquette-600 text-white"
              >
                Book Appointment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
