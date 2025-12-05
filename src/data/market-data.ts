import type { MarketData } from "@/lib/types";
import { ASSETS } from "@/config/assest";

export const marketdata: MarketData[] = [
  {
    id: 1,
    name: "bitcoin",
    isActive: false,
    price: 524.0,
    change: 13.65,
    changePercent: 3.25,
  },
  {
    id: 2,
    name: "ethereum",
    isActive: false,
    price: 234.45,
    change: -234.45,
    changePercent: -5.2,
  },
  {
    id: 3,
    name: "usd/eur",
    isActive: false,
    price: 0.00014,
    change: -234.45,
    changePercent: -2.1,
  },
  {
    id: 3,
    name: "usd/eur",
    isActive: false,
    price: 0.00014,
    change: -234.45,
    changePercent: -2.1,
  },
];

export const marketDataPreview: MarketData[] = [
  {
    id: 1,
    name: "USD/EUR",
    isActive: false,
    price: 0.00014,
    change: -234.45,
    changePercent: -2.1,
    trend: [12, 14, 13, 15, 16, 18, 17], // sample sparkline data
    icon: ASSETS.ICON_USD,
  },
  {
    id: 2,
    name: "XAUUSD",
    isActive: false,
    price: 0.00014,
    change: -234.45,
    changePercent: -2.1,
    trend: [20, 19, 18, 17, 16, 15, 14], // downtrend
    icon: ASSETS.ICON_GOLD,
  },
  {
    id: 3,
    name: "USD/EUR",
    isActive: false,
    price: 0.00014,
    change: -234.45,
    changePercent: -2.1,
    trend: [11, 12, 11, 13, 14, 15, 15],
    icon: ASSETS.ICON_USD,
  },
  {
    id: 4,
    name: "XAUUSD",
    isActive: false,
    price: 0.00014,
    change: -234.45,
    changePercent: -2.1,
    trend: [19, 18, 17, 17, 16, 15, 14],
    icon: ASSETS.ICON_GOLD,
  },
];
