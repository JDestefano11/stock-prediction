import React from 'react';
import { Activity } from 'lucide-react';

interface LiveChartProps {
  chartRef: React.RefObject<HTMLDivElement | null>;
}

export const LiveChart: React.FC<LiveChartProps> = ({ chartRef }) => {
  return (
    <div className="bg-[#141B2D]/95 backdrop-blur-xl border border-[#37474F] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="p-5 border-b border-[#263238] bg-gradient-to-r from-[#0A1929] to-[#0D1B2A]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Live Chart</h2>
            <p className="text-sm text-[#78909C]">Real-time price movements with technical indicators</p>
          </div>
          <Activity className="w-6 h-6 text-[#00D4FF]" />
        </div>
      </div>
      <div className="h-[700px]" ref={chartRef}></div>
    </div>
  );
};
