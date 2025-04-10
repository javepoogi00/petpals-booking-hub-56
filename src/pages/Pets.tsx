
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PawPrint, Plus } from "lucide-react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

const Pets = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">My Pets</h1>
              <p className="text-gray-600">Manage your pets' profiles</p>
            </div>
            <Button className="bg-coquette-500 hover:bg-coquette-600">
              <Plus className="mr-2 h-4 w-4" /> Add New Pet
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* No pets message card */}
            <Card className="col-span-full border-dashed border-2 border-gray-300 bg-gray-50">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <div className="rounded-full bg-gray-100 p-4 mb-4">
                  <PawPrint className="h-8 w-8 text-coquette-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-700">No pets added yet</h3>
                <p className="text-gray-500 text-center mb-4">Add your first pet to manage their health records and appointments</p>
                <Button className="bg-coquette-500 hover:bg-coquette-600">
                  <Plus className="mr-2 h-4 w-4" /> Add Your First Pet
                </Button>
              </CardContent>
            </Card>

            {/* This would be shown once pets are added - currently hidden */}
            {/* Example Pet Cards */}
            {false && (
              <>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gradient-to-r from-coquette-100 to-coquette-200 flex items-center justify-center">
                    <PawPrint className="h-16 w-16 text-coquette-400" />
                  </div>
                  <CardHeader>
                    <CardTitle>Max</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Golden Retriever • 3 years old</p>
                    <p className="text-sm text-gray-500 mt-1">Last checkup: March 15, 2025</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="outline" size="sm">View Profile</Button>
                    <Button variant="ghost" size="sm" className="text-coquette-500 hover:text-coquette-600 hover:bg-coquette-50">
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pets;
