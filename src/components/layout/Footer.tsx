
import React from 'react';
import { PawPrint, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E5DEFF]/30 pt-16 pb-8 border-t-2 border-dashed border-[#D3E4FD]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="h-8 w-8 text-[#8B5CF6]" />
              <span className="text-xl font-display font-bold">FurCare</span>
            </div>
            <p className="text-muted-foreground mb-4 text-balance border-l-4 pl-4 border-[#FEC6A1]">
              Providing super cute pet grooming and veterinary services to keep your furry family members happy and healthy! 🐶 🐱
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#8B5CF6] hover:text-[#F97316] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8B5CF6] hover:text-[#F97316] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8B5CF6] hover:text-[#F97316] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 font-display inline-block bg-[#F2FCE2] px-3 py-1 rounded-lg">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">🐾 Pet Grooming</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">🩺 Veterinary Care</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">🏥 Health Check-ups</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">💉 Vaccinations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">🦷 Dental Care</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 font-display inline-block bg-[#FFDEE2] px-3 py-1 rounded-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">🏠 Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-[#F97316] transition-colors">🛠️ Services</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-[#F97316] transition-colors">✨ Features</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-[#F97316] transition-colors">💬 Testimonials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#F97316] transition-colors">ℹ️ About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 font-display inline-block bg-[#D3E4FD] px-3 py-1 rounded-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F97316] mt-0.5" />
                <span className="text-muted-foreground">123 Pet Street, Furry City, FC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F97316]" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F97316]" />
                <span className="text-muted-foreground">contact@furcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-dashed border-[#D3E4FD] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FurCare. Made with ❤️ by students.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-[#F97316] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-[#F97316] transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-[#F97316] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
