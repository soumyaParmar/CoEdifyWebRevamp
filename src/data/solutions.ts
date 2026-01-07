import { SolutionDomain } from "@/types";

export const solutionsByDomain: SolutionDomain[] = [
  {
    domain: "Hiring & Talent",
    problems: [
      "Skill validation",
      "Candidate screening",
      "Hiring decision support",
    ],
    aiUsed: ["LLMs", "AI assessments", "Decision analytics"],
  },
  {
    domain: "Finance, CPG & Claims",
    problems: ["Claim validation", "TPM reconciliation", "Dispute reduction"],
    aiUsed: ["ML models", "Agentic workflows", "Data automation"],
  },
  {
    domain: "Enterprise Analytics",
    problems: ["Data fragmentation", "Slow insights", "Manual reporting"],
    aiUsed: ["ML", "LLMs", "AI-driven analytics"],
  },
  {
    domain: "Internal Operations",
    problems: ["Manual workflows", "System silos", "Operational inefficiency"],
    aiUsed: ["Automation", "Agents", "DB optimization"],
  },
];
