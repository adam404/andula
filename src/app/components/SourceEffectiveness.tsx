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

interface SourceEffectivenessProps {
  filters: {
    timePeriod?: string;
    role?: string;
    source?: string;
  };
}

export default function SourceEffectiveness({
  filters,
}: SourceEffectivenessProps) {
  const { currentData } = useData();
  const { sourceEffectiveness } = currentData;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Source Effectiveness</h2>
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <BarChart
            data={sourceEffectiveness}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="source" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="hires" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
