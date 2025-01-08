import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  companiesData,
  keyMetricsData,
  timeToHireData,
  pipelineByRole,
} from "../data/mockData";

interface DataContextType {
  selectedCompany: string;
  selectedIndustry: string;
  currentData: {
    keyMetrics: typeof keyMetricsData;
    pipeline: { stage: string; count: number }[];
    sourceEffectiveness: { source: string; hires: number }[];
    timeToHireTrend: typeof timeToHireData;
  };
  setSelectedCompany: (company: string) => void;
  setSelectedIndustry: (industry: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState(companiesData[0].name);
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const currentData = React.useMemo(() => {
    const company = companiesData.find((c) => c.name === selectedCompany);
    if (!company)
      return {
        keyMetrics: keyMetricsData,
        pipeline: [],
        sourceEffectiveness: [],
        timeToHireTrend: [],
      };

    const { metrics } = company;

    // Calculate metrics based on source and role
    const calculateMetricsByFilters = (source: string, role: string) => {
      let filteredMetrics = { ...metrics };

      // Apply role filter
      if (role !== "All") {
        const roleData = pipelineByRole[role];
        if (roleData) {
          const totalHiresForRole = roleData.hired;
          filteredMetrics = {
            ...filteredMetrics,
            totalHires: totalHiresForRole,
            openReqs: Math.round(
              (totalHiresForRole / metrics.totalHires) * metrics.openReqs
            ),
            pipeline: roleData,
          };
        }
      }

      // Apply source filter
      if (source !== "All") {
        const sourceHires = filteredMetrics.sourceEffectiveness[source] || 0;
        const totalHires = Object.values(
          filteredMetrics.sourceEffectiveness
        ).reduce((sum, val) => sum + val, 0);

        filteredMetrics = {
          ...filteredMetrics,
          totalHires: sourceHires,
          openReqs: Math.round(
            (sourceHires / totalHires) * filteredMetrics.openReqs
          ),
          sourceEffectiveness: {
            [source]: filteredMetrics.sourceEffectiveness[source],
          },
        };
      }

      return filteredMetrics;
    };

    return {
      keyMetrics: {
        averageTimeToHire: metrics.averageTimeToHire,
        passThroughRate: metrics.passThroughRate,
        totalHires: metrics.totalHires,
        openReqs: metrics.openReqs,
      },
      pipeline: Object.entries(metrics.pipeline).map(([stage, count]) => ({
        stage: stage.charAt(0).toUpperCase() + stage.slice(1),
        count,
      })),
      sourceEffectiveness: Object.entries(metrics.sourceEffectiveness).map(
        ([source, hires]) => ({
          source,
          hires,
        })
      ),
      timeToHireTrend: metrics.timeToHireTrend,
    };
  }, [selectedCompany]);

  return (
    <DataContext.Provider
      value={{
        selectedCompany,
        selectedIndustry,
        currentData,
        setSelectedCompany,
        setSelectedIndustry,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
