
import React from 'react';
import NavLinks from './NavLinks';
import NavButtons from './NavButtons';

interface DesktopNavProps {
  isDashboardPath: boolean;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ isDashboardPath }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLinks isDashboardPath={isDashboardPath} />
      </nav>
      
      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <NavButtons isDashboardPath={isDashboardPath} />
      </div>
    </>
  );
};

export default DesktopNav;
