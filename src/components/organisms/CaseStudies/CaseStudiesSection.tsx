import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import CaseStudyCard from "@/components/molecules/CaseStudyCard/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { FileText } from "lucide-react";
import React from "react";

const CaseStudiesSection = () => {
  return (
    <section className="py-24" id="case-studies">
      <Container>
        <SectionHeader
          badge="Success Stories"
          badgeIcon={<FileText size={14} />}
          title="Case Studies"
          subtitle="Realistic, outcome-focused stories of how we've helped companies transform their workflows."
          className="mb-16"
        />

        <div className="flex flex-wrap gap-8 justify-center">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesSection;
