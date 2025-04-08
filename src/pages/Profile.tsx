
import Sidebar from "@/components/layout/Sidebar";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileContent } from "@/components/profile/ProfileContent";

export default function Profile() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <ProfileHeader />
          <ProfileContent />
        </div>
      </div>
    </div>
  );
}
