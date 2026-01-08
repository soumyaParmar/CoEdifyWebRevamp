"use client";

import Container from "@/components/atom/Container/Container";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import CardLayout from "@/components/atom/Card/CardLayout";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import Footer from "@/components/organisms/Footer/Footer";
import Button from "@/components/atom/Button/Button";
import ComparisonVisual from "@/components/molecules/ComparisonVisual/ComparisonVisual";
import ProductOverview from "@/components/organisms/ProductOverview/ProductOverview";
import {
  ShieldCheck,
  GitMerge,
  FileSearch,
  Settings2,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Zap,
  Layers,
} from "lucide-react";
import React from "react";

const RevSkoPage = () => {
  return (
    <main className="pt-20">
      <ProductOverview
        badge="Claims & Workflow Automation"
        title="AI-Powered Claims & Workflow Automation"
        description="Revsko automates claims, approvals, and document-heavy workflows using AI and rule-based orchestration. It is built for operations where speed, accuracy, and auditability matter."
        primaryAction={{ label: "Book a Demo", onClick: () => {} }}
        primaryActionLink="https://calendar.app.google/PDsuNkzSCVGXvhio8"
        secondaryAction={{ label: "Explore Revsko", onClick: () => {} }}
        secondaryActionLink="https://revsko.com"
        slides={[
          {
            title: "What Revsko Does",
            items: [
              "Automates claim and request processing",
              "Extracts and validates data from documents",
              "Orchestrates multi-step approval workflows",
              "Maintains full audit and compliance trails",
            ],
            image: "/images/products/revsko_claims.png",
          },
          {
            title: "Who It’s For",
            items: [
              "Insurance and claim administrators",
              "Fintech and lending platforms",
              "Healthcare operations teams",
              "Enterprises with complex internal workflows",
            ],
            image: "/images/products/revsko_workflow.png",
          },
          {
            title: "Why Revsko",
            items: [
              "Reduces manual operational load",
              "Improves turnaround time",
              "Combines rules + AI decisioning",
              "Enterprise-ready and cloud-scalable",
            ],
            image: "/images/products/revsko_audit.png",
          },
        ]}
      />

      {/* Core Capabilities */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-900/50">
        <Container>
          <SectionHeader
            badge="Intelligent Operations"
            title="Core Capabilities"
            subtitle="Revsko brings intelligence and control into every operational step of your organization."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<ShieldCheck size={24} />}
              title="AI-Driven Claim Processing"
              description="Automated claim intake, document extraction, and fraud detection with hybrid decisioning."
              subPoints={[
                "AI-based document extraction",
                "Anomaly and fraud signals",
                "Rule + AI hybrid decisioning",
              ]}
            />
            <FeatureCard
              icon={<GitMerge size={24} />}
              title="Workflow Orchestration Engine"
              description="A visual builder for complex routing, branching, and SLA-based escalations."
              subPoints={[
                "Visual workflow builder",
                "Conditional routing and branching",
                "SLA-based automated escalations",
              ]}
            />
            <FeatureCard
              icon={<FileSearch size={24} />}
              title="Document Intelligence"
              description="Transform unstructured documents into actionable data with high-precision OCR."
              subPoints={[
                "OCR and structured data extraction",
                "Policy and contract understanding",
                "Version tracking and lineage",
              ]}
            />
            <FeatureCard
              icon={<Settings2 size={24} />}
              title="Approval & Decision Automation"
              description="Scaling organizational decisions through configurable hierarchies and thresholds."
              subPoints={[
                "Configurable approval hierarchies",
                "Auto-approve / reject thresholds",
                "Exception handling with context",
              ]}
            />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default RevSkoPage;
