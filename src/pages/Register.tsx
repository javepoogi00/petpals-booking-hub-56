
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { UserPlus, Mail, Lock, ArrowRight, Eye, EyeOff, Heart, PawPrint, Phone, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/ui/logo';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Verification states
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [verifyingField, setVerifyingField] = useState<'email' | 'phone' | null>(null);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // Phone validation function
  const isValidPhone = (phone: string) => {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
  };

  const handleSendVerification = (type: 'email' | 'phone') => {
    if (type === 'email' && !isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (type === 'phone' && !isValidPhone(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setVerifyingField(type);
    setIsVerifying(true);
    
    // Simulate sending verification code
    toast({
      title: `Verification Code Sent`,
      description: `A verification code has been sent to your ${type === 'email' ? 'email address' : 'phone number'}.`,
    });
    
    // Mock code for demo purposes
    // In a real app, this would be sent via email/SMS
    console.log(`Mock verification code for ${type}: 123456`);
  };

  const handleVerifyCode = () => {
    // Mock verification - in a real app, this would validate against a server
    if (verificationCode === '123456') {
      if (verifyingField === 'email') {
        setEmailVerified(true);
      } else if (verifyingField === 'phone') {
        setPhoneVerified(true);
      }
      
      setIsVerifying(false);
      setVerifyingField(null);
      setVerificationCode('');
      
      toast({
        title: "Verification Successful",
        description: `Your ${verifyingField} has been verified.`,
      });
    } else {
      toast({
        title: "Invalid Code",
        description: "The verification code you entered is incorrect",
        variant: "destructive",
      });
    }
  };

  const handleCancelVerification = () => {
    setIsVerifying(false);
    setVerifyingField(null);
    setVerificationCode('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Form validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!emailVerified) {
      toast({
        title: "Email Not Verified",
        description: "Please verify your email address before registering",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!phoneVerified) {
      toast({
        title: "Phone Not Verified",
        description: "Please verify your phone number before registering",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Mock successful registration
    setTimeout(() => {
      toast({
        title: "Account created!",
        description: "Welcome to FurCare! You can now log in.",
      });
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-coquette-50 to-coquette-100 relative overflow-hidden">
      {/* Pet-themed animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden paw-pattern opacity-40">
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-20">
          <PawPrint className="w-full h-full text-coquette-300 animate-float" />
        </div>
        <div className="absolute top-1/4 right-10 w-28 h-28 opacity-20">
          <PawPrint className="w-full h-full text-coquette-400 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-1/3 left-10 w-32 h-32 opacity-20">
          <PawPrint className="w-full h-full text-coquette-300 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-10 right-20 w-36 h-36 opacity-20">
          <PawPrint className="w-full h-full text-coquette-400 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
      
      <div className="mb-8 flex flex-col items-center relative z-10">
        <Logo size="lg" />
        <p className="text-muted-foreground mt-4 text-center max-w-md">
          Create an account to book appointments, track pet health, and receive special offers
        </p>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/90 backdrop-blur-sm shadow-subtle rounded-xl p-6 sm:p-8 border border-coquette-100">
          {isVerifying ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center mb-4">Verify Your {verifyingField === 'email' ? 'Email' : 'Phone'}</h2>
              <p className="text-center text-gray-600 mb-4">
                Enter the 6-digit code sent to your {verifyingField === 'email' ? 'email address' : 'phone number'}
              </p>
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Verification Code</Label>
                <Input
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="123456"
                  className="text-center text-lg tracking-wider"
                  maxLength={6}
                />
              </div>
              <div className="flex space-x-3 pt-2">
                <Button 
                  onClick={handleVerifyCode} 
                  className="flex-1 bg-coquette-500 hover:bg-coquette-600"
                >
                  Verify
                </Button>
                <Button 
                  onClick={handleCancelVerification}
                  variant="outline" 
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Didn't receive a code? <button className="text-coquette-600 hover:underline" onClick={() => handleSendVerification(verifyingField!)}>Resend</button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text" 
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 border-coquette-200 focus-visible:ring-coquette-500"
                  />
                  <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email
                  {emailVerified && (
                    <span className="ml-2 inline-flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-1" /> Verified
                    </span>
                  )}
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email" 
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={emailVerified}
                    className={`pl-10 pr-24 ${
                      emailVerified 
                        ? "border-green-300 bg-green-50" 
                        : "border-coquette-200 focus-visible:ring-coquette-500"
                    }`}
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                  {!emailVerified && (
                    <Button
                      type="button"
                      onClick={() => handleSendVerification('email')}
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm h-7 text-coquette-600 hover:text-coquette-700 hover:bg-coquette-50"
                    >
                      Verify Email
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number
                  {phoneVerified && (
                    <span className="ml-2 inline-flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-1" /> Verified
                    </span>
                  )}
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel" 
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={phoneVerified}
                    className={`pl-10 pr-24 ${
                      phoneVerified 
                        ? "border-green-300 bg-green-50" 
                        : "border-coquette-200 focus-visible:ring-coquette-500"
                    }`}
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                  {!phoneVerified && (
                    <Button
                      type="button"
                      onClick={() => handleSendVerification('phone')}
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm h-7 text-coquette-600 hover:text-coquette-700 hover:bg-coquette-50"
                    >
                      Verify Phone
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input 
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 border-coquette-200 focus-visible:ring-coquette-500"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full font-display bg-coquette-500 hover:bg-coquette-600"
                  disabled={isLoading || !emailVerified || !phoneVerified}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-coquette-600 font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground relative z-10">
          <p>By creating an account, you agree to our</p>
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

export default Register;
