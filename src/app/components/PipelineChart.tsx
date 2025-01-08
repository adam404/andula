import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../context/DataContext";

interface PipelineChartProps {
  filters: {
    timePeriod?: string;
    role?: string;
    source?: string;
  };
}

export default function PipelineChart({ filters }: PipelineChartProps) {
  const { currentData } = useData();
  const { pipeline } = currentData;

  console.log(filters);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Pipeline Visualization</h2>
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <BarChart
            data={pipeline}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" maxBarSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
