'use client';

import React from 'react';
import { TrendingUp, Brain } from 'lucide-react';

const FeaturesHeader: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#00E676]">
          See the Market in Motion
        </span>
      </h2>
      
      <p className="text-base sm:text-lg text-[#B0BEC5] leading-relaxed max-w-xl">
        Watch live stock and crypto data update in real time and uncover AI-powered insights designed to help you stay informed and ahead of the curve.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] flex items-center justify-center shadow-lg flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">Real-Time Data</div>
            <div className="text-xs text-[#B0BEC5]">Live market updates</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center shadow-lg flex-shrink-0">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">AI-Powered</div>
            <div className="text-xs text-[#B0BEC5]">Smart predictions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHeader;