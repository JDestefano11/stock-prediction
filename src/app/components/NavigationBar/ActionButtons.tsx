import React from 'react';
import Link from 'next/link';

export const NotificationsButton: React.FC = () => (
  <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors relative" aria-label="Notifications">
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
    <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF1744] rounded-full" />
  </button>
);

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onToggle }) => (
  <button type="button" className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors" onClick={onToggle} aria-expanded={isOpen} aria-label="Toggle menu">
    <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
    </svg>
  </button>
);

export const UnauthenticatedActions: React.FC = () => (
  <>
    <Link href="/login" className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white hover:text-[#00D4FF] transition-colors duration-200">
      Login
    </Link>
    <Link href="/signup" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
      <span className="hidden sm:inline">Get Started</span>
      <span className="sm:hidden">Sign Up</span>
    </Link>
  </>
);
