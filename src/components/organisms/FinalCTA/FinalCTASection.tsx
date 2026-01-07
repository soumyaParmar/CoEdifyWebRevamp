import Container from "@/components/atom/Container/Container";
import CardLayout from "@/components/atom/Card/CardLayout";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import CTAGroup from "@/components/molecules/CTAGroup/CTAGroup";
import React from "react";

const FinalCTASection = () => {
  const ctas = [
    {
      label: "Book a Strategy Call",
      href: "https://calendar.app.google/PDsuNkzSCVGXvhio8",
      variant: "contained" as const,
    },
    {
      label: "Explore Our Solutions",
      href: "#solutions",
      variant: "outlined" as const,
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <CardLayout className="py-20! px-8! relative overflow-hidden text-center bg-linear-to-br from-blue-50 to-white">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl z-0"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl z-0"></div>

          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <Heading level={2} variant="gradient">
              Ready to Automate Your Workflows with AI?
            </Heading>
            <Text variant="muted" className="text-lg">
              Partner with CoEdify to design, build, and deploy production-grade
              AI systems that transform how your business operates.
            </Text>
            <CTAGroup ctas={ctas} className="pt-4" />
          </div>
        </CardLayout>
      </Container>
    </section>
  );
};

export default FinalCTASection;
