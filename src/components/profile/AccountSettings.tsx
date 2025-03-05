
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileHeader from './ProfileHeader';

const AccountSettings: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-subtle border border-pink-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <ProfileHeader 
        title="Account Settings" 
        description="Manage your account preferences and settings" 
      />
      <div className="p-6">
        <p className="text-coquette-600 mb-4">Manage your account preferences and settings</p>
        
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start text-left hover:bg-pink-50 hover:text-coquette-600 border-coquette-100">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start text-left hover:bg-pink-50 hover:text-coquette-600 border-coquette-100">
            Notification Preferences
          </Button>
          <Button variant="outline" className="w-full justify-start text-left hover:bg-pink-50 hover:text-coquette-600 border-coquette-100">
            Privacy Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
