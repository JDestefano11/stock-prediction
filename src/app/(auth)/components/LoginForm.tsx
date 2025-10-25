'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        router.push('/dashboard'); 
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
        <h2 className="text-3xl font-extrabold text-white">Welcome Back</h2>
        <p className="mt-2 text-sm text-gray-400">
          Sign in to your trading account
        </p>
      </div>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
          <p className="text-red-400 text-sm text-center">{error}</p>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
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
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#00D4FF] focus:ring-[#00D4FF] border-[#334155] rounded bg-[#1E293B]"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a 
              href="#" 
              className="font-medium text-[#00D4FF] hover:text-[#00A8E8] transition-colors"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] hover:from-[#00B8E8] hover:to-[#0098D4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D4FF] transition-all duration-200 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>
      
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          Don't have an account?{' '}
          <Link 
            href="/signup" 
            className="font-medium text-[#00D4FF] hover:text-[#00A8E8] transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
