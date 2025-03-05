
import React from 'react';
import { User } from 'lucide-react';

interface ProfileAvatarProps {
  avatarUrl: string;
  name: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatarUrl, name }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <User className="w-12 h-12 text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default ProfileAvatar;
