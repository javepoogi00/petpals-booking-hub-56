
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { UserPlus, Mail, Lock, ArrowRight, Eye, EyeOff, Heart, PawPrint, Phone, Check, AlertCircle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/ui/logo';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { 
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('email');
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [mockCode, setMockCode] = useState('');
  const [userType, setUserType] = useState<'patient' | 'groomer'>('patient');
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const isValidPhone = (phone: string) => {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name) newErrors.name = "Name is required";
    
    if (contactMethod === 'email') {
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    
    if (contactMethod === 'phone') {
      if (!phone) {
        newErrors.phone = "Phone number is required";
      } else if (!isValidPhone(phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!isVerified) {
      newErrors.verification = `Please verify your ${contactMethod === 'email' ? 'email address' : 'phone number'}`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendVerification = () => {
    if (contactMethod === 'email' && !isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (contactMethod === 'phone' && !isValidPhone(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // For demo purposes, generate a 6-digit code
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setMockCode(generatedCode);
    
    toast({
      title: "DEMO: Verification Code",
      description: `For demo purposes, your verification code is: ${generatedCode}`,
      variant: "default",
      duration: 10000,
    });
    
    console.log(`Mock verification code for ${contactMethod}: ${generatedCode}`);
  };

  const handleVerifyCode = () => {
    if (verificationCode === mockCode) {
      setIsVerified(true);
      setIsVerifying(false);
      setVerificationCode('');
      
      toast({
        title: "Verification Successful",
        description: `Your ${contactMethod === 'email' ? 'email address' : 'phone number'} has been verified.`,
      });
    } else {
      toast({
        title: "Invalid Code",
        description: "The verification code you entered is incorrect. Try again or request a new code.",
        variant: "destructive",
      });
    }
  };

  const handleCancelVerification = () => {
    setIsVerifying(false);
    setVerificationCode('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      // Display a toast for form validation errors
      toast({
        title: "Form Validation Failed",
        description: "Please correct the errors in the form",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // For demo purposes, simulate a successful registration
    setTimeout(() => {
      toast({
        title: "Account created!",
        description: `Welcome to FurCare! You are registered as a ${userType}.`,
      });
      setIsLoading(false);
      navigate('/login');
    }, 1500);
    
    // In a real implementation with Supabase, you would use:
    /*
    supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          user_type: userType
        }
      }
    })
    .then(({ data, error }) => {
      setIsLoading(false);
      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Account created!",
          description: `Welcome to FurCare! You are registered as a ${userType}.`,
        });
        navigate('/login');
      }
    });
    */
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-coquette-50 to-coquette-100 relative overflow-hidden">
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
              <h2 className="text-xl font-semibold text-center mb-4">Verify Your {contactMethod === 'email' ? 'Email' : 'Phone'}</h2>
              
              <Alert className="bg-amber-50 text-amber-800 border-amber-200 mb-4">
                <Info className="h-4 w-4" />
                <AlertDescription className="font-medium">
                  DEMO APP: Your verification code is: <span className="font-bold text-lg tracking-wide">{mockCode}</span>
                </AlertDescription>
              </Alert>
              
              <p className="text-center text-gray-600">
                Enter the 6-digit code sent to your {contactMethod === 'email' ? 'email address' : 'phone number'}
              </p>

              <div className="space-y-4">
                <div className="flex justify-center py-2">
                  <InputOTP
                    maxLength={6}
                    value={verificationCode}
                    onChange={setVerificationCode}
                    className="gap-2"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="border-coquette-200" />
                      <InputOTPSlot index={1} className="border-coquette-200" />
                      <InputOTPSlot index={2} className="border-coquette-200" />
                      <InputOTPSlot index={3} className="border-coquette-200" />
                      <InputOTPSlot index={4} className="border-coquette-200" />
                      <InputOTPSlot index={5} className="border-coquette-200" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <div className="flex space-x-3 pt-4">
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
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                Didn't receive a code? <button className="text-coquette-600 hover:underline" onClick={handleSendVerification}>Resend</button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base font-medium">Select Your Role</Label>
                <div className="bg-coquette-50/70 p-4 rounded-lg border border-coquette-100">
                  <RadioGroup 
                    value={userType} 
                    onValueChange={(value) => setUserType(value as 'patient' | 'groomer')}
                    className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0"
                  >
                    <div className="flex items-center space-x-2 bg-white/80 rounded-md p-3 transition-colors hover:bg-white cursor-pointer border border-transparent hover:border-coquette-200">
                      <RadioGroupItem value="patient" id="radio-patient" className="text-coquette-600" />
                      <Label htmlFor="radio-patient" className="cursor-pointer font-medium">Pet Owner</Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 rounded-md p-3 transition-colors hover:bg-white cursor-pointer border border-transparent hover:border-coquette-200">
                      <RadioGroupItem value="groomer" id="radio-groomer" className="text-coquette-600" />
                      <Label htmlFor="radio-groomer" className="cursor-pointer font-medium">Groomer</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text" 
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`pl-10 ${errors.name ? "border-red-300 focus-visible:ring-red-500" : "border-coquette-200 focus-visible:ring-coquette-500"}`}
                  />
                  <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label>Contact Method</Label>
                <RadioGroup 
                  value={contactMethod} 
                  onValueChange={(value) => {
                    setContactMethod(value as 'email' | 'phone');
                    setIsVerified(false);
                  }}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="radio-email" className="text-coquette-600" />
                    <Label htmlFor="radio-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="radio-phone" className="text-coquette-600" />
                    <Label htmlFor="radio-phone">Phone</Label>
                  </div>
                </RadioGroup>
              </div>

              {contactMethod === 'email' && (
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email
                    {isVerified && (
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsVerified(false);
                      }}
                      disabled={isVerified}
                      className={`pl-10 pr-24 ${
                        isVerified 
                          ? "border-green-300 bg-green-50" 
                          : errors.email
                            ? "border-red-300 focus-visible:ring-red-500"
                            : "border-coquette-200 focus-visible:ring-coquette-500"
                      }`}
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                    {!isVerified && (
                      <Button
                        type="button"
                        onClick={handleSendVerification}
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm h-7 text-coquette-600 hover:text-coquette-700 hover:bg-coquette-50"
                      >
                        Verify Email
                      </Button>
                    )}
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              )}

              {contactMethod === 'phone' && (
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number
                    {isVerified && (
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
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setIsVerified(false);
                      }}
                      disabled={isVerified}
                      className={`pl-10 pr-24 ${
                        isVerified 
                          ? "border-green-300 bg-green-50" 
                          : errors.phone
                            ? "border-red-300 focus-visible:ring-red-500"
                            : "border-coquette-200 focus-visible:ring-coquette-500"
                      }`}
                    />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                    {!isVerified && (
                      <Button
                        type="button"
                        onClick={handleSendVerification}
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm h-7 text-coquette-600 hover:text-coquette-700 hover:bg-coquette-50"
                      >
                        Verify Phone
                      </Button>
                    )}
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              )}

              {errors.verification && (
                <Alert variant="destructive" className="py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.verification}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`pl-10 ${errors.password ? "border-red-300 focus-visible:ring-red-500" : "border-coquette-200 focus-visible:ring-coquette-500"}`}
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
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
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
                    className={`pl-10 ${errors.confirmPassword ? "border-red-300 focus-visible:ring-red-500" : "border-coquette-200 focus-visible:ring-coquette-500"}`}
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coquette-400" />
                </div>
                {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full font-display bg-coquette-500 hover:bg-coquette-600"
                  disabled={isLoading}
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

