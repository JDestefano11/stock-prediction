'use client';

import React, { useEffect, useRef, memo } from 'react';

const TradingViewHotlists: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '12M',
      exchange: 'US',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      plotLineColorGrowing: 'rgba(0, 230, 118, 1)',
      plotLineColorFalling: 'rgba(255, 23, 68, 1)',
      gridLineColor: 'rgba(38, 50, 56, 0.2)',
      scaleFontColor: 'rgba(176, 190, 197, 1)',
      belowLineFillColorGrowing: 'rgba(0, 230, 118, 0.05)',
      belowLineFillColorFalling: 'rgba(255, 23, 68, 0.05)',
      belowLineFillColorGrowingBottom: 'rgba(0, 230, 118, 0)',
      belowLineFillColorFallingBottom: 'rgba(255, 23, 68, 0)',
      symbolActiveColor: 'rgba(0, 212, 255, 0.12)',
      width: '100%',
      height: '550',
    });

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(TradingViewHotlists);
