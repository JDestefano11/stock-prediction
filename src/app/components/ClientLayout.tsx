'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavigationBar from './NavigationBar/NavigationBar';
import { User } from '../utils/types';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Utility function to decode token
  const decodeToken = (token: string) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return {
        name: payload.name || 'User',
        email: payload.email || '',
        profileImage: payload.profileImage || '',
      };
    } catch (error) {
      console.error('Failed to decode token:', error);
      localStorage.removeItem('authToken');
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const userData = decodeToken(token);
      if (userData) {
        setUser(userData);
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(undefined);
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <>
      <NavigationBar 
        isLoggedIn={isLoggedIn} 
        user={user} 
        onLogout={handleLogout} 
      />
      <main className="pt-16">
        {children}
      </main>
    </>
  );
};

export default ClientLayout;
