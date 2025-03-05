
import React from 'react';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("p-5 rounded-lg hover:scale-105 transition-all duration-300", className)} style={{border: '2px solid rgba(0,0,0,0.1)'}}>
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-[#8B5CF6]" })}
      </div>
      <h3 className="text-lg font-bold mb-2 font-display">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
