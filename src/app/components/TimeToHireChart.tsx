import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../context/DataContext";

interface TimeToHireChartProps {
  filters: {
    timePeriod?: string;
    role?: string;
    source?: string;
  };
}

export default function TimeToHireChart({ filters }: TimeToHireChartProps) {
  const { currentData } = useData();
  const { timeToHireTrend } = currentData;

  console.log(filters);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Time to Hire Trend</h2>
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <LineChart
            data={timeToHireTrend}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="days"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
