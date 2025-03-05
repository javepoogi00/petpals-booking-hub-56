
import React from 'react';
import { Camera, User, Heart } from 'lucide-react';

interface ProfileAvatarProps {
  avatarUrl: string;
  name: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatarUrl, name }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative group">
        <div className="w-36 h-36 md:w-40 md:h-40 bg-gradient-to-br from-coquette-100 to-coquette-200 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-transform duration-300 hover:scale-105">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
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
        {name || 'Add your name'}
      </h2>
      <p className="text-coquette-500 flex items-center gap-1 justify-center">
        Pet Parent <Heart className="w-4 h-4 text-coquette-400 animate-pulse" />
      </p>
    </div>
  );
};

export default ProfileAvatar;
