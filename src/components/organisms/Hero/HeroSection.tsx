"use client";

import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import Container from "@/components/atom/Container/Container";
import CTAGroup from "@/components/molecules/CTAGroup/CTAGroup";
import WaveBackground from "@/components/molecules/WaveBackground/WaveBackground";
import { ChevronDown, Star } from "lucide-react";
import React from "react";

import { heroContent } from "@/data/hero";

const HeroSection = () => {
  return (
    <WaveBackground>
      <Container className="h-full flex flex-col items-center justify-center text-center relative py-20 lg:py-32">
        <div className="space-y-8 max-w-5xl flex flex-col items-center">
          {/* Trust Banner Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 transition-all duration-300 hover:bg-blue-100/50 dark:hover:bg-blue-900/20">
            <Star
              size={14}
              className="text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400"
            />
            <span className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-300 uppercase">
              AI-First Engineering Teams
            </span>
          </div>

          <Heading level={1} className="leading-tight">
            <span className="bg-linear-to-r from-gray-500 via-black to-gray-500 dark:from-gray-400 dark:via-white dark:to-gray-400 bg-clip-text text-transparent transition-all duration-500">
              {heroContent.title}
            </span>
          </Heading>

          <Text
            variant="muted"
            className="text-lg md:text-xl font-medium max-w-3xl mx-auto"
          >
            {heroContent.subtitle}
          </Text>
        </div>

        <CTAGroup ctas={heroContent.ctas} className="mt-12" centered={true} />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <ChevronDown size={40} className="text-blue-500" />
          <ChevronDown size={25} className="-mt-6 text-blue-300" />
        </div>
      </Container>
    </WaveBackground>
  );
};

export default HeroSection;
