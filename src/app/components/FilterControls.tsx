import React from "react";
import { useData, RoleType } from "../context/DataContext";
import {
  companiesData,
  industries,
  timePeriods,
  roles,
  sources,
} from "../data/mockData";

interface Filters {
  timePeriod?: string;
  role?: RoleType;
  source?: string;
}

interface FilterControlsProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
}

export default function FilterControls({
  filters,
  onFilterChange,
}: FilterControlsProps) {
  const { timePeriod, role, source } = filters;
  const {
    selectedCompany,
    selectedIndustry,
    setSelectedCompany,
    setSelectedIndustry,
  } = useData();

  const filteredCompanies =
    selectedIndustry === "All"
      ? companiesData
      : companiesData.filter((c) => c.industry === selectedIndustry);

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndustry = e.target.value;
    setSelectedIndustry(newIndustry);

    // Get companies for the new industry
    const filteredCompanies =
      newIndustry === "All"
        ? companiesData
        : companiesData.filter((c) => c.industry === newIndustry);

    // Set the first company from the filtered list
    if (filteredCompanies.length > 0) {
      setSelectedCompany(filteredCompanies[0].name);
    }
  };

  return (
    <div className="flex flex-wrap gap-6 items-center">
      <label className="flex items-center space-x-2">
        <span className="text-gray-600 font-medium whitespace-nowrap">
          Company
        </span>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="w-[180px] p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 shadow-sm text-ellipsis overflow-hidden"
        >
          {filteredCompanies.map((company) => (
            <option key={company.name} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center space-x-2 min-w-[200px]">
        <span className="text-gray-600 font-medium">Industry</span>
        <select
          value={selectedIndustry}
          onChange={handleIndustryChange}
          className="flex-1 p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 shadow-sm"
        >
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center space-x-2 min-w-[200px]">
        <span className="text-gray-600 font-medium">Time Period</span>
        <select
          value={timePeriod}
          onChange={(e) => onFilterChange("timePeriod", e.target.value)}
          className="flex-1 p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 shadow-sm"
        >
          {timePeriods.map((period) => (
            <option key={period}>{period}</option>
          ))}
        </select>
      </label>

      <label className="flex items-center space-x-2 min-w-[200px]">
        <span className="text-gray-600 font-medium">Role</span>
        <select
          value={role}
          onChange={(e) => onFilterChange("role", e.target.value)}
          className="flex-1 p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 shadow-sm"
        >
          {roles.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
      </label>

      <label className="flex items-center space-x-2 min-w-[200px]">
        <span className="text-gray-600 font-medium">Source</span>
        <select
          value={source}
          onChange={(e) => onFilterChange("source", e.target.value)}
          className="flex-1 p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 shadow-sm"
        >
          {sources.map((source) => (
            <option key={source}>{source}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
