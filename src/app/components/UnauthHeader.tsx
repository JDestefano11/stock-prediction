// c:\Users\deste\OneDrive\Desktop\stock-prediction\src\app\components\UnauthHeader.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';

const UnauthHeader: React.FC = () => {
  return (
    <header className="bg-[var(--primary-blue)] text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="medium" variant="white" href="/" />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="px-4 py-2 text-white hover:text-[var(--light-gray)] transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 bg-[var(--chart-blue)] hover:bg-blue-500 text-white rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UnauthHeader;