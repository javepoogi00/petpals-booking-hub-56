
import React from 'react';
import AppointmentCard from './AppointmentCard';

type AppointmentType = {
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

type AppointmentListProps = {
  appointments: AppointmentType[];
  onCancelAppointment: (id: number) => void;
  onConfirmAppointment: (id: number) => void;
};

const AppointmentList = ({ 
  appointments, 
  onCancelAppointment, 
  onConfirmAppointment 
}: AppointmentListProps) => {
  return (
    <div className="divide-y divide-coquette-100">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onCancel={onCancelAppointment}
          onConfirm={onConfirmAppointment}
        />
      ))}
    </div>
  );
};

export default AppointmentList;
