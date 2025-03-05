
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl: string;
}

interface ProfileFormProps {
  profile: ProfileData;
  formData: ProfileData;
  editMode: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  setEditMode: (value: boolean) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  profile,
  formData,
  editMode,
  onInputChange,
  onSave,
  onCancel,
  setEditMode
}) => {
  return (
    <div className="w-full">
      <div className="space-y-3">
        {editMode ? (
          // Edit mode form fields
          <>
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                className="w-full bg-white border-gray-200"
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onInputChange}
                className="w-full bg-white border-gray-200"
                placeholder="Email Address"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={onInputChange}
                className="w-full bg-white border-gray-200"
                placeholder="Address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                name="bio"
                className="w-full h-24 rounded-md bg-white border border-gray-200 p-2"
                placeholder="Write something about yourself"
              ></textarea>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" onClick={onCancel}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={onSave}>
                Save
              </Button>
            </div>
          </>
        ) : (
          // Display mode
          <>
            <div className="bg-white rounded p-2 border border-gray-200">
              <p>{profile.name || 'Enter your name'}</p>
            </div>
            <div className="bg-white rounded p-2 border border-gray-200">
              <p>{profile.email || 'Enter your email'}</p>
            </div>
            <div className="bg-white rounded p-2 border border-gray-200">
              <p>{profile.address || 'Enter your address'}</p>
            </div>
            <div className="bg-white rounded p-2 border border-gray-200 h-24">
              <p className="text-gray-400">Bio</p>
            </div>
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setEditMode(true)}
                className="text-gray-700"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
