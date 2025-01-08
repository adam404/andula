"use client";

import React, { useState } from "react";
import FilterControls from "@/app/components/FilterControls";
import PipelineChart from "@/app/components/PipelineChart";
import KeyMetrics from "@/app/components/KeyMetrics";
import TimeToHireChart from "@/app/components/TimeToHireChart";
import SourceEffectiveness from "@/app/components/SourceEffectiveness";
import { DataProvider } from "@/app/context/DataContext";

interface Filters {
  timePeriod: string;
  role: string;
  source: string;
}

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    timePeriod: "Last 30 Days",
    role: "All",
    source: "All",
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-[1400px]">
          <header className="mb-10 bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
              Recruiting Pipeline Dashboard
              <span className="text-sm font-normal text-gray-500 ml-2">
                (Prototype)
              </span>
            </h1>
            <FilterControls
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            <section className="min-h-[400px] bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <KeyMetrics filters={filters} />
            </section>
            <section className="min-h-[400px] bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <PipelineChart filters={filters} />
            </section>
            <section className="min-h-[400px] bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <TimeToHireChart filters={filters} />
            </section>
            <section className="min-h-[400px] bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <SourceEffectiveness filters={filters} />
            </section>
          </main>
        </div>
      </div>
    </DataProvider>
  );
}
