import React from 'react';
import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from 'embla-carousel-react';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  opts?: any;
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

interface CarouselControlProps {
  carousel: ReturnType<typeof useCarousel>;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Carousel = ({ children, className, opts }: CarouselProps) => {
  return (
    <div className={cn('relative', className)}>
      <CarouselRoot opts={opts}>{children}</CarouselRoot>
    </div>
  );
};

const Item = ({ children, className }: CarouselItemProps) => {
  return (
    <CarouselItem className={cn('relative flex w-full shrink-0', className)}>
      {children}
    </CarouselItem>
  );
};

const Content = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <CarouselContent className={cn('flex gap-1 overflow-hidden scroll-smooth', className)}>{children}</CarouselContent>;
};

const Previous = ({ carousel, className, size = 'md' }: CarouselControlProps) => {
  return (
    <Button
      variant="ghost"
      size={size}
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full',
        '-ml-4 sm:-ml-6',
        className
      )}
      onClick={() => carousel.scrollPrev()}
      disabled={!carousel.canScrollPrev()}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous</span>
    </Button>
  );
};

const Next = ({ carousel, className, size = 'md' }: CarouselControlProps) => {
  return (
    <Button
      variant="ghost"
      size={size}
      className={cn(
        'absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full',
        '-mr-4 sm:-mr-6',
        className
      )}
      onClick={() => carousel.scrollNext()}
      disabled={!carousel.canScrollNext()}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next</span>
    </Button>
  );
};

export { Carousel, Content, Item, Previous, Next };
