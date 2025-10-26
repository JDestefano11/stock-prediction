'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavigationBar from './NavigationBar/NavigationBar';
import { User } from '../utils/types';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in by checking for auth token
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // Decode token to get user info (simplified version)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          name: payload.name || 'User',
          email: payload.email || '',
          profileImage: payload.profileImage || '',
        });
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Failed to decode token:', error);
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setUser(undefined);
    router.push('/');
  };

  return (
    <>
      <NavigationBar 
        isLoggedIn={isLoggedIn} 
        user={user} 
        onLogout={handleLogout}
      />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
    </>
  );
}