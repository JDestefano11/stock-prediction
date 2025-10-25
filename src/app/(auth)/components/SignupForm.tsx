'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PasswordStrengthIndicator from '@/app/components/PasswordStrengthIndicator';
import { isPasswordValid } from '@/app/utils/passwordValidation';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Validate password strength
    if (!isPasswordValid(formData.password)) {
      setError('Password does not meet all requirements');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        router.push('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white">Create Account</h2>
        <p className="mt-2 text-sm text-gray-400">
          Start your free trial today
        </p>
      </div>
      
      {error && (
        <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
          <p className="text-red-400 text-sm text-center">{error}</p>
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
              placeholder="••••••••"
            />
            <PasswordStrengthIndicator password={formData.password} />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-start">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 mt-0.5 text-[#00D4FF] focus:ring-[#00D4FF] border-[#334155] rounded bg-[#1E293B]"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
            I agree to the{' '}
            <a href="#" className="text-[#00D4FF] hover:text-[#00A8E8]">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-[#00D4FF] hover:text-[#00A8E8]">
              Privacy Policy
            </a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] hover:from-[#00B8E8] hover:to-[#0098D4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D4FF] transition-all duration-200 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">
          Already have an account?{' '}
          <Link 
            href="/login" 
            className="font-medium text-[#00D4FF] hover:text-[#00A8E8] transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
