import { useState, useEffect, useCallback } from 'react';

export const useScrollBehavior = (threshold: number = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export const useClickOutside = (
  selectors: string[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isOutside = selectors.every((selector) => !target.closest(selector));
      if (isOutside) callback();
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [selectors, callback]);
};

export const useNavigationState = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProfile = useCallback(() => {
    setIsProfileOpen((prev) => !prev);
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsProfileOpen(false);
  }, []);

  const closeAll = useCallback(() => {
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isProfileOpen,
    isMobileMenuOpen,
    toggleProfile,
    toggleMobileMenu,
    closeAll,
  };
};
