import React from "react";
import { useData, RoleType } from "../context/DataContext";
import { pipelineByRole } from "../data/mockData";

interface KeyMetricsProps {
  filters: {
    timePeriod?: string;
    role: RoleType;
    source?: string;
  };
}

export default function KeyMetrics({ filters }: KeyMetricsProps) {
  const { currentData } = useData();
  const { keyMetrics } = currentData;

  const filteredMetrics = React.useMemo(() => {
    let metrics = { ...keyMetrics };

    // Apply role filter
    if (filters.role && filters.role !== "All") {
      const roleData = pipelineByRole[filters.role];
      if (roleData) {
        metrics = {
          ...metrics,
          totalHires: roleData.hired,
          openReqs: Math.round(
            (roleData.hired / keyMetrics.totalHires) * keyMetrics.openReqs
          ),
        };
      }
    }

    // Apply source filter
    if (filters.source && filters.source !== "All") {
      const sourceData = currentData.sourceEffectiveness.find(
        (s) => s.source === filters.source
      );
      if (sourceData) {
        const totalHires = currentData.sourceEffectiveness.reduce(
          (sum, s) => sum + s.hires,
          0
        );
        metrics = {
          ...metrics,
          totalHires: sourceData.hires,
          openReqs: Math.round(
            (sourceData.hires / totalHires) * metrics.openReqs
          ),
        };
      }
    }

    return metrics;
  }, [
    keyMetrics,
    currentData.sourceEffectiveness,
    filters.role,
    filters.source,
  ]);

  return (
    <div className="flex gap-4 mb-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 w-[150px] text-center shadow-sm">
        <h3 className="text-gray-600 font-medium mb-2">Avg Time to Hire</h3>
        <p className="text-2xl font-semibold">
          {filteredMetrics.averageTimeToHire} days
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 w-[150px] text-center shadow-sm">
        <h3 className="text-gray-600 font-medium mb-2">Pass-Through Rate</h3>
        <p className="text-2xl font-semibold">
          {filteredMetrics.passThroughRate}
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 w-[150px] text-center shadow-sm">
        <h3 className="text-gray-600 font-medium mb-2">Total Hires</h3>
        <p className="text-2xl font-semibold">{filteredMetrics.totalHires}</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 w-[150px] text-center shadow-sm">
        <h3 className="text-gray-600 font-medium mb-2">Open Reqs</h3>
        <p className="text-2xl font-semibold">{filteredMetrics.openReqs}</p>
      </div>
    </div>
  );
}
