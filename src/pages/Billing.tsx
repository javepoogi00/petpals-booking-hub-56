
import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CreditCard, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Billing() {
  const [activeTab, setActiveTab] = useState("payment-methods");
  const [showGcashQR, setShowGcashQR] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const toggleGcashQR = () => {
    setShowGcashQR(!showGcashQR);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleBackClick} 
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5 text-coquette-600" />
            </Button>
            <h1 className="text-3xl font-bold text-coquette-800">Billing</h1>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
              <TabsTrigger value="payment-history">Payment History</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="payment-methods">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-coquette-600" /> 
                      Credit/Debit Card
                    </CardTitle>
                    <CardDescription>Pay using your credit or debit card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-md">
                        <p className="text-sm text-gray-600">Add your card details to make payments quickly and securely.</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1920px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-8" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1920px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-coquette-600 hover:bg-coquette-700">Add Card</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <img src="https://www.gcash.com/wp-content/uploads/2021/07/GCash_Logo.png" alt="GCash" className="h-6 mr-2" />
                      GCash
                    </CardTitle>
                    <CardDescription>Pay using your GCash account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-md">
                        <p className="text-sm text-gray-600">Connect your GCash account for fast and secure payments. Perfect for local transactions.</p>
                      </div>
                      
                      {showGcashQR ? (
                        <div className="flex flex-col items-center">
                          <img 
                            src="/lovable-uploads/638208d1-4cca-4479-9b44-88efb4b56cec.png" 
                            alt="GCash QR Code" 
                            className="h-64 mb-4" 
                          />
                          <div className="text-center mb-4">
                            <p className="text-sm text-gray-500">Transfer fees may apply.</p>
                            <p className="font-medium">RO***E BI***A S.</p>
                            <p className="text-sm text-gray-500">Mobile No.: 093• ••••264</p>
                            <p className="text-sm text-gray-500">User ID: •••••••••••WCOAOK</p>
                          </div>
                          <Button 
                            onClick={toggleGcashQR} 
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                          >
                            Hide QR Code
                          </Button>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <img src="https://www.gcash.com/wp-content/uploads/2021/07/GCash_Logo.png" alt="GCash" className="h-10" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {!showGcashQR && (
                      <Button 
                        className="w-full bg-blue-500 hover:bg-blue-600"
                        onClick={toggleGcashQR}
                      >
                        Show GCash QR Code
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="payment-history">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>View your recent payments and transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-md p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Pet Grooming Service</h3>
                        <p className="text-sm text-gray-500">April 5, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₱1,500.00</p>
                        <div className="flex items-center text-green-600 text-sm">
                          <CheckCircle className="h-4 w-4 mr-1" /> Paid
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Vet Consultation</h3>
                        <p className="text-sm text-gray-500">March 22, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₱800.00</p>
                        <div className="flex items-center text-green-600 text-sm">
                          <CheckCircle className="h-4 w-4 mr-1" /> Paid
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Pet Supplies</h3>
                        <p className="text-sm text-gray-500">March 15, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₱2,200.00</p>
                        <div className="flex items-center text-amber-600 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" /> Pending
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Pet Care Plans</CardTitle>
                  <CardDescription>Choose a subscription plan that's right for your pet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg mb-2 text-coquette-600">Basic Care</h3>
                      <p className="text-2xl font-bold mb-2">₱999<span className="text-sm font-normal text-gray-500">/month</span></p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Monthly check-up
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Basic grooming
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> 10% off on medicines
                        </li>
                      </ul>
                      <Button className="w-full bg-coquette-500 hover:bg-coquette-600">Subscribe</Button>
                    </div>
                    
                    <div className="border-2 border-coquette-500 rounded-md p-4 hover:shadow-md transition-shadow relative">
                      <div className="absolute -top-3 right-4 bg-coquette-500 text-white text-xs px-2 py-1 rounded">Popular</div>
                      <h3 className="font-bold text-lg mb-2 text-coquette-600">Premium Care</h3>
                      <p className="text-2xl font-bold mb-2">₱1,899<span className="text-sm font-normal text-gray-500">/month</span></p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Bi-weekly check-up
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Full grooming
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> 20% off on medicines
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Emergency vet visits
                        </li>
                      </ul>
                      <Button className="w-full bg-coquette-600 hover:bg-coquette-700">Subscribe</Button>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg mb-2 text-coquette-600">Luxury Care</h3>
                      <p className="text-2xl font-bold mb-2">₱2,999<span className="text-sm font-normal text-gray-500">/month</span></p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Weekly check-up
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Premium grooming
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> 30% off on medicines
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Unlimited vet visits
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> Home delivery of pet food
                        </li>
                      </ul>
                      <Button className="w-full bg-coquette-500 hover:bg-coquette-600">Subscribe</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
