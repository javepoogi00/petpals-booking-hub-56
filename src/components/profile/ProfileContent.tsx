
import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm';
import ProfileHeader from './ProfileHeader';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl: string;
}

interface ProfileContentProps {
  profile: ProfileData;
  formData: ProfileData;
  editMode: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  setEditMode: (value: boolean) => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({
  profile,
  formData,
  editMode,
  onInputChange,
  onSave,
  onCancel,
  setEditMode
}) => {
  return (
    <div className="bg-white rounded-xl shadow-subtle border border-pink-100 hover:shadow-lg transition-shadow duration-300">
      <ProfileHeader 
        title="My Profile" 
        description="Manage your personal information" 
      />

      <div className="p-6 md:p-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="sm:max-w-[180px]">
              <ProfileAvatar avatarUrl={profile.avatarUrl} name={profile.name} />
            </div>
            <div className="flex-1">
              <ProfileForm
                profile={profile}
                formData={formData}
                editMode={editMode}
                onInputChange={onInputChange}
                onSave={onSave}
                onCancel={onCancel}
                setEditMode={setEditMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
