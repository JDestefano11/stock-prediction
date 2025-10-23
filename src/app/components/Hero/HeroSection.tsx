'use client';

import React from 'react';
import HeroContent from './HeroContent';
import HeroCTA from './HeroCTA';
import MarketOverview from './MarketOverview';
import TradingViewHotlists from './TradingViewHotlists';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0F1419] to-[#0A0E27]">
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Hero Content - Above the fold */}
        <div className="max-w-5xl mx-auto text-center pt-20 pb-16">
          <HeroContent />
          
          {/* CTA Buttons */}
          <div className="mt-10">
            <HeroCTA />
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[#B0BEC5]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00E676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00E676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00E676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time data</span>
            </div>
          </div>
        </div>

        {/* Market Widgets Section */}
        <div className="max-w-7xl mx-auto pb-20">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Market Analytics Widget */}
            <div className="relative group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">Market Analytics</h3>
                <p className="text-xs text-[#B0BEC5]">Track global markets across all asset classes</p>
              </div>
              
              <div className="relative bg-gradient-to-br from-[#141B2D]/90 to-[#1E2A3A]/90 border border-[#263238] rounded-xl overflow-hidden shadow-2xl p-3 hover:border-[#00D4FF]/40 transition-all duration-300">
                <MarketOverview />
              </div>
            </div>

            {/* Market Movers Widget */}
            <div className="relative group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">Market Movers</h3>
                <p className="text-xs text-[#B0BEC5]">Top gainers, losers, and most active stocks</p>
              </div>
              
              <div className="relative bg-gradient-to-br from-[#141B2D]/90 to-[#1E2A3A]/90 border border-[#263238] rounded-xl overflow-hidden shadow-2xl p-3 hover:border-[#00D4FF]/40 transition-all duration-300">
                <TradingViewHotlists />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
