
import React from 'react';
import { Calendar, Clock, User, MapPin, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type AppointmentCardProps = {
  appointment: {
    id: number;
    petName: string;
    petType: string;
    service: string;
    date: string;
    time: string;
    veterinarian: string;
    location: string;
    status: string;
  };
  onCancel: (id: number) => void;
  onConfirm: (id: number) => void;
};

const AppointmentCard = ({ appointment, onCancel, onConfirm }: AppointmentCardProps) => {
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

  return (
    <div className="p-4 hover:bg-coquette-50 transition-colors">
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
                onClick={() => onCancel(appointment.id)}
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-green-600 border-green-200 hover:bg-green-50"
                onClick={() => onConfirm(appointment.id)}
              >
                <Check className="w-4 h-4 mr-1" />
                Confirm
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
