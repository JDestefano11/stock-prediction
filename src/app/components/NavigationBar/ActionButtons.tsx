'use client';

import React from 'react';
import Link from 'next/link';

export const NotificationsButton: React.FC = () => (
  <button 
    className="
      flex items-center justify-center w-10 h-10 rounded-xl
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

export const BottomBar: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);

  React.useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date();
      setCurrentTime(now);
      
      // Get current time in ET (US market hours)
      const etTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const day = etTime.getDay();
      const hours = etTime.getHours();
      const minutes = etTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;
      
      // Market is open Monday-Friday, 9:30 AM - 4:00 PM ET
      const marketOpen = 9 * 60 + 30; // 9:30 AM
      const marketClose = 16 * 60; // 4:00 PM
      
      const isWeekday = day >= 1 && day <= 5;
      const isDuringMarketHours = totalMinutes >= marketOpen && totalMinutes < marketClose;
      
      setIsMarketOpen(isWeekday && isDuringMarketHours);
    };

    checkMarketStatus();
    const interval = setInterval(checkMarketStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#0A1929] via-[#0F1419] to-[#0A1929] border-t border-[#263238]/50 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between py-3 text-xs text-white/70">
          {/* Left Section - Market Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 market-status-indicator">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isMarketOpen ? 'bg-green-400' : 'bg-red-500'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isMarketOpen ? 'bg-green-400' : 'bg-red-500'}`}></span>
              </span>
              <span className="font-medium text-white/90">{isMarketOpen ? 'Markets Open' : 'Markets Closed'}</span>
            </div>
            <span className="text-white/30">•</span>
            <span className="text-white/60">Updated: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>

          {/* Right Section - Quick Links */}
          <div className="flex items-center gap-6">
            <Link href="/market-news" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Market News</span>
            </Link>
            <Link href="/economic-calendar" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Economic Calendar</span>
            </Link>
            <Link href="/watchlist" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>Watchlist</span>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Collapsed Header - Always Visible */}
          <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#0F1419]/30 transition-colors active:bg-[#0F1419]/50"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 market-status-indicator">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isMarketOpen ? 'bg-green-400' : 'bg-red-500'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isMarketOpen ? 'bg-green-400' : 'bg-red-500'}`}></span>
              </span>
              <span className="text-sm font-semibold text-white">{isMarketOpen ? 'Markets Open' : 'Markets Closed'}</span>
              <span className="text-xs text-white/50">•</span>
              <span className="text-xs text-white/60">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <svg
              className={`w-5 h-5 text-white/70 transition-transform duration-300 ${isMobileExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pb-4 pt-2">
              {/* Quick Links Grid */}
              <div className="grid grid-cols-3 gap-2">
                <Link href="/market-news" className="flex flex-col items-center gap-2 py-3 px-2 rounded-lg bg-[#0F1419]/50 border border-[#263238]/50 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all active:scale-95">
                  <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span className="text-xs font-medium text-white">News</span>
                </Link>
                <Link href="/economic-calendar" className="flex flex-col items-center gap-2 py-3 px-2 rounded-lg bg-[#0F1419]/50 border border-[#263238]/50 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all active:scale-95">
                  <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium text-white">Calendar</span>
                </Link>
                <Link href="/watchlist" className="flex flex-col items-center gap-2 py-3 px-2 rounded-lg bg-[#0F1419]/50 border border-[#263238]/50 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 transition-all active:scale-95">
                  <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span className="text-xs font-medium text-white">Watchlist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
