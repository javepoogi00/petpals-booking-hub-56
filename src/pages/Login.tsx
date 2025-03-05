
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PawPrint, Mail, Lock, ArrowRight, Eye, EyeOff, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Form validation
    if (!email || !password) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Mock successful login for now
    setTimeout(() => {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-coquette-50 to-coquette-100 paw-pattern">
      <div className="mb-8 flex flex-col items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-subtle border-2 border-coquette-200 animate-wiggle">
          <PawPrint className="h-8 w-8 text-coquette-600" />
        </div>
        <h1 className="text-3xl font-display font-bold text-center">Welcome Back</h1>
        <p className="text-muted-foreground mt-2 text-center max-w-md">
          Sign in to access your account, manage appointments, and track your pet's health
        </p>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white shadow-subtle rounded-xl p-6 sm:p-8 border border-coquette-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email" 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-coquette-200 focus-visible:ring-coquette-500"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="#" 
                  className="text-xs text-coquette-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-coquette-200 focus-visible:ring-coquette-500"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-coquette-400 hover:text-coquette-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full font-display bg-coquette-500 hover:bg-coquette-600"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-coquette-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>By signing in, you agree to our</p>
          <p className="mt-1">
            <a href="#" className="text-coquette-600 hover:underline">Terms of Service</a>
            {' '}&bull;{' '}
            <a href="#" className="text-coquette-600 hover:underline">Privacy Policy</a>
          </p>
          <div className="flex justify-center mt-4">
            <Heart className="h-4 w-4 text-coquette-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
