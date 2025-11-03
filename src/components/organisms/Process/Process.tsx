import CardLayout from "@/components/atom/Card/CardLayout";
import GradientH1 from "@/components/atom/TextWithStyles/GradientH1";
import { Shapes } from "lucide-react";

const cardsData = [
  {
    title: "Discover & Analyze",
    subTitle:
      "We start by understanding your business, identifying bottlenecks, and mapping out opportunities for automation.",
    path: "/assets/landingpage/process/1.png",
  },
  {
    title: "Design & Build",
    subTitle:
      "Our team crafts a custom AI-driven solution tailored to your workflow, integrating seamlessly with your existing tools.",
    path: "/assets/landingpage/process/2.png",
  },
  {
    title: "Launch & Optimize",
    subTitle:
      "We deploy the automation, ensure a smooth rollout, and continuously refine it to maximize performance and ROI.",
    path: "/assets/landingpage/process/3.png",
  },
];

const Process = () => {
  return (
    <div className="flex items-center justify-center py-20" id="process">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex w-fit px-4 py-1 text-sm items-center gap-1 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 shadow">
          <Shapes size={14} />
          <span>Process</span>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl text-center">
            <GradientH1>How We Bring Automation to Life</GradientH1>
          </h1>
          <h2 className="text-center pt-4 text-gray-400 text-base font-medium">
            We understand your needs and build tailored AI solutions.
          </h2>
        </div>
        <div className="flex grow flex-wrap gap-4 lg:w-[1200px] pt-4 px-4 lg:px-0">
          {cardsData?.map((item, index) => (
            <CardLayout key={index} className="flex-[1_1_30%] min-w-[350px]">
              <div className="flex gap-2 flex-col justify-between h-full">
                <div className="h-fit rounded-lg overflow-hidden">
                  <img
                    src={item.path}
                    alt={item.title}
                    height={0}
                    width={0}
                    className="h-fit w-fit object-cover"
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
      </div>
    </div>
  );
};

export default Process;
