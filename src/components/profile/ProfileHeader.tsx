
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ProfileHeaderProps {
  title: string;
  description: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-coquette-400 to-coquette-500 py-6 px-6 text-white rounded-t-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0djRIMFYwem04IDBoNHY0SDhWMHptOCAwaDF2NEgxNlYwek00IDRoNHY0SDRWNHptOCAwaDF2NGgtNFY0em04IDBoNHY0aC00VjR6TTAgOGg0djRIMFY4em04IDBoNHY0SDhWOHptOCAwaDF2NGgtNFY4ek00IDEyaDR2NEg0di00em04IDBoNHY0aC00di00em04IDBoNHY0aC00di00eiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50"></div>
      <div className="relative">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          {title} <Sparkles className="w-5 h-5 animate-pulse" />
        </h1>
        <p className="opacity-90 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
