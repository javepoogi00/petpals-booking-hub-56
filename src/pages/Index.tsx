
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="services-section">
          <Services />
        </div>
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
