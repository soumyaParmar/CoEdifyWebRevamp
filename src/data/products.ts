import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "devsko",
    name: "DevSko",
    description:
      "An AI-powered hiring and skill intelligence platform that enables companies to assess real skills, ensure integrity, and make data-driven hiring decisions.",
    useCase:
      "A company shares an assessment link with candidates, evaluates real skills automatically, and hires with confidence — without manual screening.",
    features: [
      "AI-driven assessments",
      "Secure proctoring",
      "Advanced scoring & reporting",
      "Candidate-ready insights",
    ],
    ctas: [
      {
        label: "Explore DevSko",
        href: "https://devsko.com/",
        variant: "contained",
      },
      {
        label: "View Hiring Case Study",
        href: "#case-studies",
        variant: "outlined",
      },
    ],
    imagePath: "/images/products/devsko/devsko_ai_interview.png",
  },
  {
    id: "revsko",
    name: "RevSko",
    description:
      "An AI-driven claim and TPM automation platform for CPG companies, reducing manual effort and accelerating reimbursements.",
    useCase:
      "A CPG company automates distributor claims processing with AI agents, reducing turnaround time and disputes.",
    features: [
      "Automated claim ingestion",
      "AI-based validation",
      "TPM reconciliation",
      "Faster reimbursements",
    ],
    ctas: [
      { label: "Explore RevSko", href: "#", variant: "contained" },
      {
        label: "View CPG Case Study",
        href: "#case-studies",
        variant: "outlined",
      },
    ],
    imagePath: "/images/products/revsko/revsko_claims.png",
  },
];
