
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import { LoginSection } from "@/components/home/LoginSection";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top section with login */}
      <div className="w-full bg-gradient-to-b from-pink-50 to-pink-100 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              PetPals Booking Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Schedule appointments, manage pet health records, and find the best care for your furry friends.
            </p>
          </div>
          <div className="w-full md:w-5/12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-3/5">
                <LoginSection />
              </div>
              <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-4 md:mt-0">
                <img 
                  src="/lovable-uploads/40f4d127-2348-4e7b-bf84-b10d0db4d95c.png" 
                  alt="Cat with bath towel" 
                  className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the homepage content */}
      <div className="flex-1">
        <Features />
        <Services />
        <Testimonials />
      </div>
    </div>
  );
}
