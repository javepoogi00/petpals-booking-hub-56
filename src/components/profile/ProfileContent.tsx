
import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm';

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
    <div className="bg-[#f0e6cc] rounded-lg shadow-sm p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-6">
          <ProfileAvatar avatarUrl={profile.avatarUrl} name={profile.name} />
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
  );
};

export default ProfileContent;
