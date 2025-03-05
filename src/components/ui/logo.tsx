
import React from 'react';
import { PawPrint, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  linkTo?: string;
}

export const Logo = ({
  size = 'md',
  showText = true,
  className,
  linkTo = '/',
}: LogoProps) => {
  const sizeMap = {
    sm: {
      container: 'w-8 h-8',
      icon: 'w-5 h-5',
      text: 'text-lg',
      heart: 'w-3 h-3 -top-1 right-0',
    },
    md: {
      container: 'w-12 h-12',
      icon: 'w-7 h-7',
      text: 'text-xl',
      heart: 'w-4 h-4 -top-1.5 right-0',
    },
    lg: {
      container: 'w-16 h-16',
      icon: 'w-10 h-10',
      text: 'text-2xl md:text-3xl',
      heart: 'w-5 h-5 -top-2 right-0',
    },
  };

  const LogoContent = () => (
    <div className={cn('flex items-center gap-2', className)}>
      <div 
        className={cn(
          'flex items-center justify-center rounded-full bg-white',
          'shadow-subtle border-2 border-coquette-200 relative',
          sizeMap[size].container
        )}
      >
        <PawPrint className={cn('text-coquette-600', sizeMap[size].icon)} />
        <Heart 
          className={cn(
            'absolute text-coquette-400 animate-pulse', 
            sizeMap[size].heart
          )} 
        />
      </div>
      
      {showText && (
        <span className={cn(
          'font-instagram font-bold', 
          sizeMap[size].text
        )}>
          FurCare
        </span>
      )}
    </div>
  );

  // If linkTo is provided, wrap in Link component
  if (linkTo) {
    return (
      <Link to={linkTo} className="hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  // Otherwise just return the logo without a link
  return <LogoContent />;
};

export default Logo;
