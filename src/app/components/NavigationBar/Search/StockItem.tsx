'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Stock } from './types';

interface StockItemProps {
  stock: Stock;
  watchlist: string[];
  onStockClick: (stock: Stock) => void;
  onToggleWatchlist: (symbol: string, e: React.MouseEvent) => void;
}

export const StockItem: React.FC<StockItemProps> = ({ stock, watchlist, onStockClick, onToggleWatchlist }) => {
  return (
    <div
      onClick={() => onStockClick(stock)}
      className="group px-4 py-3 hover:bg-[#1E293B]/50 cursor-pointer transition-all duration-200 flex items-center justify-between"
    >
      <div className="flex items-center gap-3 flex-1">
        {/* Stock Icon/Type */}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          stock.type === 'crypto' 
            ? 'bg-gradient-to-br from-[#FFB300]/20 to-[#FF6D00]/20 border border-[#FFB300]/30'
            : 'bg-gradient-to-br from-[#00D4FF]/20 to-[#00A8E8]/20 border border-[#00D4FF]/30'
        }`}>
          <span className="text-sm font-bold text-white">
            {stock.symbol.substring(0, 2)}
          </span>
        </div>

        {/* Stock Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">
              {stock.symbol}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#263238] text-[#B0BEC5]">
              {stock.exchange}
            </span>
          </div>
          <p className="text-xs text-[#B0BEC5] truncate">{stock.name}</p>
        </div>

        {/* Price & Change */}
        {stock.price && (
          <div className="text-right mr-3">
            <div className="text-sm font-semibold text-white">
              ${stock.price.toLocaleString()}
            </div>
            <div className={`text-xs font-medium ${
              (stock.changePercent || 0) >= 0 ? 'text-[#00E676]' : 'text-[#FF1744]'
            }`}>
              {(stock.changePercent || 0) >= 0 ? '+' : ''}{stock.changePercent?.toFixed(2)}%
            </div>
          </div>
        )}
      </div>

      {/* Watchlist Star */}
      <button
        onClick={(e) => onToggleWatchlist(stock.symbol, e)}
        className="ml-2 p-2 hover:bg-[#263238] rounded-lg transition-colors duration-200"
        aria-label="Add to watchlist"
      >
        <Star 
          className={`w-5 h-5 transition-all duration-200 ${
            watchlist.includes(stock.symbol)
              ? 'fill-[#FFB300] text-[#FFB300]'
              : 'text-[#B0BEC5] hover:text-[#FFB300]'
          }`}
        />
      </button>
    </div>
  );
};
