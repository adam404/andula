// Key metrics data
export const keyMetricsData = {
  averageTimeToHire: 25,
  passThroughRate: "67%",
  totalHires: 10,
  openReqs: 5,
};

// Pipeline visualization data
export const pipelineData = [
  { stage: "Applied", count: 150 },
  { stage: "Screening", count: 80 },
  { stage: "Interview", count: 40 },
  { stage: "Offer", count: 20 },
  { stage: "Hired", count: 10 },
];

// Time to hire trend data (6 months)
export const timeToHireData = [
  { month: "Jan", days: 20 },
  { month: "Feb", days: 24 },
  { month: "Mar", days: 22 },
  { month: "Apr", days: 28 },
  { month: "May", days: 26 },
  { month: "Jun", days: 25 },
];

// Source effectiveness data
export const sourceEffectivenessData = [
  { source: "LinkedIn", hires: 5 },
  { source: "Indeed", hires: 3 },
  { source: "Referral", hires: 2 },
];

// Detailed pipeline data by role
export const pipelineByRole = {
  "Software Engineer": {
    applied: 80,
    screening: 40,
    interview: 20,
    offer: 10,
    hired: 5,
  },
  "Product Manager": {
    applied: 40,
    screening: 25,
    interview: 12,
    offer: 6,
    hired: 3,
  },
  Designer: {
    applied: 30,
    screening: 15,
    interview: 8,
    offer: 4,
    hired: 2,
  },
};

// Time periods for filtering
export const timePeriods = [
  "Last 7 Days",
  "Last 30 Days",
  "Last 90 Days",
  "This Year",
];

// Roles for filtering
export const roles = [
  "All",
  "Software Engineer",
  "Product Manager",
  "Designer",
];

// Sources for filtering
export const sources = ["All", "LinkedIn", "Indeed", "Referral"];

// Historical trends (12 months of data)
export const historicalTrends = {
  applications: [120, 140, 160, 150, 180, 200, 190, 210, 230, 200, 180, 150],
  hires: [8, 10, 12, 10, 15, 18, 16, 20, 22, 18, 15, 10],
  timeToHire: [22, 24, 23, 25, 26, 24, 25, 27, 26, 25, 24, 25],
};

// Industries for filtering
export const industries = [
  "All",
  "Technology",
  "Healthcare",
  "Financial Services",
  "Retail",
  "Manufacturing",
];

// Example companies data
export const companiesData = [
  {
    name: "TechVision Solutions",
    industry: "Technology",
    metrics: {
      averageTimeToHire: 28,
      passThroughRate: "72%",
      totalHires: 45,
      openReqs: 12,
      pipeline: {
        applied: 320,
        screening: 180,
        interview: 85,
        offer: 52,
        hired: 45,
      },
      sourceEffectiveness: {
        LinkedIn: 22,
        Indeed: 15,
        Referral: 8,
      },
      timeToHireTrend: [
        { month: "Jan", days: 25 },
        { month: "Feb", days: 27 },
        { month: "Mar", days: 26 },
        { month: "Apr", days: 29 },
        { month: "May", days: 28 },
        { month: "Jun", days: 28 },
      ],
    },
  },
  {
    name: "HealthFirst Medical",
    industry: "Healthcare",
    metrics: {
      averageTimeToHire: 35,
      passThroughRate: "58%",
      totalHires: 32,
      openReqs: 8,
      pipeline: {
        applied: 280,
        screening: 140,
        interview: 65,
        offer: 38,
        hired: 32,
      },
      sourceEffectiveness: {
        LinkedIn: 12,
        Indeed: 14,
        Referral: 6,
      },
      timeToHireTrend: [
        { month: "Jan", days: 32 },
        { month: "Feb", days: 34 },
        { month: "Mar", days: 36 },
        { month: "Apr", days: 35 },
        { month: "May", days: 35 },
        { month: "Jun", days: 35 },
      ],
    },
  },
  {
    name: "Global Finance Corp",
    industry: "Financial Services",
    metrics: {
      averageTimeToHire: 31,
      passThroughRate: "64%",
      totalHires: 38,
      openReqs: 15,
      pipeline: {
        applied: 295,
        screening: 165,
        interview: 78,
        offer: 45,
        hired: 38,
      },
      sourceEffectiveness: {
        LinkedIn: 18,
        Indeed: 12,
        Referral: 8,
      },
      timeToHireTrend: [
        { month: "Jan", days: 30 },
        { month: "Feb", days: 31 },
        { month: "Mar", days: 32 },
        { month: "Apr", days: 31 },
        { month: "May", days: 31 },
        { month: "Jun", days: 31 },
      ],
    },
  },
  {
    name: "RetailMart Plus",
    industry: "Retail",
    metrics: {
      averageTimeToHire: 29,
      passThroughRate: "61%",
      totalHires: 28,
      openReqs: 10,
      pipeline: {
        applied: 250,
        screening: 130,
        interview: 60,
        offer: 35,
        hired: 28,
      },
      sourceEffectiveness: {
        LinkedIn: 10,
        Indeed: 13,
        Referral: 5,
      },
      timeToHireTrend: [
        { month: "Jan", days: 28 },
        { month: "Feb", days: 29 },
        { month: "Mar", days: 30 },
        { month: "Apr", days: 29 },
        { month: "May", days: 28 },
        { month: "Jun", days: 29 },
      ],
    },
  },
  {
    name: "Industrial Manufacturing Co",
    industry: "Manufacturing",
    metrics: {
      averageTimeToHire: 33,
      passThroughRate: "59%",
      totalHires: 25,
      openReqs: 8,
      pipeline: {
        applied: 220,
        screening: 120,
        interview: 55,
        offer: 30,
        hired: 25,
      },
      sourceEffectiveness: {
        LinkedIn: 8,
        Indeed: 12,
        Referral: 5,
      },
      timeToHireTrend: [
        { month: "Jan", days: 34 },
        { month: "Feb", days: 33 },
        { month: "Mar", days: 32 },
        { month: "Apr", days: 33 },
        { month: "May", days: 34 },
        { month: "Jun", days: 33 },
      ],
    },
  },
];
