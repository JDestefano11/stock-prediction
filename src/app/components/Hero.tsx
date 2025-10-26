'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const screenerRef = useRef<HTMLDivElement>(null);

  // TradingView Advanced Chart Widget
  useEffect(() => {
    if (!chartRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '600',
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      backgroundColor: 'rgba(15, 20, 25, 1)',
      gridColor: 'rgba(38, 50, 56, 0.3)',
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      container_id: 'tradingview_chart'
    });

    chartRef.current.appendChild(script);
  }, []);

  // TradingView Market Overview Widget
  useEffect(() => {
    if (!screenerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      width: '100%',
      height: '600',
      largeChartUrl: '',
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      plotLineColorGrowing: 'rgba(0, 230, 118, 1)',
      plotLineColorFalling: 'rgba(255, 23, 68, 1)',
      gridLineColor: 'rgba(38, 50, 56, 0.3)',
      scaleFontColor: 'rgba(176, 190, 197, 1)',
      belowLineFillColorGrowing: 'rgba(0, 230, 118, 0.12)',
      belowLineFillColorFalling: 'rgba(255, 23, 68, 0.12)',
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
            { s: 'FOREXCOM:UKXGBP', d: 'UK 100' }
          ],
          originalTitle: 'Indices'
        },
        {
          title: 'Futures',
          symbols: [
            { s: 'CME_MINI:ES1!', d: 'S&P 500' },
            { s: 'CME:6E1!', d: 'Euro' },
            { s: 'COMEX:GC1!', d: 'Gold' },
            { s: 'NYMEX:CL1!', d: 'WTI Crude Oil' },
            { s: 'NYMEX:NG1!', d: 'Gas' },
            { s: 'CBOT:ZC1!', d: 'Corn' }
          ],
          originalTitle: 'Futures'
        },
        {
          title: 'Bonds',
          symbols: [
            { s: 'CBOT:ZB1!', d: 'T-Bond' },
            { s: 'CBOT:UB1!', d: 'Ultra T-Bond' },
            { s: 'EUREX:FGBL1!', d: 'Euro Bund' },
            { s: 'EUREX:FBTP1!', d: 'Euro BTP' },
            { s: 'EUREX:FGBM1!', d: 'Euro BOBL' }
          ],
          originalTitle: 'Bonds'
        },
        {
          title: 'Forex',
          symbols: [
            { s: 'FX:EURUSD', d: 'EUR to USD' },
            { s: 'FX:GBPUSD', d: 'GBP to USD' },
            { s: 'FX:USDJPY', d: 'USD to JPY' },
            { s: 'FX:USDCHF', d: 'USD to CHF' },
            { s: 'FX:AUDUSD', d: 'AUD to USD' },
            { s: 'FX:USDCAD', d: 'USD to CAD' }
          ],
          originalTitle: 'Forex'
        }
      ]
    });

    screenerRef.current.appendChild(script);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#0A1929] to-[#0F1419] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        {/* Hero Header */}
        <div className="text-center pt-32 pb-12">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#00A8E8]">
            AI-Powered Market Analysis
          </h1>
          <p className="text-xl text-[#B0BEC5] max-w-3xl mx-auto mb-8">
            Real-time predictions, advanced analytics, and intelligent insights to maximize your investment returns
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
            >
              <span>Start Free Trial</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#37474F] text-white font-bold rounded-lg hover:border-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Widget Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {/* Left: Advanced Chart */}
          <div className="bg-[#0F1419] border border-[#263238] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300">
            <div className="p-4 border-b border-[#263238] bg-[#0A1929]">
              <h3 className="text-lg font-bold text-white">Advanced Chart</h3>
              <p className="text-sm text-[#B0BEC5]">Full-featured trading chart</p>
            </div>
            <div className="tradingview-widget-container h-[600px]" ref={chartRef}>
              <div className="tradingview-widget-container__widget h-full"></div>
            </div>
          </div>

          {/* Right: Market Overview */}
          <div className="bg-[#0F1419] border border-[#263238] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300">
            <div className="p-4 border-b border-[#263238] bg-[#0A1929]">
              <h3 className="text-lg font-bold text-white">Market Overview</h3>
              <p className="text-sm text-[#B0BEC5]">Global markets & indices</p>
            </div>
            <div className="tradingview-widget-container h-[600px]" ref={screenerRef}>
              <div className="tradingview-widget-container__widget h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;