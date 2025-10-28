'use client';

import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  comingSoon?: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-[#0F1419]/90 to-[#0A1929]/70 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
        feature.comingSoon 
          ? 'border-[#FFB300]/30 hover:border-[#FFB300]/60 hover:shadow-[0_0_30px_rgba(255,179,0,0.2)]' 
          : 'border-[#263238] hover:border-[#00D4FF]/60 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:-translate-y-2'
      }`}
    >
      {/* Coming Soon Badge */}
      {feature.comingSoon && (
        <div className="mb-4 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300] to-[#FF6D00] rounded-full blur-md opacity-50"></div>
            <div className="relative px-4 py-1.5 bg-gradient-to-r from-[#FFB300] to-[#FF6D00] rounded-full text-xs font-bold text-white shadow-lg">
              COMING SOON
            </div>
          </div>
        </div>
      )}

      {/* Icon Container */}
      <div className="flex justify-center mb-5">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-all duration-300 ${
          feature.comingSoon ? '' : 'group-hover:scale-110 group-hover:shadow-xl'
        }`}>
          <div className="text-white">
            {feature.icon}
          </div>
        </div>
      </div>

      {/* Feature Content */}
      <h3 className={`text-lg font-bold text-center mb-3 transition-colors ${
        feature.comingSoon ? 'text-white' : 'text-white group-hover:text-[#00D4FF]'
      }`}>
        {feature.title}
      </h3>
      
      <p className={`leading-relaxed text-sm text-center ${
        feature.comingSoon ? 'text-[#E0E0E0]' : 'text-[#B0BEC5]'
      }`}>
        {feature.description}
      </p>

      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
        feature.comingSoon
          ? 'bg-gradient-to-br from-[#FFB300]/0 to-[#FF6D00]/0 group-hover:from-[#FFB300]/5 group-hover:to-[#FF6D00]/5'
          : 'bg-gradient-to-br from-[#00D4FF]/0 to-[#00E676]/0 group-hover:from-[#00D4FF]/5 group-hover:to-[#00E676]/5'
      }`}></div>
    </div>
  );
};

export default FeatureCard;