import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center space-x-3 group">
    <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#00A8E8] rounded-lg transform group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 p-2 flex items-center justify-center">
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
    </div>
    <div className="hidden sm:block">
      <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent tracking-tight">
        StockPro
      </h1>
    </div>
  </Link>
);

export default Logo;
