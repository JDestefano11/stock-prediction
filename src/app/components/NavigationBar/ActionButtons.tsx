import React from 'react';
import Link from 'next/link';

export const NotificationsButton: React.FC = () => (
  <button 
    className="
      hidden lg:flex items-center justify-center w-10 h-10 rounded-xl
      hover:bg-[#00D4FF]/10 hover:text-[#00D4FF]
      transition-all duration-300 group relative
      text-white/80
    " 
    aria-label="Notifications"
  >
    <svg 
      className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
      />
    </svg>
    {/* Notification badge with pulse animation */}
    <span className="absolute top-1 right-1 flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1744] shadow-[0_0_8px_rgba(255,23,68,0.6)]"></span>
    </span>
  </button>
);

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onToggle }) => (
  <button 
    type="button" 
    className="
      lg:hidden inline-flex items-center justify-center p-2 rounded-xl
      text-white hover:bg-[#00D4FF]/10 hover:text-[#00D4FF]
      focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/30
      transition-all duration-300
    " 
    onClick={onToggle} 
    aria-expanded={isOpen} 
    aria-label="Toggle menu"
  >
    <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
    <svg 
      className="h-6 w-6 transition-transform duration-300" 
      style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
      />
    </svg>
  </button>
);

export const UnauthenticatedActions: React.FC = () => (
  <>
    <Link 
      href="/login" 
      className="
        inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium 
        text-white/90 hover:text-[#00D4FF] 
        rounded-xl hover:bg-[#00D4FF]/5
        transition-all duration-300
      "
    >
      Login
    </Link>
    <Link 
      href="/signup" 
      className="
        relative inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 
        text-xs sm:text-sm font-semibold text-white 
        bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] 
        rounded-full overflow-hidden
        hover:shadow-[0_0_24px_rgba(0,212,255,0.4)]
        transition-all duration-300 
        transform hover:scale-105 hover:-translate-y-0.5
        group
      "
    >
      <span className="relative z-10">Get Started</span>
      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
    </Link>
  </>
);

export const TickerTape: React.FC = () => {
  const tickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!tickerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR/USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'COINBASE:ETHUSD', title: 'Ethereum' },
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    });

    tickerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-[#0A1929]/90 backdrop-blur-sm border-b border-[#132F4C]">
      <div className="tradingview-widget-container" ref={tickerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};
