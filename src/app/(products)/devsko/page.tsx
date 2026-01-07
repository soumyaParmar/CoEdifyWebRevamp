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
  Users,
  Code2,
  ShieldCheck,
  LineChart,
  Search,
  Zap,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import React from "react";

const DevSkoPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-linear-to-b from-blue-50/50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-gray-100 dark:border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs">
              AI-Powered Assessment
            </div>
            <Heading
              level={1}
              variant="gradient"
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              DevSko — AI-Powered Skill Assessment & Interview Platform
            </Heading>
            <Text
              variant="muted"
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              Measure real skills, not resumes. Built for modern hiring,
              internal mobility, and skill benchmarking.
            </Text>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                label="Request a Demo"
                onClick={() => {}}
                className="px-8 bg-blue-600 hover:bg-blue-700 rounded-2xl"
              />
              <Button
                label="Explore the Platform"
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
                badge="What is DevSko?"
                title="A Modular AI Assessment System"
                subtitle="DevSko conducts end-to-end skill evaluation, replacing manual screening and subjective interviews with data-backed, skill-first insights."
              />
              <div className="space-y-4 pt-4">
                {[
                  "AI-led interviews with avatars",
                  "Live & async coding assessments",
                  "Secure proctoring with behavior analysis",
                  "Automated scoring with explainability",
                  "Real-time dashboards for decision-makers",
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
                <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Cpu size={40} />
                </div>
                <Text className="text-gray-400 font-mono text-sm">
                  [ Platform Visualization Placeholder ]
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
            badge="Engineering Depth"
            title="Core Capabilities"
            subtitle="Explore how DevSko delivers precision at every step of the talent evaluation process."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Users size={24} />}
              title="AI Interviewer (Avatar-Based)"
              description="Conversational AI interviewer with structured questioning and adaptive follow-ups."
              subPoints={[
                "Adaptive follow-ups based on candidate responses",
                "Natural, human-like interaction",
                "Technical, behavioral, and domain-specific roles",
              ]}
            />
            <FeatureCard
              icon={<Code2 size={24} />}
              title="Coding & Technical Assessments"
              description="Live coding environments for real-time skill validation across all major tech stacks."
              subPoints={[
                "Code, system design, and debugging scenarios",
                "Language-agnostic support (FE, BE, Data, AI/ML)",
                "Auto-evaluation with rubric-based scoring",
              ]}
            />
            <FeatureCard
              icon={<ShieldCheck size={24} />}
              title="Secure Proctoring & Integrity"
              description="Advanced monitoring systems to ensure assessment integrity in remote environments."
              subPoints={[
                "Posture, face presence, and anomaly detection",
                "Tab switching and environment checks",
                "Designed for high-trust remote assessments",
              ]}
            />
            <FeatureCard
              icon={<LineChart size={24} />}
              title="Intelligent Scoring & Insights"
              description="Deep analytics that go beyond a single score to provide a holistic talent view."
              subPoints={[
                "Confidence, clarity, and correctness evaluation",
                "AI-generated candidate feedback",
                "Recruiter-friendly reports and analytics",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Who is it for */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Enterprises", desc: "High-volume hiring at scale" },
                  { label: "Startups", desc: "Fast, unbiased screening" },
                  { label: "EdTech", desc: "Validating learning outcomes" },
                  { label: "Internal L&D", desc: "Measuring upskilling" },
                ].map((group, i) => (
                  <CardLayout key={i} className="p-6! h-auto!">
                    <div className="space-y-2 text-start">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Zap size={20} />
                      </div>
                      <Heading level={5} className="text-lg">
                        {group.label}
                      </Heading>
                      <Text variant="small">{group.desc}</Text>
                    </div>
                  </CardLayout>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <SectionHeader
                badge="Target Audience"
                title="Who DevSko Is For"
                subtitle="Designed for organizations that prioritize skill-first evaluation and engineering excellence."
              />
              <Text className="text-lg">
                DevSko is also perfect for **Hackathons & Contests**, providing
                real-time leaderboards and automated code evaluation for
                thousands of participants simultaneously.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Visual Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-900/50 overflow-hidden">
        <Container>
          <SectionHeader
            badge="The Difference"
            title="Why DevSko Stands Out"
            subtitle="DevSko redefines the assessment experience compared to traditional hiring methods."
            className="mb-16"
          />

          <ComparisonVisual
            leftTitle="The DevSko way"
            leftSubtitle="Intelligent, scalable, and bias-free"
            leftTags={[
              "Skill-driven",
              "AI Interviewing",
              "Structured Scoring",
              "Explainable AI",
              "Designed for scale",
              "Bias-reduced",
              "Real-time insights",
              "Objective",
              "Standardized",
              "Data-backed",
            ]}
            rightTitle="Without DevSko"
            rightSubtitle="Manual, slow, and subjective"
            rightTags={[
              "Resume-driven",
              "Manual interviews",
              "Subjective",
              "Limited scale",
              "High bias",
              "Unorganized",
              "Opaque",
              "Slow",
              "Inconsistent",
              "Risk-prone",
            ]}
          />
        </Container>
      </section>

      {/* Architecture & Engineering */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="Architecture"
                title="Engineering-First Platform"
                subtitle="Built with enterprise security, performance, and extensibility in mind."
              />
              <div className="grid grid-cols-1 gap-4 pt-4">
                {[
                  {
                    title: "Frontend",
                    desc: "Modern web UI for candidates & admins",
                  },
                  { title: "Backend", desc: "Secure APIs, scoring engines" },
                  {
                    title: "AI Layer",
                    desc: "LLM-powered interviews & insights",
                  },
                  {
                    title: "Infra",
                    desc: "Cloud-native, scalable (AWS/Azure/GCP)",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-white/5"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <Heading
                        level={6}
                        className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-1"
                      >
                        {item.title}
                      </Heading>
                      <Text variant="small">{item.desc}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <CardLayout className="p-8! space-y-6">
                <Heading level={3}>What You Get</Heading>
                <div className="space-y-4">
                  {[
                    "Faster hiring cycles",
                    "Consistent candidate experience",
                    "Data-driven decisions",
                    "Reduced interviewer workload",
                    "Scalable assessments without linear cost increase",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
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
          </div>
        </Container>
      </section>

      {/* Key Use Cases */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-900/50">
        <Container>
          <SectionHeader
            badge="Practical Impact"
            title="Key Use Cases"
            subtitle="How organizations are leveraging DevSko to transform their talent operations."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pre-screening thousands of candidates automatically",
              "Conducting AI-led technical interviews at scale",
              "Measuring real coding and problem-solving skills",
              "Running time-bound contests and leaderboards",
              "Reducing time-to-hire without compromising quality",
            ].map((useCase, i) => (
              <CardLayout
                key={i}
                className="p-6! h-auto! flex flex-row items-center gap-4 bg-white dark:bg-slate-900"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
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
          <CardLayout className="py-20! px-8! relative overflow-hidden text-center border-0! transition-colors duration-500 shadow-2xl translate-z-0">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/5 dark:bg-white/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 dark:bg-black/5 rounded-full blur-3xl z-0"></div>

            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <Heading
                level={2}
                className="text-4xl md:text-5xl font-extrabold"
              >
                Explore DevSko
              </Heading>
              <Text className="text-xl font-medium">
                See how AI-powered assessments can transform your hiring and
                evaluation workflows.
              </Text>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  label={
                    <span className="flex items-center gap-2">
                      Request a Demo <ArrowRight size={20} />
                    </span>
                  }
                  onClick={() => {}}
                  className="px-8  bg-blue-600 hover:bg-blue-700 text-white rounded-2xl"
                />
                <Button
                  label="Talk to Our AI Experts"
                  onClick={() => {}}
                  varient="outlined"
                  className="px-8  hover:bg-white/10 rounded-2xl"
                />
              </div>
              <div className="pt-4">
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 font-medium transition-colors"
                >
                  Explore the Platform Details
                </a>
              </div>
            </div>
          </CardLayout>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default DevSkoPage;
