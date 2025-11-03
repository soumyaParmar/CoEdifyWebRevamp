import CardLayout from "@/components/atom/Card/CardLayout";
import GradientH1 from "@/components/atom/TextWithStyles/GradientH1";
import { Workflow } from "lucide-react";

const solution1 = [
  {
    title: "AI-Powered Skill Assessment",
    subTitle:
      "Leverage advanced AI models to evaluate real-world skills, not just answers — ensuring precise, bias-free candidate evaluation.",
    path: "/assets/landingpage/services/1.png",
  },

  {
    title: "End-to-End Talent Intelligence",
    subTitle:
      "From sourcing to shortlisting, our AI integrates with your workflow to identify, rank, and match top talent seamlessly.",
    path: "/assets/landingpage/services/2.png",
  },
];

const solution2 = [
  {
    title: "Custom AI Development",
    subTitle:
      "We build tailored AI solutions — from speech and vision models to analytics dashboards — aligned with your business goals.",
    path: "/assets/landingpage/services/3.png",
  },
  {
    title: "Automation & Process Optimization",
    subTitle:
      "Transform manual hiring and evaluation processes into efficient, data-driven systems that save time and increase accuracy.",
    path: "/assets/landingpage/services/4.png",
  },
  {
    title: "Data-Driven Insights & Analytics",
    subTitle:
      "Gain deep insights into performance trends, skill gaps, and hiring efficiency through visual, actionable analytics dashboards.",
    path: "/assets/landingpage/services/5.png",
  },
];

const Services = () => {
  return (
    <div className="flex items-center justify-center md:py-60 py-20" id="services">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex w-fit px-4 py-1 text-sm items-center gap-1 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 shadow">
          <Workflow size={14} />
          <span>Services</span>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl text-center">
            <GradientH1>AI Solutions Built for Efficiency</GradientH1>
          </h1>
          <h2 className="text-center pt-4 text-gray-400 text-base font-medium">
            We streamline operations so your team can move faster, with less
            effort.
          </h2>
        </div>
        <div className="flex grow flex-wrap gap-4 lg:w-[1200px] pt-4  px-4 lg:px-0">
          {solution1.map((item, index) => (
            <CardLayout key={index} className="flex-[1_1_49%] min-w-[350px]">
              <div className="flex gap-2 flex-col justify-between h-full">
                <div className="h-fit rounded-lg overflow-hidden object-center">
                  <img
                    src={item.path}
                    alt={item.title}
                    height={0}
                    width={0}
                    className="h-fit w-fit object-cover object-center"
                  />
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

        <div className="flex grow flex-wrap gap-4 lg:w-[1200px] pt-4  px-4 lg:px-0">
          {solution2.map((item, index) => (
            <CardLayout key={index} className="flex-[1_1_30%] min-w-[350px]">
              <div className="flex gap-2 flex-col justify-between h-full">
                <div className="h-fit rounded-lg overflow-hidden object-center">
                  <img
                    src={item.path}
                    alt={item.title}
                    height={0}
                    width={0}
                    className="h-fit w-fit object-cover "
                  />
                </div>
                <div>
                  <p className="text-xl font-medium">{item.title}</p>
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

export default Services;
