'use client';

import React from 'react';
import { TrendingUp, X } from 'lucide-react';
import { Stock } from './types';
import { StockItem } from './StockItem';

interface SearchDropdownProps {
  searchQuery: string;
  filteredStocks: Stock[];
  watchlist: string[];
  onStockClick: (stock: Stock) => void;
  onToggleWatchlist: (symbol: string, e: React.MouseEvent) => void;
  onClose: () => void;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  searchQuery,
  filteredStocks,
  watchlist,
  onStockClick,
  onToggleWatchlist,
  onClose
}) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-[#0F1419] border border-[#263238] rounded-xl shadow-2xl overflow-hidden z-50 max-h-[500px] overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#263238] bg-[#0A1929]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider">
              {searchQuery ? 'Search Results' : 'Popular Stocks'}
            </span>
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#263238] rounded-lg transition-colors duration-200"
            aria-label="Close search"
          >
            <X className="w-4 h-4 text-white/60 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Stock List */}
      <div className="py-2">
        {filteredStocks.length > 0 ? (
          filteredStocks.map((stock) => (
            <StockItem
              key={stock.symbol}
              stock={stock}
              watchlist={watchlist}
              onStockClick={onStockClick}
              onToggleWatchlist={onToggleWatchlist}
            />
          ))
        ) : (
          <div className="px-4 py-8 text-center">
            <p className="text-sm text-[#B0BEC5]">No results found for "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[#263238] bg-[#0A1929]">
        <p className="text-xs text-[#B0BEC5] text-center">
          Click any stock to view detailed analysis powered by TradingView
        </p>
      </div>
    </div>
  );
};
