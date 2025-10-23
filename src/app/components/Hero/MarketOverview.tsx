'use client';

import React, { useEffect, useRef } from 'react';

const MarketOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    const container = containerRef.current;
    container.innerHTML = '';

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      width: '100%',
      height: '100%',
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
      tabs: [
        {
          title: 'Indices',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'US 100' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' },
            { s: 'INDEX:NKY', d: 'Nikkei 225' },
            { s: 'INDEX:DEU40', d: 'DAX Index' },
            { s: 'FOREXCOM:UKXGBP', d: 'UK 100' },
          ],
          originalTitle: 'Indices',
        },
        {
          title: 'Futures',
          symbols: [
            { s: 'CME_MINI:ES1!', d: 'S&P 500' },
            { s: 'CME:6E1!', d: 'Euro' },
            { s: 'COMEX:GC1!', d: 'Gold' },
            { s: 'NYMEX:CL1!', d: 'WTI Crude Oil' },
            { s: 'NYMEX:NG1!', d: 'Gas' },
            { s: 'CBOT:ZC1!', d: 'Corn' },
          ],
          originalTitle: 'Futures',
        },
        {
          title: 'Crypto',
          symbols: [
            { s: 'BINANCE:BTCUSDT', d: 'Bitcoin' },
            { s: 'BINANCE:ETHUSDT', d: 'Ethereum' },
            { s: 'BINANCE:BNBUSDT', d: 'BNB' },
            { s: 'BINANCE:SOLUSDT', d: 'Solana' },
            { s: 'BINANCE:ADAUSDT', d: 'Cardano' },
            { s: 'BINANCE:DOGEUSDT', d: 'Dogecoin' },
          ],
          originalTitle: 'Crypto',
        },
        {
          title: 'Forex',
          symbols: [
            { s: 'FX:EURUSD', d: 'EUR to USD' },
            { s: 'FX:GBPUSD', d: 'GBP to USD' },
            { s: 'FX:USDJPY', d: 'USD to JPY' },
            { s: 'FX:USDCHF', d: 'USD to CHF' },
            { s: 'FX:AUDUSD', d: 'AUD to USD' },
            { s: 'FX:USDCAD', d: 'USD to CAD' },
          ],
          originalTitle: 'Forex',
        },
      ],
    });

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
      
      <style jsx>{`
        .tradingview-widget-container {
          height: 550px;
          width: 100%;
        }
        @media (max-width: 640px) {
          .tradingview-widget-container {
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default MarketOverview;
