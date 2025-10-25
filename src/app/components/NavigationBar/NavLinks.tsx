import React from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/markets', label: 'Markets', icon: '📈' },
  { href: '/watchlist', label: 'Watchlist', icon: '⭐' },
  { href: '/alerts', label: 'Alerts', icon: '🔔' },
  { href: '/insights', label: 'AI Insights', icon: '🤖' },
];

interface NavLinkProps {
  href: string;
  icon: string;
  children: React.ReactNode;
  variant?: 'desktop' | 'mobile';
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, children, variant = 'desktop' }) => {
  const classes = variant === 'desktop'
    ? 'flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 hover:text-[#00D4FF] transition-all duration-200'
    : 'flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-white hover:bg-white/5 hover:text-[#00D4FF] transition-colors';

  return (
    <Link href={href} className={classes}>
      <span className={variant === 'mobile' ? 'text-xl' : ''}>{icon}</span>
      <span>{children}</span>
    </Link>
  );
};

export const DesktopNavLinks: React.FC = () => (
  <div className="hidden lg:flex items-center space-x-1">
    {NAV_LINKS.map((link) => (
      <NavLink key={link.href} href={link.href} icon={link.icon}>
        {link.label}
      </NavLink>
    ))}
  </div>
);

export const MobileNavLinks: React.FC = () => (
  <div className="lg:hidden border-t border-[#263238] py-4 animate-slideDown">
    <div className="space-y-1">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} icon={link.icon} variant="mobile">
          {link.label}
        </NavLink>
      ))}
    </div>
  </div>
);
