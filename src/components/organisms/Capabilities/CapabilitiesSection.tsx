import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { capabilities } from "@/data/capabilities";
import { Bolt, Bot, Cpu, BrainCircuit, Zap, Database } from "lucide-react";
import React from "react";

const iconMap: Record<number, any> = {
  0: Cpu,
  1: Zap,
  2: BrainCircuit,
  3: Bot,
  4: Bolt,
  5: Database,
};

const CapabilitiesSection = () => {
  return (
    <section className="py-24" id="capabilities">
      <Container>
        <SectionHeader
          badge="AI Engineering"
          badgeIcon={<Bolt size={14} />}
          title="What We Build Across the AI Stack"
          subtitle="From foundational models to production-grade intelligent automation."
          className="mb-16"
        />

        <div className="flex flex-wrap gap-6 justify-center">
          {capabilities.map((capability, index) => {
            const Icon = iconMap[index] || Bot;
            return (
              <FeatureCard
                key={index}
                title={capability.title}
                description={capability.description}
                subPoints={capability.subPoints}
                icon={<Icon size={24} />}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CapabilitiesSection;
