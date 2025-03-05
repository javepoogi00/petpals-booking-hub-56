
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animal emojis with increased opacity */}
      <div className="absolute -top-4 -left-4 w-32 h-32 text-coquette-400 animate-float opacity-80">
        🐱
      </div>
      <div className="absolute top-1/4 -right-4 w-32 h-32 text-coquette-400 animate-float opacity-80" style={{ animationDelay: '1s' }}>
        🐰
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 text-coquette-400 animate-float opacity-80" style={{ animationDelay: '2s' }}>
        🐶
      </div>
      <div className="absolute -bottom-4 right-1/4 w-32 h-32 text-coquette-400 animate-float opacity-80" style={{ animationDelay: '1.5s' }}>
        🦊
      </div>
      
      {/* Background gradient elements with reduced opacity */}
      <div className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-r from-coquette-200/20 to-coquette-300/20 rounded-full blur-xl animate-float" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-40 right-1/3 w-64 h-64 bg-gradient-to-r from-coquette-300/15 to-coquette-400/15 rounded-full blur-xl animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-56 h-56 bg-gradient-to-r from-coquette-100/20 to-coquette-200/20 rounded-full blur-xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
