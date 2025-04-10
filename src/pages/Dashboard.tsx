
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p className="text-gray-600 mb-8">Welcome to your PetPals dashboard!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Upcoming Appointments Card */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">You have no upcoming appointments.</p>
                <Button className="flex items-center">
                  <Link to="/appointments" className="w-full">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pet Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Pet Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Add your pet's information to get personalized care.</p>
                <Button className="flex items-center">
                  <Link to="/profile" className="w-full">Add Pet</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity Card */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No recent activity to display.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
