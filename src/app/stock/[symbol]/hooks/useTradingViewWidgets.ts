import { useTradingView } from '@/app/utils/tradingViewHook';

export const useTradingViewWidgets = (tradingViewSymbol: string) => {
  // Advanced Chart Widget
  const chartRef = useTradingView({
    widgetType: 'AdvancedChart',
    config: {
      width: '100%',
      height: '600',
      symbol: tradingViewSymbol,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      backgroundColor: 'rgba(10, 25, 41, 1)',
      gridColor: 'rgba(38, 50, 56, 0.3)',
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      allow_symbol_change: true,
      studies: [
        'STD;SMA',
        'STD;EMA',
        'STD;Volume'
      ]
    },
    scriptSrc: 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
  });

  // Company Profile Widget
  const companyProfileRef = useTradingView({
    widgetType: 'SymbolInfo',
    config: {
      symbol: tradingViewSymbol,
      width: '100%',
      locale: 'en',
      colorTheme: 'dark',
      isTransparent: false
    },
    scriptSrc: 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'
  });

  // Technical Analysis Widget
  const technicalAnalysisRef = useTradingView({
    widgetType: 'TechnicalAnalysis',
    config: {
      interval: '1D',
      width: '100%',
      isTransparent: false,
      height: '400',
      symbol: tradingViewSymbol,
      showIntervalTabs: true,
      locale: 'en',
      colorTheme: 'dark'
    },
    scriptSrc: 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
  });

  // Fundamental Data Widget
  const fundamentalDataRef = useTradingView({
    widgetType: 'FundamentalData',
    config: {
      symbol: tradingViewSymbol,
      colorTheme: 'dark',
      isTransparent: false,
      largeChartUrl: '',
      displayMode: 'regular',
      width: '100%',
      height: '830',
      locale: 'en'
    },
    scriptSrc: 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js'
  });

  // Symbol Overview Widget (long one with all info)
  const symbolOverviewRef = useTradingView({
    widgetType: 'SymbolInfo',
    config: {
      symbol: tradingViewSymbol,
      width: '100%',
      locale: 'en',
      colorTheme: 'dark',
      isTransparent: false
    },
    scriptSrc: 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
  });

  return {
    chartRef,
    companyProfileRef,
    technicalAnalysisRef,
    fundamentalDataRef,
    symbolOverviewRef
  };
};
