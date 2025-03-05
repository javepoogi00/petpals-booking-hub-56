
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            {editMode ? (
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
  );
};

export default ProfileForm;
