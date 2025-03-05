
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileContent from '@/components/profile/ProfileContent';
import AccountSettings from '@/components/profile/AccountSettings';
import { User } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    avatarUrl: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profile });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData);
    setEditMode(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleCancel = () => {
    setFormData({ ...profile });
    setEditMode(false);
  };

  return (
    <div className="flex">
      {/* Left sidebar */}
      <div className="bg-[#e6e8c4] w-[140px] min-h-screen fixed left-0 top-0 bottom-0 shadow-md">
        <div className="pt-6 px-4">
          <div className="text-blue-600 font-bold text-2xl font-instagram">FUR</div>
          <nav className="mt-8">
            <ul className="space-y-1">
              <li className="py-2 px-4 hover:bg-blue-100 rounded">Pet list</li>
              <li className="py-2 px-4 hover:bg-blue-100 rounded">Your listings</li>
              <li className="py-2 px-4 bg-blue-200 rounded">Profile</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-[140px] flex-1">
        <header className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Profile</h1>
            <User className="w-5 h-5" />
          </div>
          <div className="text-sm text-gray-500">Saturday, Mar 6, 2022, 12:30 PM</div>
        </header>

        <main className="p-6">
          <div className="max-w-2xl mx-auto">
            <ProfileContent 
              profile={profile}
              formData={formData}
              editMode={editMode}
              onInputChange={handleInputChange}
              onSave={handleSave}
              onCancel={handleCancel}
              setEditMode={setEditMode}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
