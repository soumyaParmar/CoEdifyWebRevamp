"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";

interface ComparisonVisualProps {
  leftTitle: string;
  leftSubtitle: string;
  leftTags: string[];
  rightTitle: string;
  rightSubtitle: string;
  rightTags: string[];
  primaryColorClass?: string;
  tagColors?: string[];
}

const ComparisonVisual = ({
  leftTitle,
  leftSubtitle,
  leftTags,
  rightTitle,
  rightSubtitle,
  rightTags,
  primaryColorClass = "text-blue-600",
  tagColors = ["bg-blue-600", "bg-slate-900", "bg-blue-500/80", "bg-slate-800"],
}: ComparisonVisualProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Left Side: The "Way" */}
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold flex items-center justify-center gap-2">
              {leftTitle.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1
                      ? primaryColorClass
                      : "text-gray-900 dark:text-white"
                  }
                >
                  {word}
                </span>
              ))}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{leftSubtitle}</p>
          </div>

          <div className="relative w-full aspect-square md:aspect-auto md:h-[450px] bg-blue-50/50 dark:bg-blue-900/10 rounded-[40px] border border-blue-100/50 dark:border-blue-500/10 flex items-center justify-center overflow-hidden p-8">
            {/* Decorative grid or subtle background */}
            <div
              className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative w-full h-full flex flex-wrap content-center justify-center gap-3">
              {leftTags.map((tag, i) => {
                // Predefined offsets for a "scattered" look that is consistent
                const rotations = [-2, 3, -1, 4, -3, 2, -4, 1, 5, -2];
                const yOffsets = [0, 5, -5, 10, -10, 8, -8, 12, -12, 4];

                return (
                  <div
                    key={i}
                    className={cn(
                      "px-6 py-3 rounded-full text-white font-bold text-sm md:text-base shadow-lg transition-transform hover:scale-110 cursor-default",
                      i % 2 === 0
                        ? "bg-blue-600"
                        : "bg-slate-900 dark:bg-slate-800",
                      i === 1 ? "bg-blue-500/80" : ""
                    )}
                    style={{
                      transform: `rotate(${
                        rotations[i % rotations.length]
                      }deg) translateY(${yOffsets[i % yOffsets.length]}px)`,
                    }}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Traditional */}
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {rightTitle}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{rightSubtitle}</p>
          </div>

          <div className="relative w-full aspect-square md:aspect-auto md:h-[450px] bg-gray-50/50 dark:bg-slate-900/20 rounded-[40px] border border-gray-100 dark:border-white/5 flex items-center justify-center overflow-hidden p-8">
            <div className="relative w-full h-full flex flex-wrap content-center justify-center gap-3">
              {rightTags.map((tag, i) => {
                const rotations = [2, -3, 1, -4, 3, -2, 4, -1];
                const xOffsets = [5, -5, 8, -8, 12, -12, 10, -10];

                return (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-400 dark:text-gray-500 font-medium text-sm md:text-base border border-gray-300/30 dark:border-white/5"
                    style={{
                      transform: `rotate(${
                        rotations[i % rotations.length]
                      }deg) translateX(${xOffsets[i % xOffsets.length]}px)`,
                    }}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonVisual;
