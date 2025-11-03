import Button from "@/components/atom/Button/Button";
import CardLayout from "@/components/atom/Card/CardLayout";
import GradientH1 from "@/components/atom/TextWithStyles/GradientH1";
import { ArrowRight, Calendar, Rocket } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section className=" w-full flex justify-center py-20 px-6 overflow-hidden">
      <div className=" w-[1200px]!">
        <CardLayout className="h-auto!">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-5xl font-semibold">
              <GradientH1>Ready to Take the</GradientH1>
              <span className="block mt-2 bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Next Step?
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-lg max-w-2xl mx-auto mb-12">
              Experience the power of innovative solutions. Join hundreds of
              companies already transforming their workflow with Devsko.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={"https://calendar.app.google/PDsuNkzSCVGXvhio8"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label={
                    <span className="relative z-10 flex items-center space-x-2">
                      <Calendar size={20} />
                      <span>Book a Demo</span>
                      <ArrowRight
                        size={20}
                        className={`transition-transform duration-300`}
                      />
                    </span>
                  }
                  onClick={() => {}}
                  varient="outlined"
                />
              </a>

              <a href="https://devsko.com/">
                <Button
                  label={
                    <span className="flex items-center space-x-2">
                      <Rocket
                        size={20}
                        className={`transition-transform duration-300`}
                      />
                      <span>Try Devsko Now</span>
                    </span>
                  }
                  onClick={() => {}}
                />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </CardLayout>
      </div>
    </section>
  );
};

export default CTASection;
