import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-2.5 group">
    {/* Icon */}
    <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 overflow-hidden rounded-xl flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] rounded-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] rounded-xl opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300" />
      <div className="absolute inset-0 p-2 flex items-center justify-center">
        <svg className="w-full h-full text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
    </div>
    
    {/* Text */}
    <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-white group-hover:from-[#00D4FF] group-hover:to-[#00A8E8] bg-clip-text text-transparent transition-all duration-300">
      PulseIQ
    </span>
  </Link>
);

export default Logo;
