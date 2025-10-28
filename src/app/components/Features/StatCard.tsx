'use client';

import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  color: string;
  borderColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, color, borderColor }) => {
  return (
    <div className={`bg-[#0A0E27]/80 rounded-xl p-4 lg:p-5 border ${borderColor} hover:${borderColor.replace('/30', '/60')} hover:bg-${color.replace('text-', '')}/5 transition-all duration-300 cursor-pointer`}>
      <div className={`${color} text-xs font-semibold mb-2`}>{label}</div>
      <div className="text-white text-2xl lg:text-3xl font-bold mb-1">{value}</div>
      <div className="text-xs flex items-center gap-1">
        {subtext}
      </div>
    </div>
  );
};

export default StatCard;