'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTradingViewWidgets } from './hooks/useTradingViewWidgets';
import { StockHeader } from './components/StockHeader';
import { SymbolOverview } from './components/SymbolOverview';
import { LiveChart } from './components/LiveChart';
import { TechnicalAnalysis } from './components/TechnicalAnalysis';
import { CompanyProfile } from './components/CompanyProfile';
import { Financials } from './components/Financials';

export default function StockDetailsPage() {
  const params = useParams();
  const symbol = params.symbol as string;
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Check if stock is in watchlist
  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setIsInWatchlist(watchlist.includes(symbol));
  }, [symbol]);

  // Toggle watchlist
  const toggleWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const newWatchlist = isInWatchlist
      ? watchlist.filter((s: string) => s !== symbol)
      : [...watchlist, symbol];
    
    localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    setIsInWatchlist(!isInWatchlist);
  };

  // Determine the exchange prefix for TradingView
  const getTradingViewSymbol = (sym: string) => {
    if (sym.includes('-USD')) {
      // Crypto
      return sym.replace('-USD', 'USD');
    }
    // Default to NASDAQ for stocks
    return `NASDAQ:${sym}`;
  };

  const tradingViewSymbol = getTradingViewSymbol(symbol);

  // Get all TradingView widget refs from custom hook
  const {
    chartRef,
    companyProfileRef,
    technicalAnalysisRef,
    fundamentalDataRef,
    symbolOverviewRef
  } = useTradingViewWidgets(tradingViewSymbol);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1929] via-[#0D1B2A] to-[#1B263B] pt-24">
      <div className="container mx-auto px-4 py-8">
        <StockHeader 
          symbol={symbol}
          isInWatchlist={isInWatchlist}
          onToggleWatchlist={toggleWatchlist}
        />

        <SymbolOverview symbolOverviewRef={symbolOverviewRef} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <LiveChart chartRef={chartRef} />
            <TechnicalAnalysis technicalAnalysisRef={technicalAnalysisRef} />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <CompanyProfile companyProfileRef={companyProfileRef} />
            <Financials fundamentalDataRef={fundamentalDataRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
