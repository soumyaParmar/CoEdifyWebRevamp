"use client";

import HeroSection from "@/components/organisms/Hero/HeroSection";
import CapabilitiesSection from "@/components/organisms/Capabilities/CapabilitiesSection";
import AgenticFlowSection from "@/components/organisms/AgenticFlow/AgenticFlowSection";
import SolutionsSection from "@/components/organisms/Solutions/SolutionsSection";
import ProductsSection from "@/components/organisms/Products/ProductsSection";
import CaseStudiesSection from "@/components/organisms/CaseStudies/CaseStudiesSection";
import ArchitectureSection from "@/components/organisms/Architecture/ArchitectureSection";
import FinalCTASection from "@/components/organisms/FinalCTA/FinalCTASection";
import Footer from "@/components/organisms/Footer/Footer";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CapabilitiesSection />
      <AgenticFlowSection />
      <SolutionsSection />
      <ProductsSection />
      <CaseStudiesSection />
      <ArchitectureSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
