
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

const buttonVariants = {
  primary: 'bg-coquette-500 text-white hover:bg-coquette-600 focus:ring-coquette-500/50',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary/50',
  outline: 'border border-input bg-transparent hover:bg-muted focus:ring-coquette-500/50',
  ghost: 'bg-transparent hover:bg-muted focus:ring-coquette-500/50',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent/50',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-2 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-5 py-3 gap-2.5',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        baseStyles,
        buttonVariants[variant],
        sizeStyles[size],
        disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
export default Button;
