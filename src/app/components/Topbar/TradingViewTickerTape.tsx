'use client';

import React, { useEffect, useRef } from 'react';

interface TradingViewTickerTapeProps {
  symbols?: Array<{
    proName: string;
    title: string;
  }>;
  colorTheme?: 'light' | 'dark';
  isTransparent?: boolean;
  displayMode?: 'adaptive' | 'regular' | 'compact';
  locale?: string;
}

const TradingViewTickerTape: React.FC<TradingViewTickerTapeProps> = ({
  symbols = [
    { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
    { proName: 'FOREXCOM:NSXUSD', title: 'US 100' },
    { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
    { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
    { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
    { proName: 'NASDAQ:AAPL', title: 'Apple' },
    { proName: 'NASDAQ:TSLA', title: 'Tesla' },
    { proName: 'NASDAQ:GOOGL', title: 'Google' },
    { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
    { proName: 'NASDAQ:AMZN', title: 'Amazon' },
    { proName: 'NYSE:JPM', title: 'JPMorgan' },
    { proName: 'NASDAQ:NVDA', title: 'NVIDIA' },
  ],
  colorTheme = 'dark',
  isTransparent = false,
  displayMode = 'adaptive',
  locale = 'en',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing content
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols,
      showSymbolLogo: true,
      colorTheme,
      isTransparent,
      displayMode,
      locale,
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [symbols, colorTheme, isTransparent, displayMode, locale]);

  return (
    <div className="tradingview-widget-container w-full h-full">
      <div ref={containerRef} className="tradingview-widget-container__widget h-full"></div>
      <style jsx global>{`
        .tradingview-widget-container {
          background: transparent !important;
          height: 100% !important;
        }
        .tradingview-widget-container__widget {
          background: transparent !important;
          height: 100% !important;
        }
        .tradingview-widget-container iframe {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default TradingViewTickerTape;
