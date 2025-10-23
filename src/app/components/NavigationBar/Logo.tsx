import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-2.5 group">
    {/* Icon */}
    <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 overflow-hidden rounded-lg flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] rounded-lg transform group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 p-2 flex items-center justify-center">
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
    </div>
    
    {/* Text */}
    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-300">
      StockPro
    </span>
  </Link>
);

export default Logo;
