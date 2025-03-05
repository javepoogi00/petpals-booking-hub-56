
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, Filter, CreditCard, PhilippinePeso, 
  FileText, CheckCircle, AlertCircle, Calendar,
  Download, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Billing = () => {
  const [filter, setFilter] = useState('unpaid');
  
  // Mock billing data
  const invoices = [
    { 
      id: 'INV-2023-001', 
      service: 'Annual Checkup & Vaccinations', 
      pet: 'Max',
      date: 'Aug 15, 2023', 
      dueDate: 'Aug 30, 2023',
      amount: 350.00, 
      status: 'unpaid' 
    },
    { 
      id: 'INV-2023-002', 
      service: 'Dental Cleaning Procedure', 
      pet: 'Bella',
      date: 'Jul 28, 2023', 
      dueDate: 'Aug 11, 2023',
      amount: 200.00, 
      status: 'unpaid' 
    },
    { 
      id: 'INV-2023-003', 
      service: 'Emergency Visit - Foreign Object', 
      pet: 'Charlie',
      date: 'Jul 15, 2023', 
      dueDate: 'Jul 30, 2023',
      amount: 375.50, 
      status: 'paid' 
    },
    { 
      id: 'INV-2023-004', 
      service: 'Flea and Tick Treatment', 
      pet: 'Luna',
      date: 'Jun 22, 2023', 
      dueDate: 'Jul 06, 2023',
      amount: 65.00, 
      status: 'paid' 
    },
    { 
      id: 'INV-2023-005', 
      service: 'Routine Checkup', 
      pet: 'Max',
      date: 'May 12, 2023', 
      dueDate: 'May 27, 2023',
      amount: 95.00, 
      status: 'paid' 
    },
  ];
  
  // Payment methods
  const paymentMethods = [
    {
      id: 'card-1',
      type: 'visa',
      last4: '4242',
      expiry: '05/25',
      isDefault: true
    },
    {
      id: 'card-2',
      type: 'mastercard',
      last4: '5555',
      expiry: '08/26',
      isDefault: false
    }
  ];
  
  // Filter invoices based on status
  const filteredInvoices = invoices.filter(invoice => {
    if (filter === 'unpaid') {
      return invoice.status === 'unpaid';
    } else if (filter === 'paid') {
      return invoice.status === 'paid';
    }
    return true; // 'all' filter
  });
  
  // Calculate totals
  const unpaidTotal = invoices
    .filter(invoice => invoice.status === 'unpaid')
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-coquette-50 to-coquette-100 paw-pattern">
      <Navbar />
      <div className="container mx-auto pt-28 pb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h1 className="text-2xl font-bold font-display">Billing & Payments</h1>
                  <p className="text-muted-foreground">Manage your invoices and payment methods</p>
                </div>
              </div>
              
              {/* Filters and Search */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant={filter === 'unpaid' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('unpaid')}
                  >
                    Unpaid
                  </Button>
                  <Button 
                    variant={filter === 'paid' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('paid')}
                  >
                    Paid
                  </Button>
                  <Button 
                    variant={filter === 'all' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('all')}
                  >
                    All
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2 w-full md:w-auto">
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search invoices..." 
                      className="pl-9"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Invoices List */}
              <div className="space-y-4">
                {filteredInvoices.length > 0 ? (
                  filteredInvoices.map(invoice => (
                    <div 
                      key={invoice.id} 
                      className="border border-gray-100 rounded-lg p-4 hover:border-coquette-200 transition-all"
                    >
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-full ${
                            invoice.status === 'paid' 
                              ? 'bg-green-100' 
                              : 'bg-yellow-100'
                          }`}>
                            <PhilippinePeso className={`h-5 w-5 ${
                              invoice.status === 'paid' 
                                ? 'text-green-600' 
                                : 'text-yellow-600'
                            }`} />
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-semibold">{invoice.service}</h3>
                              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                invoice.status === 'paid' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {invoice.status === 'paid' ? 'Paid' : 'Unpaid'}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mb-1">
                              <span>Invoice {invoice.id} • Pet: {invoice.pet}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-1 h-3.5 w-3.5" />
                              <span>Issued: {invoice.date} • Due: {invoice.dueDate}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex flex-col items-end">
                          <div className="text-xl font-bold mb-3">₱{invoice.amount.toFixed(2)}</div>
                          
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="mr-1 h-4 w-4" />
                              Download
                            </Button>
                            {invoice.status === 'unpaid' && (
                              <Button variant="primary" size="sm" className="bg-coquette-500 hover:bg-coquette-600">
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium mb-2">No invoices found</h3>
                    <p className="text-muted-foreground">All your invoices will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Payment Summary */}
            <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 p-6">
              <h2 className="text-lg font-bold font-display mb-4">Payment Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-muted-foreground">Unpaid Balance</span>
                  <span className="font-bold text-xl">₱{unpaidTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Due Soon</span>
                  <span className="font-medium">₱{invoices.filter(inv => inv.status === 'unpaid').length > 0 ? invoices.filter(inv => inv.status === 'unpaid')[0].amount.toFixed(2) : '0.00'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Invoices</span>
                  <span className="font-medium">{invoices.filter(inv => inv.status === 'unpaid').length} unpaid</span>
                </div>
              </div>
              
              <Button className="w-full justify-center bg-coquette-500 hover:bg-coquette-600 mb-2">
                Pay All Invoices
              </Button>
              <Button variant="outline" className="w-full justify-center">
                Set Up Payment Plan
              </Button>
            </div>
            
            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold font-display">Payment Methods</h2>
                <Button variant="ghost" size="sm">
                  + Add New
                </Button>
              </div>
              
              <div className="space-y-3">
                {paymentMethods.map(method => (
                  <div 
                    key={method.id} 
                    className={`p-3 rounded-lg border ${method.isDefault ? 'border-coquette-200 bg-coquette-50' : 'border-gray-100'} hover:border-coquette-200 transition-all`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded border border-gray-100">
                          <CreditCard className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium capitalize">{method.type}</span>
                            <span className="text-xs ml-1">•••• {method.last4}</span>
                            {method.isDefault && (
                              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-coquette-100 text-coquette-800">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">Expires {method.expiry}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Billing History */}
            <div className="bg-white rounded-xl shadow-subtle border border-coquette-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold font-display">Billing History</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-3">
                {invoices.filter(inv => inv.status === 'paid').slice(0, 3).map(invoice => (
                  <div key={invoice.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium">{invoice.service}</p>
                      <p className="text-xs text-muted-foreground">{invoice.date}</p>
                    </div>
                    <span className="font-medium">₱{invoice.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
