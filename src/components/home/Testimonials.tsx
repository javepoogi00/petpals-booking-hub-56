
import React, { useEffect, useRef } from 'react';

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  image: string;
  delay?: string;
};

const TestimonialCard = ({ name, role, content, image, delay }: TestimonialProps) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-subtle card-hover transition-all duration-700 opacity-0 translate-y-8 ${delay}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400 mr-1">★</span>
        ))}
      </div>
      <p className="text-gray-700 text-balance">{content}</p>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const testimonials = sectionRef.current?.querySelectorAll('.card-hover');
          testimonials?.forEach((testimonial) => {
            testimonial.classList.add('opacity-100', 'translate-y-0');
          });
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Dog Owner',
      content: "FurCare has been a game-changer for managing Bella's grooming appointments. The reminders are so helpful, and the groomers are always amazing!",
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      delay: 'delay-100'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cat Owner',
      content: "As a busy professional, I appreciate how easy it is to schedule vet appointments for my cat. The health tracking feature helps me stay on top of vaccinations.",
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
      delay: 'delay-200'
    },
    {
      name: 'Sarah Johnson',
      role: 'Multiple Pet Owner',
      content: "Managing appointments for three pets used to be a nightmare. With FurCare, everything is organized in one place. The service is truly exceptional!",
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Don't just take our word for it. See what pet owners like you have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              image={testimonial.image}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
