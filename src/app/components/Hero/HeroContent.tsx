'use client';

import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
        <span className="block text-white mb-2">AI-Powered Stock Predictions</span>
        <span className="block bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] bg-clip-text text-transparent">
          Make Smarter Investments
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-[#B0BEC5] leading-relaxed max-w-3xl mx-auto">
        Get accurate market forecasts powered by advanced machine learning. Track real-time data, 
        analyze trends, and invest with confidence.
      </p>
    </div>
  );
};

export default HeroContent;
