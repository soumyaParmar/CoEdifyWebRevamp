import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import { ArrowRight, Inbox, Brain, Zap, CheckCircle } from "lucide-react";
import React from "react";

const steps = [
  {
    title: "Step 1 – Input",
    description:
      "Documents, user actions, system events, and APIs are ingested into the system.",
    icon: Inbox,
  },
  {
    title: "Step 2 – AI Agents",
    description:
      "Reasoning, validation, compliance, and reporting agents analyze and process the inputs.",
    icon: Brain,
  },
  {
    title: "Step 3 – Actions",
    description:
      "System updates, decisions, reports, notifications, and audit trails are automatically generated.",
    icon: Zap,
  },
];

const AgenticFlowSection = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="process">
      <Container>
        <SectionHeader
          title="From Manual Processes to Autonomous AI Workflows"
          subtitle="Our agentic architecture ensures faster execution, lower errors, and explainable decisions."
          className="mb-16"
        />

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-200 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-blue-500 relative group transition-transform duration-300 hover:scale-110">
                  <step.icon size={36} />
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 items-center justify-center text-blue-200">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
                <div className="text-center space-y-2">
                  <Heading level={4}>{step.title}</Heading>
                  <Text
                    variant="muted"
                    className="text-sm max-w-[250px] mx-auto"
                  >
                    {step.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <CheckCircle className="text-green-500" size={20} />
            <Text variant="small" className="font-bold text-gray-700">
              Faster Execution
            </Text>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <CheckCircle className="text-green-500" size={20} />
            <Text variant="small" className="font-bold text-gray-700">
              Lower Error Rates
            </Text>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
            <CheckCircle className="text-green-500" size={20} />
            <Text variant="small" className="font-bold text-gray-700">
              Explainable Decisions
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AgenticFlowSection;
