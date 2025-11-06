import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User } from '../../utils/types';

const PROFILE_MENU_ITEMS = [
  { id: 'profile', href: '/profile', label: 'My Profile' },
  { id: 'settings', href: '/settings', label: 'Settings' },
  { id: 'subscription', href: '/coming-soon', label: 'Subscription' },
  { id: 'help', href: '/coming-soon', label: 'Help Center' },
] as const;

interface ProfileAvatarProps {
  user?: User;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ user }) => {
  const initial = user?.name?.charAt(0).toUpperCase() || 'U';

  return (
    <div className="relative">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00D4FF] group-hover:border-[#00A8E8] group-hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] transition-all duration-300">
        {user?.profileImage ? (
          <Image src={user.profileImage} alt={`${user.name}'s profile`} width={40} height={40} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] flex items-center justify-center text-white font-semibold text-base">
            {initial}
          </div>
        )}
      </div>
      {/* Online status indicator with pulse */}
      <div className="absolute bottom-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-40"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00E676] border-2 border-[#0A1929] shadow-[0_0_8px_rgba(0,230,118,0.6)]"></span>
      </div>
    </div>
  );
};

interface ProfileDropdownProps {
  user?: User;
  onLogout: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user, onLogout }) => (
  <div className="profile-dropdown absolute right-0 mt-3 w-64 bg-[#141B2D]/95 backdrop-blur-xl border border-[#37474F] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 z-50 animate-fadeIn overflow-hidden">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent pointer-events-none" />
    
    <div className="relative px-4 py-3 border-b border-[#263238]/50">
      <p className="text-sm font-semibold text-white">{user?.name || 'User'}</p>
      <p className="text-xs text-[#B0BEC5] truncate">{user?.email || 'user@example.com'}</p>
    </div>
    <div className="relative py-2">
      {PROFILE_MENU_ITEMS.map((item) => (
        <Link 
          key={item.id} 
          href={item.href} 
          className="
            flex items-center justify-between px-4 py-2.5 text-sm text-white/90 
            hover:bg-[#00D4FF]/10 hover:text-[#00D4FF] 
            transition-all duration-200
            group
          "
        >
          <span>{item.label}</span>
          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
    <div className="relative border-t border-[#263238]/50 pt-2">
      <button 
        onClick={onLogout} 
        className="
          w-full text-left px-4 py-2.5 text-sm text-[#FF1744] 
          hover:bg-[#FF1744]/10 
          transition-all duration-200 
          flex items-center space-x-3
          group
        "
      >
        <span className="font-medium">Logout</span>
      </button>
    </div>
  </div>
);

interface ProfileButtonProps {
  user?: User;
  isOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ user, isOpen, onToggle, onLogout }) => (
  <div className="relative">
    <button 
      onClick={onToggle} 
      className="
        profile-button flex items-center space-x-2
        px-2 py-1.5 rounded-xl
        hover:bg-[#00D4FF]/5
        focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/30
        transition-all duration-300
        group
      " 
      aria-expanded={isOpen} 
      aria-haspopup="true"
      aria-label="User menu"
    >
      <ProfileAvatar user={user} />
      {/* Dropdown indicator */}
      <svg 
        className={`w-4 h-4 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && <ProfileDropdown user={user} onLogout={onLogout} />}
  </div>
);
