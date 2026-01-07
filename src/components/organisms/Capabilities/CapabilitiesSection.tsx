import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { capabilities } from "@/data/capabilities";
import { Bolt, Bot, Cpu, BrainCircuit } from "lucide-react";
import React from "react";

const iconMap: Record<number, any> = {
  0: Bot,
  1: Cpu,
  2: BrainCircuit,
};

const CapabilitiesSection = () => {
  return (
    <section className="py-24" id="capabilities">
      <Container>
        <SectionHeader
          badge="AI Capabilities"
          badgeIcon={<Bolt size={14} />}
          title="AI Capabilities We Deliver in Production"
          subtitle="Powerful systems that give you the tools to automate faster and work smarter."
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
