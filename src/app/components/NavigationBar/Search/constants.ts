import { Stock } from './types';

export const POPULAR_STOCKS: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ', type: 'stock', price: 178.25, change: 2.15, changePercent: 1.22 },
  { symbol: 'TSLA', name: 'Tesla Inc.', exchange: 'NASDAQ', type: 'stock', price: 242.84, change: -3.21, changePercent: -1.30 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', exchange: 'NASDAQ', type: 'stock', price: 378.91, change: 5.42, changePercent: 1.45 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', exchange: 'NASDAQ', type: 'stock', price: 141.80, change: 1.23, changePercent: 0.87 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', exchange: 'NASDAQ', type: 'stock', price: 151.94, change: -0.85, changePercent: -0.56 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', exchange: 'NASDAQ', type: 'stock', price: 495.22, change: 8.76, changePercent: 1.80 },
  { symbol: 'BTC-USD', name: 'Bitcoin', exchange: 'Crypto', type: 'crypto', price: 43250.00, change: 1250.00, changePercent: 2.98 },
  { symbol: 'ETH-USD', name: 'Ethereum', exchange: 'Crypto', type: 'crypto', price: 2280.50, change: -45.30, changePercent: -1.95 },
];
