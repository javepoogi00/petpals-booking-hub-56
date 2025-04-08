
import React from 'react';
import NavLinks from './NavLinks';
import NavButtons from './NavButtons';

interface MobileMenuProps {
  isOpen: boolean;
  isDashboardPath: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, isDashboardPath, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg animate-slide-down">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-3">
          <NavLinks isDashboardPath={isDashboardPath} onClick={onClose} />
          <div className="flex flex-col space-y-3 pt-3 border-t">
            <NavButtons isDashboardPath={isDashboardPath} onClick={onClose} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
