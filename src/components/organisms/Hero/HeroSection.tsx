"use client";

import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import Container from "@/components/atom/Container/Container";
import CTAGroup from "@/components/molecules/CTAGroup/CTAGroup";
import WaveBackground from "@/components/molecules/WaveBackground/WaveBackground";
import { ChevronDown, Star } from "lucide-react";
import React from "react";

import { heroContent } from "@/data/hero";
import Image from "next/image";
import Marquee from "@/components/atom/Marquee/Marquee";

const HeroSection = () => {
  return (
    <WaveBackground>
      <Container className="min-h-full flex flex-col items-center justify-center text-center relative pb-0 lg:pb-20 pt-30 lg:pt-42">
        <div className="space-y-8 max-w-5xl flex flex-col items-center">
          {/* Trust Banner Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 transition-all duration-300 hover:bg-blue-100/50 dark:hover:bg-blue-900/20">
            <Image
              src={"/favicon-96x96.png"}
              alt=""
              height={20}
              width={20}
              className="rounded-full"
            />
            <span className="text-xs tracking-wide text-gray-700 dark:text-blue-300 ">
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

        <div className="min-h-[200px] grow w-full py-8 pt-20 lg:pt-40 overflow-hidden pointer-events-none fade-in-up delay-300">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 tracking-wide uppercase opacity-80">
            Trusted by Industry Leaders
          </p>
          <div className="relative w-full mask-gradient">
            <Marquee className="py-2" reverse={false}>
              {heroContent.partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative h-8 w-32 md:h-10 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </Container>
    </WaveBackground>
  );
};

export default HeroSection;
