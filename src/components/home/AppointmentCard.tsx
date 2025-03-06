
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

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
  const handleFeatureClick = (feature: string) => {
    console.log(`Feature clicked: ${feature}`);
    // This could later be expanded to show feature details or navigate to a specific page
  };

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
          <li 
            key={index} 
            className="flex items-start cursor-pointer group"
            onClick={() => handleFeatureClick(feature)}
          >
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
            <span className={cn(
              "text-sm transition-colors duration-200",
              color === 'primary' 
                ? 'group-hover:text-[#8B5CF6] group-hover:font-medium' 
                : 'group-hover:text-[#F97316] group-hover:font-medium'
            )}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "w-full justify-center font-medium text-white rounded-full py-3",
          color === 'primary' 
            ? 'bg-[#FF4E93] hover:bg-[#FF3A85]' 
            : 'bg-[#0B8FF9] hover:bg-[#0071D5]'
        )}
      >
        Book {title} ✨
      </Button>
    </div>
  );
};

export default AppointmentCard;
