// c:\Users\deste\OneDrive\Desktop\stock-prediction\src\app\components\Header.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo';

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock user data - replace with your auth implementation
  const user = {
    name: "John Doe",
    email: "john@example.com",
    profileImage: "/vercel.svg" 
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  return (
    <header className="bg-[var(--primary-blue)] text-white py-3 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="medium" variant="white" href="/" />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-[var(--light-gray)] transition-colors font-medium">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-[var(--light-gray)] transition-colors font-medium">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="hover:text-[var(--light-gray)] transition-colors font-medium">
                  Watchlist
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side - Profile & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Profile Icon - Desktop */}
            <div className="relative hidden md:block">
              <button 
                onClick={toggleProfile} 
                className="flex items-center focus:outline-none"
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src={user.profileImage} 
                    alt="Profile" 
                    width={40} 
                    height={40} 
                  />
                </div>
              </button>
              
              {/* Profile Dropdown - Desktop */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-[var(--dark-gray)]">{user.name}</p>
                    <p className="text-xs text-[var(--mid-gray)] truncate">{user.email}</p>
                  </div>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-[var(--dark-gray)] hover:bg-gray-100">
                    Settings
                  </Link>
                  <button 
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={() => console.log("Logout clicked")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[var(--light-gray)] focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--primary-blue)] border-t border-[var(--secondary-blue)] mt-2">
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-3">
              <li>
                <Link href="/" className="block py-2 hover:text-[var(--light-gray)]">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/search" className="block py-2 hover:text-[var(--light-gray)]">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="block py-2 hover:text-[var(--light-gray)]">
                  Watchlist
                </Link>
              </li>
            </ul>
            
            {/* Profile Section in Mobile Menu */}
            <div className="mt-6 pt-4 border-t border-[var(--secondary-blue)]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src={user.profileImage} 
                    alt="Profile" 
                    width={40} 
                    height={40} 
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs opacity-75 truncate">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="/settings" className="block py-2 hover:text-[var(--light-gray)]">
                  Settings
                </Link>
                <button 
                  className="w-full text-left py-2 text-red-400 hover:text-red-300"
                  onClick={() => console.log("Logout clicked")}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;