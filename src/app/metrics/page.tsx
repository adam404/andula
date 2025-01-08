import React, { useState } from "react";
import FilterControls from "../components/FilterControls";
import KeyMetrics from "../components/KeyMetrics";
import TimeToHireChart from "../components/TimeToHireChart";
import SourceEffectiveness from "@/components/SourceEffectiveness";

export default function MetricsPage() {
  const [filters, setFilters] = useState({
    timePeriod: "Last 30 Days",
    role: "All",
    source: "All",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Key Metrics & Charts</h1>
      <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      <KeyMetrics filters={filters} />
      <TimeToHireChart filters={filters} />
      <SourceEffectiveness filters={filters} />
    </div>
  );
}
