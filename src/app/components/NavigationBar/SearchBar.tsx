'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, TrendingUp, Star, X } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
  exchange: string;
  type: 'stock' | 'crypto';
  price?: number;
  change?: number;
  changePercent?: number;
}

// Popular stocks/crypto that show when user clicks search
const POPULAR_STOCKS: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ', type: 'stock', price: 178.25, change: 2.15, changePercent: 1.22 },
  { symbol: 'TSLA', name: 'Tesla Inc.', exchange: 'NASDAQ', type: 'stock', price: 242.84, change: -3.21, changePercent: -1.30 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', exchange: 'NASDAQ', type: 'stock', price: 378.91, change: 5.42, changePercent: 1.45 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', exchange: 'NASDAQ', type: 'stock', price: 141.80, change: 1.23, changePercent: 0.87 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', exchange: 'NASDAQ', type: 'stock', price: 151.94, change: -0.85, changePercent: -0.56 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', exchange: 'NASDAQ', type: 'stock', price: 495.22, change: 8.76, changePercent: 1.80 },
  { symbol: 'BTC-USD', name: 'Bitcoin', exchange: 'Crypto', type: 'crypto', price: 43250.00, change: 1250.00, changePercent: 2.98 },
  { symbol: 'ETH-USD', name: 'Ethereum', exchange: 'Crypto', type: 'crypto', price: 2280.50, change: -45.30, changePercent: -1.95 },
];

export const SearchBar: React.FC = () => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load watchlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('watchlist');
    if (saved) {
      setWatchlist(JSON.parse(saved));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter stocks based on search query
  const filteredStocks = searchQuery.trim()
    ? POPULAR_STOCKS.filter(stock => 
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : POPULAR_STOCKS;

  // Toggle watchlist
  const toggleWatchlist = (symbol: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newWatchlist = watchlist.includes(symbol)
      ? watchlist.filter(s => s !== symbol)
      : [...watchlist, symbol];
    
    setWatchlist(newWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
  };

  // Navigate to stock detail page
  const handleStockClick = (stock: Stock) => {
    // Store user's search/click for personalization
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const updated = [stock.symbol, ...recentSearches.filter((s: string) => s !== stock.symbol)].slice(0, 10);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    // Navigate to stock detail page
    router.push(`/stock/${stock.symbol}`);
    setShowDropdown(false);
    setSearchQuery('');
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowDropdown(true);
  };

  // Hide green dot on mobile when dropdown is open
  useEffect(() => {
    const marketIndicator = document.querySelector('.market-status-indicator');
    if (marketIndicator && showDropdown && window.innerWidth < 1024) {
      (marketIndicator as HTMLElement).style.opacity = '0';
      (marketIndicator as HTMLElement).style.pointerEvents = 'none';
    } else if (marketIndicator) {
      (marketIndicator as HTMLElement).style.opacity = '1';
      (marketIndicator as HTMLElement).style.pointerEvents = 'auto';
    }
  }, [showDropdown]);

  return (
    <div className="flex items-center w-full" ref={searchRef}>
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
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
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
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

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#0F1419] border border-[#263238] rounded-xl shadow-2xl overflow-hidden z-50 max-h-[500px] overflow-y-auto">
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#263238] bg-[#0A1929]">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider">
                  {searchQuery ? 'Search Results' : 'Popular Stocks'}
                </span>
              </div>
            </div>

            {/* Stock List */}
            <div className="py-2">
              {filteredStocks.length > 0 ? (
                filteredStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    onClick={() => handleStockClick(stock)}
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
                      onClick={(e) => toggleWatchlist(stock.symbol, e)}
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
        )}
      </div>
    </div>
  );
};