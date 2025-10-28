import React from 'react';
import { Activity } from 'lucide-react';

interface TechnicalAnalysisProps {
  technicalAnalysisRef: React.RefObject<HTMLDivElement | null>;
}

export const TechnicalAnalysis: React.FC<TechnicalAnalysisProps> = ({ technicalAnalysisRef }) => {
  return (
    <div className="bg-[#141B2D]/95 backdrop-blur-xl border border-[#37474F] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="p-5 border-b border-[#263238] bg-gradient-to-r from-[#0A1929] to-[#0D1B2A]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Technical Analysis</h2>
            <p className="text-sm text-[#78909C]">Real-time technical indicators and signals</p>
          </div>
          <Activity className="w-6 h-6 text-[#00D4FF]" />
        </div>
      </div>
      <div className="p-4">
        <div ref={technicalAnalysisRef}></div>
      </div>
    </div>
  );
};
