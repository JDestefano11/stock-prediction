import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User } from './types';
import { PROFILE_MENU_ITEMS } from './constants';

interface ProfileAvatarProps {
  user?: User;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ user }) => {
  const initial = user?.name?.charAt(0).toUpperCase() || 'U';

  return (
    <div className="relative">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00D4FF] group-hover:border-[#00A8E8] transition-colors">
        {user?.profileImage ? (
          <Image src={user.profileImage} alt={`${user.name}'s profile`} width={40} height={40} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] flex items-center justify-center text-white font-semibold">
            {initial}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00E676] border-2 border-[#0A1929] rounded-full" />
    </div>
  );
};

interface ProfileDropdownProps {
  user?: User;
  onLogout: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user, onLogout }) => (
  <div className="profile-dropdown absolute right-0 mt-3 w-64 bg-[#141B2D] border border-[#37474F] rounded-xl shadow-2xl py-2 z-50 animate-fadeIn">
    <div className="px-4 py-3 border-b border-[#263238]">
      <p className="text-sm font-semibold text-white">{user?.name || 'User'}</p>
      <p className="text-xs text-[#B0BEC5] truncate">{user?.email || 'user@example.com'}</p>
    </div>
    <div className="py-2">
      {PROFILE_MENU_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className="flex items-center space-x-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 hover:text-[#00D4FF] transition-colors">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
    <div className="border-t border-[#263238] pt-2">
      <button onClick={onLogout} className="w-full text-left px-4 py-2.5 text-sm text-[#FF1744] hover:bg-white/5 transition-colors flex items-center space-x-3">
        <span>🚪</span>
        <span>Logout</span>
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
    <button onClick={onToggle} className="profile-button flex items-center space-x-3 focus:outline-none group" aria-expanded={isOpen} aria-haspopup="true">
      <div className="hidden lg:block text-right">
        <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
        <p className="text-xs text-[#B0BEC5]">{user?.email || 'user@example.com'}</p>
      </div>
      <ProfileAvatar user={user} />
    </button>
    {isOpen && <ProfileDropdown user={user} onLogout={onLogout} />}
  </div>
);
