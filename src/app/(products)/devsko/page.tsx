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
      <ProductOverview
        badge="AI-Powered Assessment"
        logoUrl="/images/products/devsko/devsko_logo_no_name.png"
        title="AI-Powered Skill Assessment & Interview Platform"
        description="DevSko helps organizations evaluate real skills at scale using AI-driven interviews, coding assessments, and intelligent scoring. It replaces resume-based screening and manual interviews with structured, skill-first evaluation."
        primaryAction={{ label: "Book a Demo", onClick: () => {} }}
        primaryActionLink="https://calendar.app.google/PDsuNkzSCVGXvhio8"
        secondaryAction={{ label: "Explore DevSko", onClick: () => {} }}
        secondaryActionLink="https://devsko.com"
        slides={[
          {
            title: "What DevSko Does",
            items: [
              "Automates multi-step technical screenings",
              "Conducts AI-led coding & system design rounds",
              "Scents real-time fraud & plagiarism patterns",
              "Provides granular skill-competency insights",
            ],
            image: "/images/products/devsko/devsko_ai_interview.png",
          },
          {
            title: "Who It’s For",
            items: [
              "Talent acquisition & recruitment teams",
              "Engineering leadership & hiring managers",
              "Enterprises with high-volume tech hiring",
              "Staffing agencies & assessment providers",
            ],
            image: "/images/products/devsko/devsko_dashboard.png",
          },
          {
            title: "Why DevSko",
            items: [
              "Reduces screening time by 75%+",
              "Eliminates manual interview fatigue",
              "Ensures unbiased, data-driven evaluation",
              "Enterprise-ready with seamless integrations",
            ],
            image: "/images/products/devsko/devsko_scale.png",
          },
        ]}
      />

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

      <Footer />
    </main>
  );
};

export default DevSkoPage;
