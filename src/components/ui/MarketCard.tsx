import type { MarketData } from "@/lib/types";
import { cn } from "@/lib/utils"; 
import { Sparkline } from "./sparkle-charts";

interface MarketCardProps {
  data: MarketData;
  onClick: (id: number) => void;
  className?: string; // <-- ADDED
  variant?: "default" | "active"; // <-- ADDED (optional style variants)
}

export function MarketCard({
  data,
  onClick,
  className,
  variant,
}: MarketCardProps) {
  const isPositive = (data.changePercent ?? 0) >= 0;
  const currencySymbol = "";

  // Resolve variant automatically OR by override
  const isActive = variant ? variant === "active" : data.isActive;

  return (
    <div
      onClick={() => onClick(data.id)}
      className={cn(
        "w-full px-6 py-4 rounded-2xl flex items-center justify-between transition-all duration-200",
        isActive
          ? "bg-red-500 text-white shadow-lg"
          : "bg-white text-foreground border border-gray-200 hover:border-gray-300",
        className // <-- MERGE CUSTOM STYLES
      )}
    >
      {/* Left side */}
      <div className="flex items-center gap-2 justify-center">
        <div>
          {data.icon ? (
            <img
              src={data.icon}
              alt={data.name}
              className="w-6 h-6 object-contain"
            />
          ) : (
            data.name.charAt(0).toUpperCase()
          )}
        </div>

        <div className="text-left">
          <div className="font-bold text-sm">
            {data.name.toUpperCase().slice(0, 3)}
          </div>
          <div
            className={cn(
              "text-xs capitalize",
              isActive ? "text-red-100" : "text-gray-500"
            )}
          >
            {data.name}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="text-right flex items-center gap-1">
        {/* Sparkline (only if trend exists) */}
        {data.trend && data.trend.length > 1 && (
          <Sparkline
            data={data.trend.map((v) => ({ value: v }))}
            isPositive={isPositive}
            width={60}
            height={30}
          />
        )}
        <div>
          <div className="font-bold text-sm">
            {currencySymbol} {data.price?.toFixed(2) || "0.00"}
          </div>
          <div
            className={cn(
              "text-xs font-semibold",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {isPositive ? "+" : ""}
            {data.changePercent?.toFixed(2) || "0.00"}%
          </div>
        </div>
      </div>
    </div>
  );
}
