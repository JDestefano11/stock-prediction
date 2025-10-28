import { useEffect, useRef } from 'react';

// TradingView Widget Types
export type TradingViewWidgetType = 
  | 'AdvancedChart'
  | 'MiniChart'
  | 'TickerTape'
  | 'MarketOverview'
  | 'Screener'
  | 'TechnicalAnalysis'
  | 'FundamentalData'
  | 'SymbolInfo'
  | 'MarketData'
  | 'CryptoCurrencyMarket';

interface UseTradingViewOptions {
  widgetType: TradingViewWidgetType;
  config: Record<string, any>;
  scriptSrc?: string;
}

export const useTradingView = ({
  widgetType,
  config,
  scriptSrc
}: UseTradingViewOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create script element for TradingView widget
    const script = document.createElement('script');
    script.src = scriptSrc || 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.type = 'text/javascript';
    
    // For embed widgets, add the config as innerHTML
    if (scriptSrc && scriptSrc.includes('embed-widget')) {
      script.innerHTML = JSON.stringify(config);
    }

    // Append script to container
    containerRef.current.appendChild(script);

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [widgetType, JSON.stringify(config), scriptSrc]);

  return containerRef;
};