import { useState, useEffect, useCallback, RefObject } from 'react';

/**
 * Tracks whether the user has scrolled past a given threshold.
 * @param threshold Number of pixels to trigger "scrolled" state. Default: 20
 * @returns boolean indicating if scrolled past threshold
 */
export const useScrollBehavior = (threshold: number = 20): boolean => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    // Initial check in case page is already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrolled;
};

/**
 * Calls `callback` when a click occurs outside the given refs.
 * @param refs Array of React refs to detect outside clicks.
 * @param callback Function to call on outside click.
 */
export const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const isOutside = refs.every(ref => !ref.current?.contains(target));
      if (isOutside) callback();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [refs, callback]);
};

/**
 * Hook to manage navigation menu state (profile menu and mobile menu)
 */
interface NavigationState {
  isProfileOpen: boolean;
  isMobileMenuOpen: boolean;
}

export const useNavigationState = () => {
  const [state, setState] = useState<NavigationState>({
    isProfileOpen: false,
    isMobileMenuOpen: false,
  });

  const toggleProfile = useCallback(() => {
    setState(prev => ({
      isProfileOpen: !prev.isProfileOpen,
      isMobileMenuOpen: false,
    }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({
      isProfileOpen: false,
      isMobileMenuOpen: !prev.isMobileMenuOpen,
    }));
  }, []);

  const closeAll = useCallback(() => {
    setState({ isProfileOpen: false, isMobileMenuOpen: false });
  }, []);

  return {
    ...state,
    toggleProfile,
    toggleMobileMenu,
    closeAll,
  };
};
