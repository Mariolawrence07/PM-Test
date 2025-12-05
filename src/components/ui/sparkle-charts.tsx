import { LineChart, Line, Area, ResponsiveContainer } from "recharts";

interface SparklineProps {
  data: Array<{ value: number }>;
  isPositive?: boolean;
  height?: number;
  width?: number;
}

export function Sparkline({
  data,
  isPositive = true,
  height = 30,
  width = 60,
}: SparklineProps) {

  const lineColor = isPositive ? "#22c55e" : "#ef4444";
  const gradientId = `sparklineGradient-${lineColor.replace("#", "")}`;

  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        
        {/* Gradient for shaded fill */}
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={lineColor} stopOpacity={0.3} />
            <stop offset="100%" stopColor={lineColor} stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Shaded Area */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill={`url(#${gradientId})`}
        />

        {/* Main sparkline */}
        <Line
          type="monotone"
          dataKey="value"
          stroke={lineColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
