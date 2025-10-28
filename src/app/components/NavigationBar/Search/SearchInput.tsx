'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  isFocused: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, isFocused, onChange, onFocus }) => {
  return (
    <div className="relative flex items-center w-full transition-all duration-300 ease-out">
      {/* Search Icon */}
      <div className="absolute left-3 pointer-events-none z-10">
        <Search 
          className={`w-5 h-5 transition-colors duration-300 ${
            isFocused ? 'text-[#00D4FF]' : 'text-white/40'
          }`}
        />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder="Search stocks, crypto..."
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
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 z-10 text-white/40 hover:text-white transition-colors duration-200"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Glow effect on focus */}
      {isFocused && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D4FF]/10 to-[#00A8E8]/10 -z-10 blur-xl" />
      )}
    </div>
  );
};
