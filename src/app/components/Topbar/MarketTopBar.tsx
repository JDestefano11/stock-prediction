'use client';

import React from 'react';
import TradingViewTickerTape from './TradingViewTickerTape';

const MarketTopBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-[#0A1929] border-b border-[#263238]">
      <div className="h-[62px] flex items-center">
        <TradingViewTickerTape
          colorTheme="dark"
          isTransparent={true}
          displayMode="compact"
        />
      </div>
    </div>
  );
};

export default MarketTopBar;
