import Button from "@/components/atom/Button/Button";
import WaveBackground from "../../molecules/WaveBackground/WaveBackground";
import { ChevronDown } from "lucide-react";

const HeroPage = () => {
  return (
    <WaveBackground>
      <div className="p-4  text-black pt-[180px] md:pt-[250px] h-full flex flex-col items-center text-center relative">
        <div>
          <h1 className="md:text-8xl text-5xl font-semibold md:font-normal">
            <span className="bg-linear-to-r from-gray-500 via-black to-gray-500 bg-clip-text text-transparent">
              Powering the Future of Work
            </span>{" "}
            <br />{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              For Talent and Teams
            </span>
          </h1>
          <h2 className="mt-9 text-gray-400 font-medium">
            Assess, hire, and grow with AI tools built to elevate every step of
            your journey.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-12">
          <a href="https://devsko.com/">
            <Button
              label="Try DevSko Now"
              onClick={() => {}}
              className="w-[300px]"
            />
          </a>
          <a
            href={"https://calendar.app.google/PDsuNkzSCVGXvhio8"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              label="Book A Demo"
              onClick={() => {}}
              varient="outlined"
              className="w-[300px]"
            />
          </a>
        </div>
        <span className=" pt-40 text-black flex flex-col items-center animate-bounce">
          <ChevronDown size={50} className="text-blue-500" />
          <ChevronDown size={35} className="-mt-6 text-blue-300" />
        </span>
      </div>
    </WaveBackground>
  );
};

export default HeroPage;
