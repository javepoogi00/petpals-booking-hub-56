
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p className="text-gray-500 mb-8">Welcome to your PetPals dashboard!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-bold text-lg mb-4">Upcoming Appointments</h2>
              <p className="text-gray-500">You have no upcoming appointments.</p>
              <button className="mt-4 text-primary hover:underline">Book Now</button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-bold text-lg mb-4">Pet Profile</h2>
              <p className="text-gray-500">Add your pet's information to get personalized care.</p>
              <button className="mt-4 text-primary hover:underline">Add Pet</button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-bold text-lg mb-4">Recent Activity</h2>
              <p className="text-gray-500">No recent activity to display.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
