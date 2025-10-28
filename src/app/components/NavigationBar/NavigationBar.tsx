'use client';

import React from 'react';
import { NavigationBarProps } from '../../utils/types';
import { useScrollBehavior, useClickOutside, useNavigationState } from '../../utils/hooks';
import Logo from './Logo';
import { DesktopNavLinks, MobileNavLinks } from './NavLinks';
import { NotificationsButton, MobileMenuButton, UnauthenticatedActions, TickerTape, BottomBar } from './ActionButtons';
import { ProfileButton } from './ProfileMenu';
import { SearchBar } from './SearchBar';

const NavigationBar: React.FC<NavigationBarProps> = ({ isLoggedIn = false, user, onLogout }) => {
  const { isProfileOpen, isMobileMenuOpen, toggleProfile, toggleMobileMenu, closeAll } = useNavigationState();
  const scrolled = useScrollBehavior(20);

  useClickOutside(['.profile-dropdown', '.profile-button'], () => isProfileOpen && closeAll());

  const handleLogout = () => {
    onLogout?.();
    closeAll();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Ticker Tape at the top */}
      <TickerTape />
      
      {/* Navigation Bar */}
      <div className={`
        transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-[#0A1929]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,212,255,0.12)] border-b border-[#00D4FF]/20' 
          : 'bg-[#0A1929]/95 backdrop-blur-sm border-b border-[#263238]/60'
        }
      `}>
        <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Left - Mobile Menu Button */}
            <div className="flex items-center">
              <MobileMenuButton isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Logo />
            </div>

            {/* Right - Profile & Notifications */}
            <div className="flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  <NotificationsButton />
                  <ProfileButton user={user} isOpen={isProfileOpen} onToggle={toggleProfile} onLogout={handleLogout} />
                </>
              ) : (
                <UnauthenticatedActions />
              )}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full gap-6">
            {/* Left Section - Logo */}
            <div className="flex items-center flex-shrink-0">
              <Logo />
            </div>

            {/* Center Section - Nav Links */}
            <div className="flex-shrink-0">
              <DesktopNavLinks isLoggedIn={isLoggedIn} />
            </div>

            {/* Search Bar - Always visible on desktop */}
            <div className="flex-1 max-w-md mx-4">
              <SearchBar />
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {!isLoggedIn ? (
                <UnauthenticatedActions />
              ) : (
                <div className="flex items-center gap-3">
                  <NotificationsButton />
                  {/* Divider */}
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#263238] to-transparent" />
                  <ProfileButton user={user} isOpen={isProfileOpen} onToggle={toggleProfile} onLogout={handleLogout} />
                </div>
              )}
            </div>
          </div>
        </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && <MobileNavLinks isLoggedIn={isLoggedIn} />}
        </nav>
      </div>

      {/* Bottom Bar */}
      <BottomBar />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        :global(.animate-fadeIn) { animation: fadeIn 0.2s ease-out; }
        :global(.animate-slideDown) { animation: slideDown 0.3s ease-out; }
      `}</style>
    </header>
  );
};

export default NavigationBar;
