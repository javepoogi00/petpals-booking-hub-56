
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

// Pages
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import Appointments from "@/pages/Appointments";
import NewAppointment from "@/pages/NewAppointment";
import Pets from "@/pages/Pets";
import Profile from "@/pages/Profile";
import Billing from "@/pages/Billing";
import NotFound from "@/pages/NotFound";

// CSS
import "./App.css";

// Layout wrapper for dashboard pages
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      {children}
    </div>
  );
};

// Layout wrapper for public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
        
        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/appointments" element={<DashboardLayout><Appointments /></DashboardLayout>} />
        <Route path="/appointments/new" element={<DashboardLayout><NewAppointment /></DashboardLayout>} />
        <Route path="/pets" element={<DashboardLayout><Pets /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
        
        {/* 404 route */}
        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
