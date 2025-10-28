import React from 'react';

interface SymbolOverviewProps {
  symbolOverviewRef: React.RefObject<HTMLDivElement | null>;
}

export const SymbolOverview: React.FC<SymbolOverviewProps> = ({ symbolOverviewRef }) => {
  return (
    <div className="mb-6">
      <div className="bg-[#141B2D]/95 backdrop-blur-xl border border-[#37474F] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="p-5 border-b border-[#263238] bg-gradient-to-r from-[#0A1929] to-[#0D1B2A]">
          <h2 className="text-xl font-bold text-white">Market Overview</h2>
        </div>
        <div className="p-4">
          <div ref={symbolOverviewRef}></div>
        </div>
      </div>
    </div>
  );
};
