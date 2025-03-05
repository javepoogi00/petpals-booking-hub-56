
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animal emojis with increased size and better positioning */}
      <div className="absolute -top-4 -left-4 w-40 h-40 text-6xl flex items-center justify-center animate-float opacity-90">
        🐱
      </div>
      <div className="absolute top-1/3 -right-8 w-40 h-40 text-6xl flex items-center justify-center animate-float opacity-90" style={{ animationDelay: '1.2s' }}>
        🐰
      </div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 text-6xl flex items-center justify-center animate-float opacity-90" style={{ animationDelay: '2.4s' }}>
        🐶
      </div>
      <div className="absolute -bottom-8 right-1/4 w-40 h-40 text-6xl flex items-center justify-center animate-float opacity-90" style={{ animationDelay: '1.8s' }}>
        🦊
      </div>
      <div className="absolute top-2/3 left-2/3 w-40 h-40 text-6xl flex items-center justify-center animate-float opacity-90" style={{ animationDelay: '3.2s' }}>
        🐼
      </div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 text-6xl flex items-center justify-center animate-float opacity-90" style={{ animationDelay: '2.7s' }}>
        🦁
      </div>
      
      {/* Soft background gradient elements for visual interest without overwhelming */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-coquette-200/10 to-coquette-300/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-40 right-1/3 w-72 h-72 bg-gradient-to-r from-coquette-300/10 to-coquette-400/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-to-r from-coquette-100/10 to-coquette-200/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s', animationDelay: '4s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
