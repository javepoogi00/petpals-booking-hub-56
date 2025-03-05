
import React, { useEffect, useRef } from 'react';
import { Scissors, Stethoscope } from 'lucide-react';
import AppointmentCard from './AppointmentCard';

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

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
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (card1Ref.current) observer.unobserve(card1Ref.current);
      if (card2Ref.current) observer.unobserve(card2Ref.current);
    };
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium Pet Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We offer professional grooming and veterinary services to keep your beloved pets looking their best and feeling their healthiest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-on-scroll" ref={card1Ref}>
            <AppointmentCard
              title="Pet Grooming"
              description="Professional grooming services tailored to your pet's needs and breed."
              icon={<Scissors />}
              color="primary"
              features={[
                "Full-service bath and haircut",
                "Nail trimming and ear cleaning",
                "Teeth brushing and gland expression",
                "Breed-specific styling",
                "De-shedding treatments"
              ]}
            />
          </div>
          
          <div className="animate-on-scroll delay-200" ref={card2Ref}>
            <AppointmentCard
              title="Veterinary Care"
              description="Comprehensive veterinary services for preventive care and treatments."
              icon={<Stethoscope />}
              color="accent"
              features={[
                "Wellness examinations",
                "Vaccinations and preventive care",
                "Diagnostics and treatments",
                "Dental care and surgery",
                "Nutrition counseling"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
