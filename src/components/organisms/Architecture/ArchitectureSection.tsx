import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { Shield, Layout, Database, Network } from "lucide-react";
import React from "react";

const trustPoints = [
  {
    title: "Modular AI agents",
    description:
      "Highly flexible agent architectures that can be swapped or scaled independently.",
    icon: Layout,
  },
  {
    title: "Explainable decisions",
    description:
      "Every action taken by our AI agents is logged and traceable for full accountability.",
    icon: Brain,
  },
  {
    title: "Secure data handling",
    description:
      "Enterprise-grade encryption and compliance with international data standards.",
    icon: Shield,
  },
  {
    title: "Scalable architecture",
    description:
      "Built on high-performance infrastructure to handle massive parallel AI workflows.",
    icon: Network,
  },
];

import { Brain } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="architecture">
      <Container>
        <SectionHeader
          badge="Enterprise Reality"
          title="Built for Enterprise Reality"
          subtitle="Modularity, security, and traceability are at the core of every system we build."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <FeatureCard
              key={index}
              title={point.title}
              description={point.description}
              icon={<point.icon size={24} />}
              className="flex-1 min-w-0"
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm font-bold text-blue-500 uppercase tracking-widest">
          <a href="#" className="hover:underline">
            View Architecture Diagram
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:underline">
            Explore AI Workflows
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ArchitectureSection;
