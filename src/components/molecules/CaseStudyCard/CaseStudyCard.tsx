import CardLayout from "@/components/atom/Card/CardLayout";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import { CaseStudy } from "@/types";
import React from "react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <CardLayout className="h-auto! min-w-[350px] flex-1 p-6!">
      <div className="space-y-6 text-start">
        <div className="flex justify-between items-start">
          <Heading level={4} variant="gradient">
            {caseStudy.title}
          </Heading>
          <div className="flex gap-2">
            {caseStudy.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 text-[10px] rounded-full uppercase tracking-wider font-bold border border-gray-200 dark:border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-blue-500 font-bold text-xs uppercase">
              Problem
            </span>
            <Text className="mt-1 font-medium">{caseStudy.problem}</Text>
          </div>
          <div>
            <span className="text-indigo-500 font-bold text-xs uppercase">
              Approach
            </span>
            <Text className="mt-1 font-medium">{caseStudy.solution}</Text>
          </div>
          {caseStudy.aiStack && (
            <div>
              <span className="text-purple-500 font-bold text-xs uppercase">
                AI Stack
              </span>
              <Text className="mt-1 font-medium text-sm italic">
                {caseStudy.aiStack}
              </Text>
            </div>
          )}
          <div className="pt-2 border-t border-gray-100 dark:border-white/5">
            <span className="text-green-500 font-bold text-xs uppercase">
              Outcome
            </span>
            <Text className="mt-1 font-semibold text-gray-900 dark:text-white">
              {caseStudy.outcome}
            </Text>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default CaseStudyCard;
