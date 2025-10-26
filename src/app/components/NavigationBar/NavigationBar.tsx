'use client';

import React from 'react';
import { NavigationBarProps } from '../../utils/types';
import { useScrollBehavior, useClickOutside, useNavigationState } from '../../utils/hooks';
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
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${scrolled 
          ? 'bg-[#0A1929]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,212,255,0.12)] border-b border-[#00D4FF]/20' 
          : 'bg-[#0A1929]/95 backdrop-blur-sm border-b border-[#263238]/60'
        }
      `}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            <Logo />
            {isLoggedIn && <DesktopNavLinks />}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {!isLoggedIn ? (
              <UnauthenticatedActions />
            ) : (
              <>
                <NotificationsButton />
                {/* Divider */}
                <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-[#263238] to-transparent" />
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
