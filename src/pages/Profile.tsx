import React, { useState } from 'react';
import { Camera, CheckCircle, Edit, Save, User, X, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
      <main className="pt-20 min-h-screen bg-gradient-to-b from-pink-50 to-white pb-12 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 text-coquette-200 animate-float opacity-20">
            🐱
          </div>
          <div className="absolute top-1/4 -right-4 w-24 h-24 text-coquette-200 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            🐰
          </div>
          <div className="absolute bottom-1/4 -left-4 w-24 h-24 text-coquette-200 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            🐶
          </div>
          <div className="absolute -bottom-4 right-1/4 w-24 h-24 text-coquette-200 animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
            🦊
          </div>
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-coquette-200/20 to-coquette-300/20 rounded-full blur-xl animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-40 right-1/3 w-48 h-48 bg-gradient-to-r from-coquette-300/10 to-coquette-400/10 rounded-full blur-xl animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-coquette-100/20 to-coquette-200/20 rounded-full blur-xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>

        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-subtle border border-pink-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gradient-to-r from-coquette-400 to-coquette-500 py-6 px-6 text-white rounded-t-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0djRIMFYwem04IDBoNHY0SDhWMHptOCAwaDF2NEgxNlYwek00IDRoNHY0SDRWNHptOCAwaDF2NGgtNFY0em04IDBoNHY0aC00VjR6TTAgOGg0djRIMFY4em04IDBoNHY0SDhWOHptOCAwaDF2NGgtNFY4ek00IDEyaDR2NEg0di00em04IDBoNHY0aC00di00em04IDBoNHY0aC00di00eiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative">
                <h1 className="text-2xl font-semibold flex items-center gap-2">
                  My Profile <Sparkles className="w-5 h-5 animate-pulse" />
                </h1>
                <p className="opacity-90 mt-1">Manage your personal information</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 bg-gradient-to-br from-coquette-100 to-coquette-200 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-transform duration-300 hover:scale-105">
                      {profile.avatarUrl ? (
                        <img 
                          src={profile.avatarUrl} 
                          alt="Profile" 
                          className="w-full h-full rounded-full object-cover" 
                        />
                      ) : (
                        <User className="w-16 h-16 text-coquette-400" />
                      )}
                    </div>
                    <button 
                      className="absolute bottom-0 right-0 bg-coquette-500 text-white rounded-full p-2 shadow-lg hover:bg-coquette-600 transition-colors duration-300 hover:scale-110"
                      aria-label="Change profile picture"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h2 className="font-semibold text-xl mt-4 text-coquette-800">
                    {profile.name || 'Add your name'}
                  </h2>
                  <p className="text-coquette-500 flex items-center gap-1">
                    Pet Parent <Heart className="w-4 h-4 text-coquette-400 animate-bounce" />
                  </p>
                </div>

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

          <div className="mt-8 bg-white rounded-xl shadow-subtle border border-pink-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gradient-to-r from-coquette-400 to-coquette-500 py-4 px-6 text-white rounded-t-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0djRIMFYwem04IDBoNHY0SDhWMHptOCAwaDF2NEgxNlYwek00IDRoNHY0SDRWNHptOCAwaDF2NGgtNFY0em04IDBoNHY0aC00VjR6TTAgOGg0djRIMFY4em04IDBoNHY0SDhWOHptOCAwaDF2NGgtNFY4ek00IDEyaDR2NEg0di00em04IDBoNHY0aC00di00em04IDBoNHY0aC00di00eiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  Account Settings <Sparkles className="w-4 h-4 animate-pulse" />
                </h2>
              </div>
            </div>
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
