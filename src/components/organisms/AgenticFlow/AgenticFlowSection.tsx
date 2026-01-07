import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import { aiLifecycle } from "@/data/lifecycle";
import {
  ArrowRight,
  Database,
  Brain,
  Zap,
  Cloud,
  Activity,
  CheckCircle,
} from "lucide-react";

const stepIcons = [Database, Brain, Zap, Cloud, Activity];

const AgenticFlowSection = () => {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-slate-950/20" id="process">
      <Container>
        <SectionHeader
          title="From Data to Deployed AI Systems"
          subtitle="Our engineering-first approach ensures scalability, security, and continuous delivery of AI models."
          className="mb-16"
        />

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-linear-to-r from-transparent via-blue-200 dark:via-blue-900/50 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {aiLifecycle.map((item, index) => {
              const Icon = stepIcons[index] || Activity;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-blue-900/20 border border-gray-100 dark:border-white/5 flex items-center justify-center text-blue-500 dark:text-blue-400 relative group transition-transform duration-300 hover:scale-110">
                    <Icon size={32} />
                    {index < aiLifecycle.length - 1 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 items-center justify-center text-blue-200 dark:text-blue-900/50">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>
                  <div className="text-center space-y-1">
                    <Heading level={5} className="text-base">
                      {item.step}
                    </Heading>
                    <Text
                      variant="muted"
                      className="text-xs max-w-[150px] mx-auto"
                    >
                      {item.details}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
            <CheckCircle className="text-green-500" size={20} />
            <Text
              variant="small"
              className="font-bold text-gray-700 dark:text-gray-300"
            >
              Faster Execution
            </Text>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
            <CheckCircle className="text-green-500" size={20} />
            <Text
              variant="small"
              className="font-bold text-gray-700 dark:text-gray-300"
            >
              Lower Error Rates
            </Text>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
            <CheckCircle className="text-green-500" size={20} />
            <Text
              variant="small"
              className="font-bold text-gray-700 dark:text-gray-300"
            >
              Explainable Decisions
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AgenticFlowSection;
