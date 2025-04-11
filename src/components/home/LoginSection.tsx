
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    // In a real app, you would authenticate with your backend here
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold text-center mb-4">Welcome Back</h3>
      <p className="text-muted-foreground text-center text-sm mb-6">
        Sign in to access your account
      </p>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-3 text-muted-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-xs text-pink-500 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
          Sign In
        </Button>
        
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account?</span>{" "}
          <Link to="/register" className="text-pink-500 hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
