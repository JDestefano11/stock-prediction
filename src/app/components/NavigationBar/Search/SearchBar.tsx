'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { POPULAR_STOCKS } from './constants';
import { Stock } from './types';
import { SearchInput } from './SearchInput';
import { SearchDropdown } from './SearchDropdown';

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

  // Hide green dot on all devices when dropdown is open
  useEffect(() => {
    const marketIndicators = document.querySelectorAll('.market-status-indicator');
    marketIndicators.forEach((indicator) => {
      if (showDropdown) {
        (indicator as HTMLElement).style.opacity = '0';
        (indicator as HTMLElement).style.pointerEvents = 'none';
      } else {
        (indicator as HTMLElement).style.opacity = '1';
        (indicator as HTMLElement).style.pointerEvents = 'auto';
      }
    });
  }, [showDropdown]);

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
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const updated = [stock.symbol, ...recentSearches.filter((s: string) => s !== stock.symbol)].slice(0, 10);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    router.push(`/stock/${stock.symbol}`);
    setShowDropdown(false);
    setSearchQuery('');
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowDropdown(true);
  };

  const handleClose = () => {
    setShowDropdown(false);
    setIsFocused(false);
    setSearchQuery('');
  };

  return (
    <div className="flex items-center w-full" ref={searchRef}>
      <SearchInput
        value={searchQuery}
        isFocused={isFocused}
        onChange={setSearchQuery}
        onFocus={handleFocus}
      />
      
      {showDropdown && (
        <SearchDropdown
          searchQuery={searchQuery}
          filteredStocks={filteredStocks}
          watchlist={watchlist}
          onStockClick={handleStockClick}
          onToggleWatchlist={toggleWatchlist}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
