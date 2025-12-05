import { useState } from "react";
import NavigationTabs from "@/components/ui/navigationTabs";
import { MarketCard } from "@/components/ui/MarketCard";
import { marketdata } from "@/data/market-data";
import MarketChart from "@/components/ui/market-chart";
import { H1, P } from "@/components/ui/typography";

export default function MarketChartSection() {
  const [activeTab, setActiveTab] = useState("most-traded");

  return (
    <div className="min-h-screen  my-8">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <H1 className="text-6xl font-bold mb-4">Our Markets</H1>
          <P className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stay informed with the data that matters, on 17,000+ markets1. Get
            the latest news, trader sentiment, spreads, price action and much
            more.
          </P>
        </div>
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
          {/* Left Sidebar */}
          <div>
            {marketdata.map((item, index) => (
              <MarketCard
                data={item}
                key={item.id}
                onClick={() => activeTab}
                className={`mb-4 ${
                  index === 0 ? "bg-red-600 text-white border-none" : ""
                }`}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="relative flex  justify-center w-full p-5 rounded-2xl bg-linear-to-r from-[#4A0006] to-[#A20011] shadow-[0_4px_18px_rgba(0,0,0,0.3)]">
                {/* LEFT GOLD BARS IMAGE (optional, remove if not needed) */}
                <img
                  src="/gold-bars.png"
                  className="absolute left-0 bottom-0 w-28 opacity-70 pointer-events-none"
                  alt=""
                />

                <div className="flex flex-col">
                  <P className="text-white text-2xl font-semibold mr-8">Gold</P>
                </div>

                {/* BUY & SELL BUTTONS */}
                <div className="flex gap-3">
                  {/* BUY CARD */}
                  <div className="bg-linear-to-r from-[#FF3C3C] to-[#C70000] text-white px-5 py-3 rounded-xl shadow-[0_3px_10px_rgba(199,0,0,0.4)]">
                    <p className="text-xs opacity-80 mb-0.5">Buy</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-bold">3773.31</p>
                      <span className="text-sm opacity-60">↓</span>
                    </div>
                  </div>

                  {/* SELL CARD */}
                  <div className="bg-white text-red-600 px-5 py-3 rounded-xl shadow-[0_3px_10px_rgba(0,0,0,0.18)]">
                    <P className="text-xs opacity-80 mb-0.5">Sell</P>
                    <div className="flex items-center gap-1">
                      <P className="text-xl font-bold">3773.61</P>
                      <span className="text-sm">↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MarketChart />
          </div>

          {/* Right Sidebar */}

          <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 text-sm h-28">
            {/* BUYERS */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Buyers</span>

              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded font-semibold text-gray-800">
                  66.95%
                </span>
                <span className="text-green-600 font-semibold">
                  Low: 3686.38
                </span>
              </div>
            </div>

            {/* SELLERS */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Seller</span>

              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-gray-100 rounded font-semibold text-gray-800">
                  66.95%
                </span>
                <span className="text-red-600 font-semibold">
                  High: 3788.96
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
