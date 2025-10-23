// Predefined symbol configurations for different market focuses

export const CRYPTO_SYMBOLS = [
  { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
  { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
  { proName: 'BINANCE:BNBUSD', title: 'BNB' },
  { proName: 'COINBASE:SOLUSD', title: 'Solana' },
  { proName: 'BINANCE:ADAUSD', title: 'Cardano' },
  { proName: 'COINBASE:DOGEUSD', title: 'Dogecoin' },
];

export const TECH_STOCKS = [
  { proName: 'NASDAQ:AAPL', title: 'Apple' },
  { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
  { proName: 'NASDAQ:GOOGL', title: 'Google' },
  { proName: 'NASDAQ:AMZN', title: 'Amazon' },
  { proName: 'NASDAQ:TSLA', title: 'Tesla' },
  { proName: 'NASDAQ:NVDA', title: 'NVIDIA' },
  { proName: 'NASDAQ:META', title: 'Meta' },
  { proName: 'NASDAQ:NFLX', title: 'Netflix' },
];

export const INDICES = [
  { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
  { proName: 'FOREXCOM:NSXUSD', title: 'NASDAQ 100' },
  { proName: 'FOREXCOM:DJI', title: 'Dow Jones' },
  { proName: 'TVC:VIX', title: 'VIX' },
];

export const FOREX = [
  { proName: 'FX_IDC:EURUSD', title: 'EUR/USD' },
  { proName: 'FX_IDC:GBPUSD', title: 'GBP/USD' },
  { proName: 'FX_IDC:USDJPY', title: 'USD/JPY' },
  { proName: 'FX_IDC:USDCHF', title: 'USD/CHF' },
];

export const DEFAULT_SYMBOLS = [
  ...INDICES,
  ...TECH_STOCKS.slice(0, 6),
  ...CRYPTO_SYMBOLS.slice(0, 2),
];
