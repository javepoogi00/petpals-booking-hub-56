
import React from 'react';
import { Camera, User, Heart } from 'lucide-react';

interface ProfileAvatarProps {
  avatarUrl: string;
  name: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatarUrl, name }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-2">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
          <img 
            src="/lovable-uploads/dd3b7da4-5b1e-4202-826f-6283630aebe6.png" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover" 
          />
        </div>
        <button 
          className="absolute bottom-0 right-0 bg-pink-500 text-white rounded-full p-1.5 shadow-lg hover:bg-pink-600 transition-colors duration-300"
          aria-label="Change profile picture"
        >
          <Camera className="w-3 h-3" />
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-purple-600 text-lg font-medium">
          {name ? name : 'Add your name'}
        </h2>
        <p className="text-pink-500 flex items-center gap-1 justify-center text-sm">
          Pet Parent <Heart className="w-3 h-3 text-pink-400" />
        </p>
      </div>
    </div>
  );
};

export default ProfileAvatar;
