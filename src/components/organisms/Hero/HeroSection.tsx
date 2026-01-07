"use client";

import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import Container from "@/components/atom/Container/Container";
import CTAGroup from "@/components/molecules/CTAGroup/CTAGroup";
import WaveBackground from "@/components/molecules/WaveBackground/WaveBackground";
import { ChevronDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  const ctas = [
    {
      label: "Explore AI Solutions",
      href: "#capabilities",
      variant: "contained" as const,
    },
    {
      label: "Book a Strategy Call",
      href: "https://calendar.app.google/PDsuNkzSCVGXvhio8",
      variant: "outlined" as const,
    },
  ];

  return (
    <WaveBackground>
      <Container className="h-full flex flex-col items-center justify-center text-center relative py-20 ">
        <div className=" space-y-8">
          <Heading level={1}>
            <span className="bg-linear-to-r from-gray-500 via-black to-gray-500 bg-clip-text text-transparent">
              Powering Intelligent Workflows
            </span>
            <br />
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              With AI Agents
            </span>
          </Heading>

          <Text
            variant="muted"
            className="text-lg md:text-xl max-w-4xl mx-auto font-medium"
          >
            We design and deploy AI systems that automate decisions, eliminate
            manual processes, and scale across hiring, operations, and
            enterprise workflows.
          </Text>
        </div>

        <CTAGroup ctas={ctas} className="mt-12" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <ChevronDown size={40} className="text-blue-500" />
          <ChevronDown size={25} className="-mt-6 text-blue-300" />
        </div>
      </Container>
    </WaveBackground>
  );
};

export default HeroSection;
