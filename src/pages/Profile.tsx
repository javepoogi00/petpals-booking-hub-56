
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileContent from '@/components/profile/ProfileContent';
import AccountSettings from '@/components/profile/AccountSettings';
import AnimatedBackground from '@/components/profile/AnimatedBackground';

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
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-white pb-12 relative overflow-hidden">
        <AnimatedBackground />

        <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10 bg-white/80 rounded-lg shadow-sm backdrop-blur-sm">
          <ProfileContent 
            profile={profile}
            formData={formData}
            editMode={editMode}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onCancel={handleCancel}
            setEditMode={setEditMode}
          />

          <div className="mt-8">
            <AccountSettings />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
