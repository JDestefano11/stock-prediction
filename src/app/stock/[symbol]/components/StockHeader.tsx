import React from 'react';
import { useRouter } from 'next/navigation';
import { Star, ArrowLeft } from 'lucide-react';

interface StockHeaderProps {
  symbol: string;
  isInWatchlist: boolean;
  onToggleWatchlist: () => void;
  onViewNews: () => void;
}

export const StockHeader: React.FC<StockHeaderProps> = ({
  symbol,
  isInWatchlist,
  onToggleWatchlist,
  onViewNews,
}) => {
  const router = useRouter();

  return (
    <div className="mb-6">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center text-[#00D4FF] hover:text-[#00A8E8] transition-colors mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-white">{symbol}</h1>
            <button
              onClick={onToggleWatchlist}
              className="p-2 hover:bg-[#263238] rounded-lg transition-colors duration-200"
              aria-label="Toggle watchlist"
            >
              <Star
                className={`w-6 h-6 transition-all duration-200 ${
                  isInWatchlist
                    ? 'fill-[#FFB300] text-[#FFB300]'
                    : 'text-[#B0BEC5] hover:text-[#FFB300]'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300">
              Set Price Alert
            </button>
            <button 
              onClick={onViewNews}
              className="px-4 py-2 bg-[#0A1929] border border-[#37474F] text-white font-semibold rounded-lg hover:border-[#00D4FF] hover:bg-[#00D4FF]/5 transition-all duration-200"
            >
              View News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
