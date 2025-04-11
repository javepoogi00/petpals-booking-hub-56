
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PawPrint, Mail, Lock, ArrowRight, Eye, EyeOff, Heart, Calendar, Shield, Clock, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/ui/logo';
import FeatureCard from '@/components/home/FeatureCard';
import AppointmentCard from '@/components/home/AppointmentCard';
import TestimonialCard from '@/components/home/TestimonialCard';

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  image: string;
  delay?: string;
};

const TestimonialCard = ({ name, role, content, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-subtle transition-all duration-300 transform hover:scale-105">
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add('opacity-100', 'translate-y-0');
    }
    
    if (featuresRef.current) {
      featuresRef.current.classList.add('visible');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Form validation
    if (!email || !password) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Mock successful login for now
    setTimeout(() => {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    }
  ];

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Dog Owner',
      content: "FurCare has been a game-changer for managing Bella's grooming appointments. The reminders are so helpful!",
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cat Owner',
      content: "As a busy professional, I appreciate how easy it is to schedule vet appointments for my cat.",
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-coquette-100 paw-pattern">
      <div className="container mx-auto px-4">
        <header className="py-6 flex justify-between items-center">
          <Logo size="md" linkTo="/" />
          <Link to="/register">
            <Button variant="outline" size="sm" className="bg-white">
              Register
            </Button>
          </Link>
        </header>

        <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 delay-200"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-coquette-100 text-coquette-700 mb-6">
              <PawPrint className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Trusted by 50,000+ Pet Owners</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-coquette-600">Pawsome Care</span> For Your Furry Family
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg text-balance">
              Book grooming and veterinary appointments with trusted professionals in just a few clicks. Your pet deserves the best care possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/appointments/new')}
                className="bg-coquette-500 hover:bg-coquette-600 rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </Button>
              
              <button 
                onClick={handleExploreServices}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-pink-300 text-pink-500 font-medium hover:bg-pink-50 transition-all duration-200 relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Explore Services</span>
                <ChevronRight className="w-5 h-5 ml-2 text-pink-500 relative z-10" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coquette-100 flex items-center justify-center">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "h-5 w-5 text-coquette-600" })}
                  </div>
                  <p className="text-sm font-medium">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white shadow-subtle rounded-xl p-6 sm:p-8 border border-coquette-100">
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold">Welcome Back</h2>
                  <p className="text-muted-foreground mt-2">Sign in to access your account</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email" 
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-coquette-200 focus-visible:ring-coquette-500"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a 
                        href="#" 
                        className="text-xs text-coquette-600 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 border-coquette-200 focus-visible:ring-coquette-500"
                      />
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-coquette-400 hover:text-coquette-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full font-display bg-coquette-500 hover:bg-coquette-600"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign In'}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 text-center text-sm">
                  <p className="text-muted-foreground">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-coquette-600 font-medium hover:underline">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <section id="services-section" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-display">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer professional grooming and veterinary services for your pets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AppointmentCard
              title="Pet Grooming"
              description="Professional grooming services tailored to your pet's needs."
              icon={<Scissors />}
              color="primary"
              features={[
                "Bath and haircut ✂️",
                "Nail trimming 💅",
                "Teeth brushing 🦷"
              ]}
            />
            
            <AppointmentCard
              title="Veterinary Care"
              description="Comprehensive veterinary services for preventive care."
              icon={<Stethoscope />}
              color="accent"
              features={[
                "Wellness examinations 🩺",
                "Vaccinations 💉",
                "Dental care 🦷"
              ]}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-[#FEF7CD]/30 rounded-3xl my-16">
          <div className="container mx-auto px-4">
            <div 
              className="animate-on-scroll" 
              ref={featuresRef}
            >
              <div className="text-center mb-12">
                <span className="text-sm font-medium text-[#8B5CF6] uppercase tracking-wider px-3 py-1 bg-[#E5DEFF] rounded-full inline-block">
                  Cool Features!
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4 font-display">
                  Why Pet Owners <span className="text-[#F97316]">Love FurCare</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className={index % 3 === 0 ? "bg-[#F2FCE2]" : index % 3 === 1 ? "bg-[#FFDEE2]" : "bg-[#D3E4FD]"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-display">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Logo size="sm" />
            <p className="text-muted-foreground text-sm">© 2025 FurCare. All rights reserved.</p>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-sm text-coquette-600 hover:underline">Terms</a>
            <a href="#" className="text-sm text-coquette-600 hover:underline">Privacy</a>
            <a href="#" className="text-sm text-coquette-600 hover:underline">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
