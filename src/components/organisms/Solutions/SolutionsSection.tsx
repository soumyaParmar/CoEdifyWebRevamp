import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { Users, ShieldCheck, Briefcase } from "lucide-react";
import React from "react";

const solutions = [
  {
    title: "For HR & Talent Leaders",
    description: "Personalized AI-driven experiences for the future of work.",
    points: [
      "AI-driven skill assessments",
      "Proctoring and integrity checks",
      "Candidate scoring and insights",
      "Hiring decision intelligence",
    ],
    icon: Users,
  },
  {
    title: "For Enterprise Ops & IT",
    description: "Scale your intelligence without increasing your headcount.",
    points: [
      "AI automation across internal workflows",
      "Agent-based orchestration",
      "System-to-system intelligence",
      "Reduced manual dependencies",
    ],
    icon: ShieldCheck,
  },
  {
    title: "For Finance, CPG & Claims",
    description: "Accuracy and speed where it matters the most.",
    points: [
      "Automated claim ingestion and validation",
      "TPM reconciliation",
      "Rule + AI hybrid decisioning",
      "End-to-end auditability",
    ],
    icon: Briefcase,
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-24" id="solutions">
      <Container>
        <SectionHeader
          badge="Solutions"
          title="Solutions by Function"
          subtitle="Tailored AI systems designed to solve specific challenges across your organization."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              title={solution.title}
              description={solution.description}
              subPoints={solution.points}
              icon={<solution.icon size={24} />}
              className="flex-1 min-w-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
