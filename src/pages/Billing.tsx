
import Sidebar from "@/components/layout/Sidebar";

export default function Billing() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Billing</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-bold text-lg mb-4">Billing Information</h2>
            <p className="text-gray-500">You don't have any billing information set up yet.</p>
            <button className="mt-4 text-primary hover:underline">Add Payment Method</button>
          </div>
        </div>
      </div>
    </div>
  );
}
