
import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, CreditCard, Shield, Bell, Search } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const features = [
    {
      icon: <Calendar />,
      title: 'Easy Scheduling',
      description: 'Book appointments 24/7 with our intuitive online platform.'
    },
    {
      icon: <Clock />,
      title: 'Appointment Reminders',
      description: 'Automated notifications so you never miss an appointment.'
    },
    {
      icon: <Shield />,
      title: 'Verified Providers',
      description: 'All professionals are certified, insured, and background-checked.'
    },
    {
      icon: <CreditCard />,
      title: 'Secure Payments',
      description: 'Pay online securely with multiple payment options.'
    },
    {
      icon: <Bell />,
      title: 'Health Reminders',
      description: 'Get notified when your pet needs vaccinations or check-ups.'
    },
    {
      icon: <Search />,
      title: 'Find Specialists',
      description: "Easily search for specialists based on your pet's needs."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="animate-on-scroll" ref={titleRef}>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Amazing Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Why Pet Owners <span className="gradient-text">Love FurCare</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-balance">
                Our platform offers a seamless experience for managing all your pet care needs in one place, saving you time and providing peace of mind.
              </p>
            </div>
            
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll" 
              ref={featuresRef}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div 
              className="absolute -z-10 w-full h-full scale-110 blur-3xl bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"
              aria-hidden="true"
            ></div>
            
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Happy pet with owner at a grooming appointment"
              className="w-full h-auto rounded-2xl shadow-xl animate-on-scroll"
            />
            
            <div className="absolute -bottom-8 -left-8 glass-effect rounded-xl p-4 shadow-subtle hidden md:block animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                    alt="Happy customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-[150px]">
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="w-4 h-4 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-balance">"The best pet care service I've ever used! So convenient."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
