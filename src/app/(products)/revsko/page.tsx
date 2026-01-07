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
      {/* Hero Section */}
      <section className="py-24 bg-linear-to-b from-indigo-50/50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-gray-100 dark:border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs">
              Claims & Workflow Automation
            </div>
            <Heading
              level={1}
              variant="gradient"
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Revsko — AI-Powered Claims & Workflow Automation Platform
            </Heading>
            <Text
              variant="muted"
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              Eliminate manual effort from claims, approvals, and complex
              operational workflows with enterprise-grade AI.
            </Text>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                label="Request a Demo"
                onClick={() => {}}
                className="px-8 bg-blue-600 hover:bg-blue-700 rounded-2xl"
              />
              <Button
                label="Explore Automation Capabilities"
                onClick={() => {}}
                varient="outlined"
                className="px-8 rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="What is Revsko?"
                title="A Process-First Automation Platform"
                subtitle="Revsko is designed for insurance, fintech, and ops-heavy teams where accuracy, speed, and traceability are non-negotiable."
              />
              <div className="space-y-4 pt-4">
                {[
                  "Claims processing and adjudication",
                  "Document-heavy workflows",
                  "Rule-based and AI-assisted decisions",
                  "Multi-level approvals and escalations",
                  "End-to-end auditability and compliance",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <Text className="font-medium">{item}</Text>
                  </div>
                ))}
              </div>
            </div>
            <CardLayout className="h-[400px] flex items-center justify-center border-dashed border-2">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <GitMerge size={40} />
                </div>
                <Text className="text-gray-400 font-mono text-sm">
                  [ Workflow Engine Visualization ]
                </Text>
              </div>
            </CardLayout>
          </div>
        </Container>
      </section>

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

      {/* Strategic View */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <CardLayout className="p-12! shadow-2xl overflow-hidden relative border-0">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 text-indigo-500">
              <Layers size={120} />
            </div>
            <div className="relative z-10 max-w-3xl space-y-6">
              <Heading level={2} className="text-3xl font-bold">
                Revsko + DevSko: Strategic View
              </Heading>
              <Text className="text-xl leading-relaxed">
                While DevSko focuses on **talent and skill intelligence**,
                Revsko focuses on **operational and decision intelligence**.
              </Text>
              <Text className="text-lg text-gray-600 dark:text-gray-400">
                Together, they represent CoEdify’s broader mission: AI systems
                that replace manual judgment with intelligent, scalable
                workflows.
              </Text>
            </div>
          </CardLayout>
        </Container>
      </section>

      {/* Who is it for */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="Who Revsko Is For"
                title="Sectors Transformed by Revsko"
                subtitle="High-volume decision environments that require precision and auditability."
              />
              <div className="grid grid-cols-1 gap-3 pt-4">
                {[
                  "Insurance Providers (health, motor, travel)",
                  "TPAs & Claim Administrators",
                  "Fintech & Lending Platforms",
                  "Healthcare Ops Teams",
                  "Enterprises with complex approvals",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5"
                  >
                    <CheckCircle2
                      className="text-indigo-500 shrink-0"
                      size={20}
                    />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "SLA-Driven", desc: "No more missed deadlines" },
                { label: "Auditable", desc: "Full decision lineage" },
                { label: "Scalable", desc: "Handle 10x volume" },
                { label: "Compliant", desc: "Built-in guardrails" },
              ].map((item, i) => (
                <CardLayout key={i} className="p-6! h-auto!">
                  <div className="space-y-2">
                    <Heading
                      level={5}
                      className="text-lg text-indigo-600 dark:text-indigo-400"
                    >
                      {item.label}
                    </Heading>
                    <Text variant="small">{item.desc}</Text>
                  </div>
                </CardLayout>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Visual Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-900/50 overflow-hidden">
        <Container>
          <SectionHeader
            badge="The Edge"
            title="Why Revsko Stands Out"
            subtitle="Moving beyond manual operations to automated, SLA-driven execution."
            className="mb-16"
          />

          <ComparisonVisual
            leftTitle="The RevSko way"
            leftSubtitle="Automated, traceable, and SLA-driven"
            primaryColorClass="text-indigo-600"
            tagColors={[
              "bg-indigo-600",
              "bg-slate-900",
              "bg-blue-600",
              "bg-slate-800",
            ]}
            leftTags={[
              "Automated decisions",
              "Unified workflow",
              "SLA-driven",
              "End-to-end auditability",
              "Rule + AI hybrid",
              "Traceable",
              "Scalable Ops",
              "Precision extraction",
              "Policy aware",
              "Fraud detection",
            ]}
            rightTitle="Without RevSko"
            rightSubtitle="Manual, fragmented, and error-prone"
            rightTags={[
              "Manual review",
              "Fragmented tools",
              "Slow turnaround",
              "Poor audit trails",
              "Rule-only systems",
              "Unorganized",
              "High error rate",
              "Opaque process",
              "Siloed data",
              "Compliance risk",
            ]}
          />
        </Container>
      </section>

      {/* Architecture & Benefits */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="Architecture"
                title="Cloud-Native Automation"
                subtitle="Designed for deployment-readiness on AWS, Azure, or GCP."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Input Layer", desc: "APIs, portals, integrations" },
                  { title: "AI Layer", desc: "Document AI, fraud signals" },
                  { title: "Workflow", desc: "Orchestration & routing" },
                  { title: "Integration", desc: "Core systems, ERPs, CRMs" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5"
                  >
                    <Heading
                      level={6}
                      className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-1"
                    >
                      {item.title}
                    </Heading>
                    <Text variant="small">{item.desc}</Text>
                  </div>
                ))}
              </div>
            </div>
            <CardLayout className="p-8! space-y-6">
              <Heading level={3}>What You Get</Heading>
              <div className="space-y-4">
                {[
                  "Faster turnaround times",
                  "Reduced operational costs",
                  "Fewer manual errors",
                  "Strong compliance & audit readiness",
                  "Configurable automation, no lock-in",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardLayout>
          </div>
        </Container>
      </section>

      {/* Key Use Cases */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-900/50">
        <Container>
          <SectionHeader
            badge="Solutions"
            title="Key Use Cases"
            subtitle="Real-world applications of Revsko's automation engine."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Automating insurance claim lifecycles",
              "Reducing settlement time drastically",
              "Document-heavy approval workflows",
              "Enforcing compliance at speed",
              "Scaling ops without headcount growth",
            ].map((useCase, i) => (
              <CardLayout
                key={i}
                className="p-6! h-auto! flex flex-row items-center gap-4 bg-white dark:bg-slate-900"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <CheckCircle2 size={18} />
                </div>
                <Text className="font-medium text-sm leading-tight">
                  {useCase}
                </Text>
              </CardLayout>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <CardLayout className="py-20! px-8! relative overflow-hidden text-center border-0! transition-colors duration-500 shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/5 dark:bg-white/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 dark:bg-black/5 rounded-full blur-3xl z-0"></div>

            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <Heading
                level={2}
                className="text-4xl md:text-5xl font-extrabold"
              >
                Explore Revsko
              </Heading>
              <Text className="text-xl font-medium">
                Automate claims, approvals, and operational workflows with
                confidence.
              </Text>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  label={
                    <span className="flex items-center gap-2">
                      Request a Demo <ArrowRight size={20} />
                    </span>
                  }
                  onClick={() => {}}
                  className="px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl"
                />
                <Button
                  label="Talk to Workflow Experts"
                  onClick={() => {}}
                  varient="outlined"
                  className="px-8 rounded-2xl"
                />
              </div>
            </div>
          </CardLayout>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default RevSkoPage;
