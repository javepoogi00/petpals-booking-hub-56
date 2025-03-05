
import React, { useEffect, useRef } from 'react';
import { Calendar, ChevronRight, PawPrint, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add('opacity-100', 'translate-y-0');
    }
    
    if (contentRef.current) {
      contentRef.current.classList.add('opacity-100', 'translate-y-0');
    }
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 delay-200"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
              <PawPrint className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Trusted by 50,000+ Pet Owners</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Expert Care</span> For Your Furry Family
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg text-balance">
              Book grooming and veterinary appointments with trusted professionals in just a few clicks. Your pet deserves the best care possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Book an Appointment
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explore Services
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <PawPrint className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Premium Care</p>
                  <p className="text-xs text-muted-foreground">Expert services</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Trusted Pros</p>
                  <p className="text-xs text-muted-foreground">Verified experts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Easy Booking</p>
                  <p className="text-xs text-muted-foreground">Quick & simple</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 blur-3xl -z-10"
              aria-hidden="true"
            ></div>
            
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
              alt="Happy cat being groomed"
              className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-xl object-cover opacity-0 translate-y-8 transition-all duration-1000 delay-300"
            />
            
            <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4 shadow-subtle animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Next Available</p>
                  <p className="text-xs font-bold text-primary">Today, 2:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
