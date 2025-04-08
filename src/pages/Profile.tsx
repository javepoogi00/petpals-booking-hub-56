
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/layout/Sidebar";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileContent from "@/components/profile/ProfileContent";
import { supabase } from "@/integrations/supabase/client";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl: string;
}

const defaultProfile: ProfileData = {
  name: "Xanthei Iona Pilares",
  email: "xanthei@example.com",
  phone: "(555) 123-4567",
  address: "123 Main St, San Francisco, CA",
  avatarUrl: "/lovable-uploads/dd3b7da4-5b1e-4202-826f-6283630aebe6.png"
};

export default function Profile() {
  const { toast } = useToast();
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [formData, setFormData] = useState<ProfileData>(defaultProfile);
  const [editMode, setEditMode] = useState(false);
  
  // In the future, this would fetch the profile from Supabase
  useEffect(() => {
    // This would normally fetch profile data from Supabase
    // For now, we'll use the defaultProfile
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    // This would normally update the profile in Supabase
    setProfile(formData);
    setEditMode(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };
  
  const handleCancel = () => {
    setFormData(profile);
    setEditMode(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <ProfileHeader 
            title="My Profile" 
            description="Manage your personal information" 
          />
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
      </div>
    </div>
  );
}
