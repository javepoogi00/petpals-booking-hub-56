
import React from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type AppointmentFiltersProps = {
  filterOpen: boolean;
  setFilterOpen: (open: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const AppointmentFilters = ({ 
  filterOpen, 
  setFilterOpen, 
  searchTerm, 
  setSearchTerm 
}: AppointmentFiltersProps) => {
  return (
    <>
      <div className="p-4 border-b border-coquette-100 flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search appointments..."
            className="pl-9 border-coquette-200 focus-visible:ring-coquette-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <div>
          <Button 
            variant="outline"
            size="sm"
            className="w-full sm:w-auto bg-coquette-50 text-coquette-700 hover:bg-coquette-100"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter
            {filterOpen ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {filterOpen && (
        <div className="p-4 bg-coquette-50 border-b border-coquette-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <select 
              id="status" 
              className="mt-1 block w-full rounded-md border-coquette-200 focus:border-coquette-500 focus:ring focus:ring-coquette-500 focus:ring-opacity-50"
            >
              <option value="">All Statuses</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="confirmed">Confirmed</option>
            </select>
          </div>
          <div>
            <Label htmlFor="pet">Pet</Label>
            <select 
              id="pet" 
              className="mt-1 block w-full rounded-md border-coquette-200 focus:border-coquette-500 focus:ring focus:ring-coquette-500 focus:ring-opacity-50"
            >
              <option value="">All Pets</option>
              <option value="Max">Max</option>
              <option value="Bella">Bella</option>
              <option value="Charlie">Charlie</option>
            </select>
          </div>
          <div>
            <Label htmlFor="date-from">From Date</Label>
            <Input 
              id="date-from" 
              type="date" 
              className="mt-1 border-coquette-200 focus-visible:ring-coquette-500"
            />
          </div>
          <div>
            <Label htmlFor="date-to">To Date</Label>
            <Input 
              id="date-to" 
              type="date" 
              className="mt-1 border-coquette-200 focus-visible:ring-coquette-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentFilters;
