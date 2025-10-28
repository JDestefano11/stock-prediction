export interface Stock {
  symbol: string;
  name: string;
  exchange: string;
  type: 'stock' | 'crypto';
  price?: number;
  change?: number;
  changePercent?: number;
}
