'use client';

import React from 'react';
import Link from 'next/link';
import { SearchBar } from './Search/SearchBar';

// Public navigation links (when not logged in)
const PUBLIC_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/contact', label: 'Contact' },
];

// Authenticated navigation links (when logged in)
const AUTH_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/dashboard', label: 'Dashboard' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'desktop' | 'mobile';
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, variant = 'desktop' }) => {
  const classes = variant === 'desktop'
    ? 'px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 hover:text-[#00D4FF] transition-all duration-200'
    : 'px-4 py-3 rounded-lg font-medium text-white hover:bg-white/5 hover:text-[#00D4FF] transition-colors';

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

interface NavLinksProps {
  isLoggedIn?: boolean;
}

export const DesktopNavLinks: React.FC<NavLinksProps> = ({ isLoggedIn = false }) => {
  const links = isLoggedIn ? AUTH_NAV_LINKS : PUBLIC_NAV_LINKS;
  
  return (
    <div className="hidden lg:flex items-center justify-center space-x-1 flex-1">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export const MobileNavLinks: React.FC<NavLinksProps> = ({ isLoggedIn = false }) => {
  const links = isLoggedIn ? AUTH_NAV_LINKS : PUBLIC_NAV_LINKS;
  
  return (
    <div className="lg:hidden border-t border-[#263238] animate-slideDown">
      {/* Navigation Links */}
      <div className="space-y-1 py-2 text-center">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} variant="mobile">
            {link.label}
          </NavLink>
        ))}
      </div>
      
      {/* Search Bar for Mobile - Only when logged in */}
      {isLoggedIn && (
        <div className="px-4 py-3 border-t border-[#263238]/50">
          <SearchBar />
        </div>
      )}
    </div>
  );
};