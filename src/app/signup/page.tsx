// c:\Users\deste\OneDrive\Desktop\stock-prediction\src\app\signup\page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../Logo';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      router.push('/');
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[var(--light-gray)] px-6 py-12 order-2 md:order-1">
        <div className="w-full max-w-md">
          {/* Logo for mobile only */}
          <div className="flex items-center justify-center md:hidden mb-10">
            <Logo size="large" />
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-[var(--border-color)]">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[var(--primary-blue)] font-[var(--font-headers)]">
              Create your account
            </h1>
            
            {error && (
              <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--dark-gray)] mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-3 py-2 border border-[var(--border-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-[var(--secondary-blue)] text-[var(--dark-gray)]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--dark-gray)] mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border border-[var(--border-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-[var(--secondary-blue)] text-[var(--dark-gray)]"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[var(--dark-gray)] mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-3 py-2 border border-[var(--border-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-[var(--secondary-blue)] text-[var(--dark-gray)]"
                    placeholder="Min. 8 characters"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--dark-gray)] mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full px-3 py-2 border border-[var(--border-color)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-[var(--secondary-blue)] text-[var(--dark-gray)]"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[var(--secondary-blue)] focus:ring-[var(--secondary-blue)] border-[var(--border-color)] rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agree-terms" className="text-sm text-[var(--mid-gray)]">
                    I agree to the <a href="#" className="text-[var(--secondary-blue)] hover:text-[var(--primary-blue)] transition-colors hover:underline">Terms of Service</a> and <a href="#" className="text-[var(--secondary-blue)] hover:text-[var(--primary-blue)] transition-colors hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2.5 px-4 bg-[var(--chart-blue)] hover:bg-blue-600 text-white rounded-md shadow transition-colors font-medium text-center flex justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : "Create Account"}
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-[var(--border-color)] text-center">
              <p className="text-sm text-[var(--mid-gray)]">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-[var(--secondary-blue)] hover:text-[var(--primary-blue)] transition-colors hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Branding & Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-[var(--chart-blue)] text-white items-center justify-center relative overflow-hidden order-1 md:order-2">
        <div className="z-10 p-12 max-w-md">
          <div className="mb-8 flex items-center">
            <Logo size="large" variant="white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start your investment journey</h2>
          <p className="text-lg opacity-90 mb-6">
            Join thousands of investors using AI-powered predictions to make better financial decisions.
          </p>
          
          {/* Testimonial */}
          <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
            <p className="italic mb-3 text-white/90">
              "StockPredict's analysis helped me achieve a 27% return on my portfolio last year. The predictions are remarkably accurate."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/30 rounded-full"></div>
              <div className="ml-3">
                <p className="font-medium">Alex Johnson</p>
                <p className="text-sm opacity-75">Financial Analyst</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-white rounded-full translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute left-0 top-0 w-60 h-60 bg-[var(--chart-teal)] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute right-0 top-1/2 w-40 h-40 bg-[var(--chart-purple)] rounded-full -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}