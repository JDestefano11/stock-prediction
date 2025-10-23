import { NavLinkItem } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/markets', label: 'Markets', icon: '💹' },
  { href: '/portfolio', label: 'Portfolio', icon: '💼' },
  { href: '/watchlist', label: 'Watchlist', icon: '⭐' },
];

export const PROFILE_MENU_ITEMS = [
  { href: '/profile', label: 'My Profile', icon: '👤' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
  { href: '/billing', label: 'Billing', icon: '💳' },
  { href: '/help', label: 'Help Center', icon: '❓' },
] as const;
