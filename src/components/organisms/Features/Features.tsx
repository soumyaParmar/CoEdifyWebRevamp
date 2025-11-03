import CardLayout from "@/components/atom/Card/CardLayout";
import GradientH1 from "@/components/atom/TextWithStyles/GradientH1";
import {
  Blocks,
  Bolt,
  Bot,
  Brain,
  ChartNoAxesCombined,
  Microchip,
  Unplug,
} from "lucide-react";

const cardsData = [
  {
    title: "AI-Powered Assessments",
    subTitle:
      "Experience unbiased, real-skill evaluations through advanced AI models that understand how you think — not just what you answer.",
    icon: Bot,
  },
  {
    title: "Smart Hiring Automation",
    subTitle:
      "Streamline your hiring process with intelligent tools that automatically shortlist, match, and evaluate candidates for every role.",
    icon: Microchip,
  },
  {
    title: "Talent Intelligence Engine",
    subTitle:
      "Gain a 360° view of candidate potential and performance using AI analytics that reveal strengths, learning patterns, and fit.",
    icon: Brain,
  },
  {
    title: "Seamless Skill Matching",
    subTitle:
      "Whether you’re hiring or applying, CoEdify’s AI ensures every opportunity aligns perfectly with skill, experience, and goals.",
    icon: Blocks,
  },
  {
    title: "Real-Time Insights & Analytics",
    subTitle:
      "Visualize performance data, hiring efficiency, and growth trends through real-time dashboards built for smarter decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Connected Ecosystem",
    subTitle:
      "From Devsko assessments to enterprise AI tools, CoEdify unifies everything into one intelligent platform for talent and teams.",
    icon: Unplug,
  },
];

const Features = () => {
  return (
    <div className="flex items-center justify-center pb-40" id="features">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex w-fit px-4 py-1 text-sm items-center gap-1 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 shadow">
          <Bolt size={14} />
          <span>Features</span>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl text-center">
            <GradientH1>Automate Faster, Work Smarter</GradientH1>
          </h1>
          <h2 className="text-center pt-4 text-gray-400 text-base font-medium">
            Powerful features that gives you the tools to scale with confidence.
          </h2>
        </div>
        <div className="flex grow flex-wrap gap-4 lg:w-[1200px] pt-4  px-4 lg:px-0">
          {cardsData?.map((item, index) => (
            <CardLayout
              key={index}
              className="flex-[1_1_30%] min-w-[350px] h-auto!"
            >
              <div className="flex gap-2 flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                  <span className="p-2 border shadow rounded-xl text-blue-400">
                    <item.icon />
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-medium">{item.title}</p>
                  <p className="text-sm font-medium text-gray-400">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </CardLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
