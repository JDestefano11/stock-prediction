'use client';

import React, { useEffect } from 'react';
import { X, Newspaper } from 'lucide-react';

export type MarketNewsProps = {
  symbol: string;
  tradingViewSymbol: string;
  isOpen: boolean;
  onClose: () => void;
};

export const MarketNews: React.FC<MarketNewsProps> = ({
  symbol,
  tradingViewSymbol,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const container = document.getElementById('tradingview-timeline-widget');

    if (isOpen && container) {
      container.innerHTML = '';

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: 'symbol',
        symbol: tradingViewSymbol,
        colorTheme: 'dark',
        isTransparent: false,
        displayMode: 'regular',
        width: '100%',
        height: '600',
        locale: 'en',
      });

      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, [isOpen, tradingViewSymbol]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0A1929] border border-[#37474F] rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-[#263238] bg-gradient-to-r from-[#0A1929] to-[#0D1B2A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-[#00D4FF]" />
              <h2 className="text-2xl font-bold text-white">{symbol} News</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#263238] rounded-lg transition-colors"
              aria-label="Close news"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="bg-[#141B2D]/95 rounded-xl overflow-hidden">
            <div id="tradingview-timeline-widget"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
