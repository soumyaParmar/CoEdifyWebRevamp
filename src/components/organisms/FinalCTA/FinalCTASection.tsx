import Container from "@/components/atom/Container/Container";
import CardLayout from "@/components/atom/Card/CardLayout";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import CTAGroup from "@/components/molecules/CTAGroup/CTAGroup";
import React from "react";

import { finalCTA } from "@/data/finalCTA";

const FinalCTASection = () => {
  return (
    <section className="py-24">
      <Container>
        <CardLayout className="py-20! overflow-hidden px-8! relative  text-center bg-linear-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl z-0"></div>

          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <Heading level={2} variant="gradient">
              {finalCTA.title}
            </Heading>
            <Text variant="muted" className="text-lg">
              {finalCTA.subtitle}
            </Text>
            <CTAGroup ctas={finalCTA.ctas} className="pt-4" />
          </div>
        </CardLayout>
      </Container>
    </section>
  );
};

export default FinalCTASection;
