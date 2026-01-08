"use client";

import React from "react";
import Container from "@/components/atom/Container/Container";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import CardLayout from "@/components/atom/Card/CardLayout";
import Footer from "@/components/organisms/Footer/Footer";
import Button from "@/components/atom/Button/Button";
import ProductOverview from "@/components/organisms/ProductOverview/ProductOverview";
import { cn } from "@/lib/utils";
import { CheckCircle2, Users, Cpu, Zap } from "lucide-react";
import Image from "next/image";

const WHY_HIRE_DATA = [
  {
    title: "1. AI-First Engineering",
    description:
      "Our developers build with LLMs, agentic workflows, RAG pipelines, and automation at the core—AI is designed into the system, not added later.",
    image: "/images/hire_developer/AI-Workflow.png",
    bgVariant: "bg-blue-50 dark:bg-blue-900/20",
    stagger: "",
  },
  {
    title: "2. ML & Data Expertise",
    description:
      "From model training and fine-tuning to production ML pipelines, our engineers handle real-world ML challenges including performance, scalability, and monitoring.",
    image: "/images/hire_developer/ml-dataExp.png",
    bgVariant: "bg-indigo-50 dark:bg-indigo-900/20",
    stagger: "",
  },
  {
    title: "3. Cloud-Native by Default",
    description:
      "Deep expertise across AWS, Azure, and GCP, with strong foundations in scalable architectures, cost optimization, and high-availability systems.",
    image: "/images/hire_developer/cloud.png",
    bgVariant: "bg-blue-50 dark:bg-blue-900/20",
    stagger: "",
  },
  {
    title: "4. MLOps & DevOps Ready",
    description:
      "Production-grade workflows using CI/CD, model versioning, observability, and automated deployments, ensuring reliability from development to production.",
    image: "/images/hire_developer/ml-ops.png",
    bgVariant: "bg-indigo-50 dark:bg-indigo-900/20",
    stagger: "",
  },
  {
    title: "5. Full-Stack & Systems Strength",
    description:
      "Strong backend and frontend capabilities across modern stacks, enabling seamless integration between AI services, APIs, databases, and user interfaces.",
    image: "/images/hire_developer/full-stack.png",
    bgVariant: "bg-blue-50 dark:bg-blue-900/20",
    stagger: "",
  },
  {
    title: "6. Pre-Vetted, Production-Ready Talent",
    description:
      "Every developer is evaluated through real, scenario-based assessments, ensuring immediate impact with minimal onboarding and zero hiring risk.",
    image: "/images/hire_developer/pre-vetted.png",
    bgVariant: "bg-indigo-50 dark:bg-indigo-900/20",
    stagger: "",
  },
];

const HireDevelopersPage = () => {
  return (
    <main className="pt-20">
      {/* Section 1: Hero ... (unmodified) */}
      <ProductOverview
        badge="Hire Developers from CoEdify"
        title="Production-Ready Engineers. AI-First Mindset. Fast Onboarding."
        description="Scale your engineering team with developers who are already trained on real-world systems, modern stacks, and AI-driven architectures. From AI/ML to full-stack and cloud, our engineers integrate seamlessly into your workflow."
        primaryAction={{ label: "Hire Developers", onClick: () => {} }}
        primaryActionLink="https://calendar.app.google/PDsuNkzSCVGXvhio8"
        secondaryAction={{ label: "Talk to an Expert", onClick: () => {} }}
        secondaryActionLink="https://calendar.app.google/PDsuNkzSCVGXvhio8"
        slides={[
          {
            title: "Expertise in Modern Stacks",
            items: [
              "Proficient in React, Next.js, and TypeScript",
              "Backend excellence with Node.js and Python",
              "Cloud-native deployment and architecture",
              "Mobile development using Flutter and React Native",
            ],
            image: "/images/hire_developer/AI-Workflow.png",
          },
          {
            title: "AI & ML Specialized Roles",
            items: [
              "LLM integration and prompt engineering",
              "Custom model training and fine-tuning",
              "Data engineering and MLOps pipelines",
              "AI agent development for automation",
            ],
            image: "/images/hire_developer/ml-ops.png",
          },
          {
            title: "Scalable Engineering Teams",
            items: [
              "Flexible engagement models",
              "Pre-vetted through rigorous testing",
              "Domain expertise across industries",
              "Seamless integration with your Slack/Jira",
            ],
            image: "/images/hire_developer/pre-vetted.png",
          },
        ]}
      />

      {/* Section 2: Why Hire from CoEdify */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <SectionHeader
            badge="Why Choose Us"
            title="Beyond Traditional Hiring"
            subtitle="We provide engineers who don't just write code, but build scalable products."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-20 pb-16">
            {WHY_HIRE_DATA.map((item, index) => (
              <CardLayout
                key={index}
                className={cn(
                  "flex items-center gap-6 bg-white dark:bg-slate-800/50 border-gray-100 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1",
                  item.stagger
                )}
              >
                <div
                  className={cn(
                    "shrink-0 w-24 h-24 rounded-xl overflow-hidden",
                    item.bgVariant
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={100}
                    width={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <Heading level={4} className="text-lg font-bold">
                    {item.title}
                  </Heading>
                  <Text
                    variant="small"
                    className="text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-4"
                  >
                    {item.description}
                  </Text>
                </div>
              </CardLayout>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Final CTA */}
      <section className="py-24 bg-linear-to-b from-white to-blue-50/50 dark:from-slate-900 dark:to-slate-950">
        <Container>
          <CardLayout className="p-12 md:p-20 text-center overflow-hidden relative group rounded-[3rem]">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <Heading
                level={2}
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                Build Faster with the Right Developers
              </Heading>
              <Text className="text-xl text-gray-500 dark:text-gray-400">
                Hire engineers who understand scale, quality, and delivery.
              </Text>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button
                  label="Hire Developers from CoEdify"
                  onClick={() => {}}
                  link="https://calendar.app.google/PDsuNkzSCVGXvhio8"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl shadow-white/10"
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

export default HireDevelopersPage;
