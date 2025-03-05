
import React from 'react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

type AppointmentCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: 'primary' | 'accent';
  className?: string;
};

const AppointmentCard = ({
  title,
  description,
  icon,
  features,
  color,
  className,
}: AppointmentCardProps) => {
  return (
    <div 
      className={cn(
        'rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2',
        color === 'primary' 
          ? 'bg-[#F2FCE2]' 
          : 'bg-[#FFDEE2]',
        className
      )}
      style={{border: '2px dashed', borderColor: color === 'primary' ? '#8B5CF6' : '#F97316'}}
    >
      <div 
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-md',
          color === 'primary' ? 'text-[#8B5CF6]' : 'text-[#F97316]'
        )}
      >
        {React.cloneElement(icon as React.ReactElement, { 
          className: 'h-6 w-6'
        })}
      </div>
      
      <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className={cn(
                "mr-2 h-5 w-5 mt-0.5",
                color === 'primary' ? 'text-[#8B5CF6]' : 'text-[#F97316]'
              )}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={color === 'primary' ? 'primary' : 'accent'}
        className="w-full justify-center font-display"
      >
        Book {title} ✨
      </Button>
    </div>
  );
};

export default AppointmentCard;
