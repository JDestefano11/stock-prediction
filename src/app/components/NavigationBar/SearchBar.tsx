'use client';

import React, { useState } from 'react';

export const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="hidden lg:flex items-center">
      <div 
        className={`
          relative flex items-center
          transition-all duration-300 ease-out
          ${isFocused ? 'w-80' : 'w-64'}
        `}
      >
        {/* Search Icon */}
        <div className="absolute left-3 pointer-events-none">
          <svg 
            className={`w-5 h-5 transition-colors duration-300 ${
              isFocused ? 'text-[#00D4FF]' : 'text-white/40'
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search stocks, news..."
          className={`
            w-full pl-10 pr-4 py-2.5
            bg-[#1E293B]/50 backdrop-blur-sm
            border-2 rounded-xl
            text-sm text-white placeholder-white/40
            transition-all duration-300 ease-out
            focus:outline-none
            ${isFocused 
              ? 'border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.3)] bg-[#1E293B]/80' 
              : 'border-[#334155] hover:border-[#475569]'
            }
          `}
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="
              absolute right-3
              text-white/40 hover:text-white
              transition-colors duration-200
            "
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Glow effect on focus */}
        {isFocused && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D4FF]/10 to-[#00A8E8]/10 -z-10 blur-xl" />
        )}
      </div>
    </div>
  );
};