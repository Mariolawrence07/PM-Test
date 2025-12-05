import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ---------------------------------------------------
// DATA
// ---------------------------------------------------
const data = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 58 },
  { month: "Apr", value: 72 },
  { month: "May", value: 68 },
  { month: "Jun", value: 85 },
  { month: "Jul", value: 92 },
  { month: "Aug", value: 78 },
  { month: "Sep", value: 88 },
  { month: "Oct", value: 65 },
  { month: "Nov", value: 72 },
  { month: "Dec", value: 58 },
];

const timeRanges = ["1d", "1h", "4h", "1m", "5m", "15m", "30m", "1w"];

// ---------------------------------------------------
// CUSTOM TOOLTIP
// ---------------------------------------------------
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;

  const value = payload[0].value;

  return (
    <div
      className="
        bg-red-500 text-white text-xs
        rounded-md px-3 py-2 shadow-md
        text-center border border-white
      "
    >
      <div className="text-sm font-semibold">${value.toFixed(2)}</div>
      <div className="opacity-90">{label}</div>
    </div>
  );
}

// ---------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------
export default function MarketChart() {
  const [timeRange, setTimeRange] = useState("1h");

  return (
    <>
      <div
        className="
        relative
        bg-gradient-to-b from-[#FFF5F5] to-[#FFE9E9]
        rounded-3xl p-6 md:p-10 shadow-md overflow-hidden
        mt-8
      "
      >
        {/* Header */}
        <div className="text-left mb-3 font-semibold text-sm">XAU/USD</div>

        {/* VERTICAL TIME-RANGE BUTTONS */}
        <div
          className="
          absolute right-3 top-1/2 -translate-y-1/2
          flex flex-col gap-1 z-50
        "
        >
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`
              rounded-md px-3 py-1 text-xs font-semibold
              transition-all border
              ${
                timeRange === range
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-black text-white opacity-80 hover:opacity-100 border-black"
              }
            `}
            >
              {range}
            </button>
          ))}
        </div>

        {/* CHART BODY */}
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 60, left: 0, bottom: 10 }}
          >
            {/* GRADIENT AREA */}
            <defs>
              <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* RED DOTTED GRID */}
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#EA4B4B"
              opacity={0.4}
            />

            {/* AXIS STYLE */}
            <XAxis
              dataKey="month"
              tick={{ fill: "#ED1D25", fontSize: 11 }}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "#ED1D25", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            {/* CUSTOM TOOLTIP + VERTICAL CURSOR */}
            <Tooltip
              cursor={{
                stroke: "#FF6A6A",
                strokeWidth: 2,
                opacity: 0.6,
              }}
              content={<CustomTooltip />}
            />

            {/* AREA + LINE */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#E53939"
              strokeWidth={3}
              fill="url(#chartArea)"
              activeDot={{
                r: 6,
                fill: "#E53939",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* FOOTER */}
      </div>
      <p className="text-xs text-gray-400 mt-4">
        Past performance is not a reliable indicator of future results
      </p>
    </>
  );
}
