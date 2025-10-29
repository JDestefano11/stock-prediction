import React from 'react';

interface CompanyProfileProps {
  companyProfileRef: React.RefObject<HTMLDivElement | null>;
}

export const CompanyProfile: React.FC<CompanyProfileProps> = ({ companyProfileRef }) => {
  return (
    <div className="bg-[#141B2D]/95 backdrop-blur-xl border border-[#37474F] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="p-4 border-b border-[#263238] bg-gradient-to-r from-[#0A1929] to-[#0D1B2A]">
        <h3 className="text-lg font-bold text-white">Company Profile</h3>
      </div>
      <div className="p-4">
        <div ref={companyProfileRef}></div>
      </div>
    </div>
  );
};