
import React, { useState } from 'react';
import { Camera, CheckCircle, Edit, Save, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Profile = () => {
  // Mock user data - in a real app, this would come from authentication/API
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 123-4567',
    address: '123 Pawprint Lane, Furville',
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
      <main className="pt-20 min-h-screen bg-gradient-to-b from-coquette-50 to-white pb-12">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-coquette-400 to-coquette-600 py-6 px-6 text-white">
              <h1 className="text-2xl font-semibold">My Profile</h1>
              <p className="opacity-90 mt-1">Manage your personal information</p>
            </div>

            {/* Profile content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar section */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-coquette-100 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      {profile.avatarUrl ? (
                        <img 
                          src={profile.avatarUrl} 
                          alt="Profile" 
                          className="w-full h-full rounded-full object-cover" 
                        />
                      ) : (
                        <User className="w-16 h-16 text-coquette-300" />
                      )}
                    </div>
                    <button 
                      className="absolute bottom-0 right-0 bg-coquette-500 text-white rounded-full p-2 shadow-md hover:bg-coquette-600 transition-colors"
                      aria-label="Change profile picture"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h2 className="font-semibold text-xl mt-4">{profile.name}</h2>
                  <p className="text-muted-foreground">Pet Parent</p>
                </div>

                {/* Profile details */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    {!editMode ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditMode(true)}
                        icon={<Edit className="w-4 h-4" />}
                      >
                        Edit Profile
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleCancel}
                          icon={<X className="w-4 h-4" />}
                        >
                          Cancel
                        </Button>
                        <Button 
                          variant="primary" 
                          size="sm"
                          onClick={handleSave}
                          icon={<Save className="w-4 h-4" />}
                        >
                          Save
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        {editMode ? (
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border-coquette-200 focus-visible:ring-coquette-500"
                          />
                        ) : (
                          <p className="text-foreground py-2">{profile.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        {editMode ? (
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-coquette-200 focus-visible:ring-coquette-500"
                          />
                        ) : (
                          <p className="text-foreground py-2">{profile.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        {editMode ? (
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-coquette-200 focus-visible:ring-coquette-500"
                          />
                        ) : (
                          <p className="text-foreground py-2">{profile.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        {editMode ? (
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="border-coquette-200 focus-visible:ring-coquette-500"
                          />
                        ) : (
                          <p className="text-foreground py-2">{profile.address}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {!editMode && (
                    <div className="mt-6 p-4 bg-coquette-50 rounded-lg border border-coquette-100">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-coquette-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground">Profile Complete</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your profile information is complete. Keep it updated to ensure you receive important notifications about your pet's care.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pet profiles section can be added here in the future */}
          <div className="mt-8 bg-white rounded-xl shadow-subtle border border-coquette-100 overflow-hidden">
            <div className="bg-gradient-to-r from-coquette-400 to-coquette-600 py-4 px-6 text-white">
              <h2 className="text-xl font-semibold">Account Settings</h2>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">Manage your account preferences and settings</p>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start text-left">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  Notification Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  Privacy Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
