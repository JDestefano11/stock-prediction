'use client';

import React from 'react';
import StatCard from './StatCard';

const StatsDashboard: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '10,000+', subtext: '↑ Growing daily', color: 'text-[#00D4FF]', borderColor: 'border-[#00D4FF]/30' },
    { label: 'Predictions', value: '1M+', subtext: 'Daily analysis', color: 'text-[#00E676]', borderColor: 'border-[#00E676]/30' },
    { label: 'Accuracy', value: '94.5%', subtext: 'AI predictions', color: 'text-[#FFB300]', borderColor: 'border-[#FFB300]/30' },
    { label: 'Response Time', value: '<100ms', subtext: 'Lightning fast', color: 'text-[#E040FB]', borderColor: 'border-[#E040FB]/30' },
  ];

  return (
    <div className="relative">
      <div className="relative bg-gradient-to-br from-[#0F1419]/90 to-[#0A1929]/70 backdrop-blur-sm border border-[#263238] rounded-3xl p-6 lg:p-8 shadow-2xl">
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Decorative Glow Elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#00D4FF]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00E676]/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default StatsDashboard;