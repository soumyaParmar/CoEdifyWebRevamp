import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { Shield, Layout, Database, Network } from "lucide-react";
import React from "react";

import { infraCapabilities } from "@/data/infrastructure";
import { Cloud, Activity, GitBranch, Lock, Server } from "lucide-react";

const infraIcons = [Cloud, Activity, GitBranch, Lock];

const ArchitectureSection = () => {
  return (
    <section
      className="py-24 bg-gray-50/50 dark:bg-slate-950/20"
      id="architecture"
    >
      <Container>
        <SectionHeader
          badge="Engineering Depth"
          title="AI Deployment, Infrastructure & MLOps"
          subtitle="Enterprise-grade reliability, security, and scalability for production AI workloads."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraCapabilities.map((capability, index) => {
            const Icon = infraIcons[index] || Server;
            return (
              <FeatureCard
                key={index}
                title={capability.title}
                description={capability.description}
                icon={<Icon size={24} />}
                className="flex-1 min-w-0"
              />
            );
          })}
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm font-bold text-blue-500 dark:text-white uppercase tracking-widest">
          <a href="#" className="hover:underline">
            View Cloud Architecture
          </a>
          <span className="text-gray-300 dark:text-blue-400">|</span>
          <a href="#" className="hover:underline">
            Explore MLOps Pipeline
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ArchitectureSection;
