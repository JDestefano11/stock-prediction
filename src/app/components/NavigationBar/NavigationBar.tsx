'use client';

import React from 'react';
import { NavigationBarProps } from './types';
import { useScrollBehavior, useClickOutside, useNavigationState } from './hooks';
import Logo from './Logo';
import { DesktopNavLinks, MobileNavLinks } from './NavLinks';
import { NotificationsButton, MobileMenuButton, UnauthenticatedActions } from './ActionButtons';
import { ProfileButton } from './ProfileMenu';

const NavigationBar: React.FC<NavigationBarProps> = ({ isLoggedIn = false, user, onLogout }) => {
  const { isProfileOpen, isMobileMenuOpen, toggleProfile, toggleMobileMenu, closeAll } = useNavigationState();
  const scrolled = useScrollBehavior(20);

  useClickOutside(['.profile-dropdown', '.profile-button'], () => isProfileOpen && closeAll());

  const handleLogout = () => {
    onLogout?.();
    closeAll();
  };

  return (
    <header className={`fixed top-[62px] left-0 right-0 z-50 transition-all duration-300 border-b border-[#263238] ${scrolled ? 'bg-[#0A1929]/95 backdrop-blur-md shadow-lg' : 'bg-[#0A1929]'}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            <Logo />
            {isLoggedIn && <DesktopNavLinks />}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <UnauthenticatedActions />
            ) : (
              <>
                <NotificationsButton />
                <ProfileButton user={user} isOpen={isProfileOpen} onToggle={toggleProfile} onLogout={handleLogout} />
              </>
            )}
            {isLoggedIn && <MobileMenuButton isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isLoggedIn && isMobileMenuOpen && <MobileNavLinks />}
      </nav>

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
