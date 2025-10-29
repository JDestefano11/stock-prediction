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
import { MarketNews } from './components/MarketNews';

const getWatchlist = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem('watchlist') || '[]');
  } catch {
    return [];
  }
};

const getTradingViewSymbol = (sym: string): string => {
  if (sym.endsWith('-USD')) return sym.replace('-USD', 'USD');
  if (sym.includes(':')) return sym;
  return `NASDAQ:${sym}`;
};

export default function StockDetailsPage() {
  const params = useParams();
  const symbol = params?.symbol as string;

  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  useEffect(() => {
    if (symbol) {
      setIsInWatchlist(getWatchlist().includes(symbol));
    }
  }, [symbol]);

  const toggleWatchlist = () => {
    const watchlist = getWatchlist();
    const updated = isInWatchlist
      ? watchlist.filter((s) => s !== symbol)
      : [...watchlist, symbol];

    localStorage.setItem('watchlist', JSON.stringify(updated));
    setIsInWatchlist(!isInWatchlist);
  };

  if (!symbol) return null;

  const tradingViewSymbol = getTradingViewSymbol(symbol);
  const {
    chartRef,
    companyProfileRef,
    technicalAnalysisRef,
    fundamentalDataRef,
    symbolOverviewRef,
  } = useTradingViewWidgets(tradingViewSymbol);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1929] via-[#0D1B2A] to-[#1B263B] pt-24">
      <div className="container mx-auto px-4 py-8">
        <StockHeader 
          symbol={symbol}
          isInWatchlist={isInWatchlist}
          onToggleWatchlist={toggleWatchlist}
          onViewNews={() => setIsNewsOpen(true)}
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

        <MarketNews
          symbol={symbol}
          tradingViewSymbol={tradingViewSymbol}
          isOpen={isNewsOpen}
          onClose={() => setIsNewsOpen(false)}
        />
      </div>
    </div>
  );
}
