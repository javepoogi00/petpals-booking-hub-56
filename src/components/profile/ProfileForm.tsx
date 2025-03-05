
import React from 'react';
import { Edit, Save, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
        {!editMode ? (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setEditMode(true)}
            className="border-gray-200 text-gray-700 hover:bg-gray-50"
            icon={<Edit className="w-4 h-4" />}
          >
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onCancel}
              icon={<X className="w-4 h-4" />}
            >
              Cancel
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={onSave}
              icon={<Save className="w-4 h-4" />}
            >
              Save
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Full Name</Label>
            {editMode ? (
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                className="border-gray-200 focus-visible:ring-pink-500"
                placeholder="Enter your full name"
              />
            ) : (
              <p className="text-gray-800 py-2">{profile.name || 'Not provided'}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email Address</Label>
            {editMode ? (
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onInputChange}
                className="border-gray-200 focus-visible:ring-pink-500"
                placeholder="Enter your email address"
              />
            ) : (
              <p className="text-gray-800 py-2">{profile.email || 'Not provided'}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
            {editMode ? (
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                className="border-gray-200 focus-visible:ring-pink-500"
                placeholder="Enter your phone number"
              />
            ) : (
              <p className="text-gray-800 py-2">{profile.phone || 'Not provided'}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-gray-700">Address</Label>
            {editMode ? (
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={onInputChange}
                className="border-gray-200 focus-visible:ring-pink-500"
                placeholder="Enter your address"
              />
            ) : (
              <p className="text-gray-800 py-2">{profile.address || 'Not provided'}</p>
            )}
          </div>
        </div>
      </div>

      {!editMode && (
        <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-100">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-800">Profile Complete</h4>
              <p className="text-sm text-gray-500 mt-1">
                Your profile information is complete. Keep it updated to ensure you receive important notifications about your pet's care.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
