export interface User {
  name: string;
  email: string;
  profileImage?: string;
}

export interface NavigationBarProps {
  isLoggedIn?: boolean;
  user?: User;
  onLogout?: () => void;
}

export interface NavLinkItem {
  href: string;
  label: string;
  icon: string;
}
