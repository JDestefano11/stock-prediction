'use client';

import React from 'react';
import Link from 'next/link';

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
      
      {/* Search Bar for Mobile */}
      <div className="px-4 py-3 border-t border-[#263238]/50">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-[#334155] rounded-lg bg-[#1E293B]/50 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
            placeholder="Search stocks, news..."
          />
        </div>
      </div>
    </div>
  );
};