
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
    <div className={cn("bg-white p-6 rounded-xl shadow-subtle hover-scale", className)}>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-primary" })}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
