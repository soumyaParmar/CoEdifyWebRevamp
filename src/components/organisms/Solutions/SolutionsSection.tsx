import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { Users, Briefcase, BarChart3, Settings } from "lucide-react";
import React from "react";

import { solutionsByDomain } from "@/data/solutions";

const domainIcons = [Users, Briefcase, BarChart3, Settings];

const SolutionsSection = () => {
  return (
    <section className="py-24" id="solutions">
      <Container>
        <SectionHeader
          badge="Solutions"
          title="AI Solutions by Business Domain"
          subtitle="Tailored AI systems designed to solve specific challenges across your organization."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsByDomain.map((domain, index) => {
            const Icon = domainIcons[index] || Settings;
            return (
              <FeatureCard
                key={index}
                title={domain.domain}
                description="Key focus areas:"
                subPoints={[
                  ...domain.problems.map((p) => `Problem: ${p}`),
                  `AI Used: ${domain.aiUsed.join(", ")}`,
                ]}
                icon={<Icon size={24} />}
                className="flex-1 min-w-0"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
