import CardLayout from "@/components/atom/Card/CardLayout";
import GradientH1 from "@/components/atom/TextWithStyles/GradientH1";
import { cn } from "@/lib/utils";
import { Check, Gem, X } from "lucide-react";

const cardsData = [
  {
    title: "DevSko",
    subTitle: [
      "AI-driven adaptive assessments that adjust difficulty based on candidate performance.",
      "Real-time video, audio, and code tracking for complete context-based evaluation.",
      "Built-in plagiarism, proctoring, and behavioral analytics powered by machine learning.",
      "Seamless integration with HR systems and ATS platforms for instant candidate sync.",
      "Detailed skill-gap and personality insights to make hiring decisions smarter.",
      "End-to-end customizable tests for interviews, hackathons, and upskilling programs.",
    ],
  },
  {
    title: "Other",
    subTitle: [
      "Static tests that don’t adapt to candidate performance or behavior.",
      "Limited context — only code evaluation without real-time communication tracking.",
      "Basic cheating prevention with little or no AI-backed proctoring.",
      "Manual data handling with weak or no integration to ATS/HR tools.",
      "Surface-level scoring that doesn’t reveal real skill or personality depth.",
      "Rigid, one-size-fits-all test templates with minimal customization options.",
    ],
  },
];

const Benifits = () => {
  return (
    <div className="flex items-center justify-center py-20" id="benifits">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex w-fit px-4 py-1 text-sm items-center gap-1 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 shadow">
          <Gem size={14} />
          <span>Benefits</span>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl text-center">
            <GradientH1>Why Choose CoEdify</GradientH1>
          </h1>
          <h2 className="text-center pt-4 text-gray-400 text-base font-medium">
            We understand your needs and build tailored AI solutions.
          </h2>
        </div>
        <div className="flex grow flex-wrap gap-4 lg:w-[1200px] pt-4  px-4 lg:px-0">
          {cardsData?.map((item, index) => (
            <CardLayout key={index} className="flex-[1_1_49%] min-w-[350px] max-[768px]:h-auto ">
              <div className="flex gap-2 flex-col justify-between h-full">
                <div className="h-full flex flex-col">
                  <p
                    className={cn(
                      "text-2xl font-medium pb-2",
                      index === 0 ? "text-blue-500" : ""
                    )}
                  >
                    {item.title}
                  </p>
                  <div className="h-auto! flex-1 p-3 shadow rounded-lg bg-gray-100">
                    <ul className="text-sm text-gray-500 flex flex-col gap-2">
                      {item.subTitle.map((Inneritem, Innerindex) => (
                        <li
                          key={Innerindex}
                          className="flex items-start gap-1"
                        >
                          {index === 0 ? (
                            <span className="border border-blue-400 p-0.5 rounded-full mt-1 text-blue-500">
                              <Check size={8} />
                            </span>
                          ) : (
                            <span className="border border-gray-500 text-gray-500 p-0.5 rounded-full mt-1">
                              <X size={8} />
                            </span>
                          )}{" "}
                          <span>{Inneritem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benifits;
