
import React from 'react';

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

export default TestimonialCard;
