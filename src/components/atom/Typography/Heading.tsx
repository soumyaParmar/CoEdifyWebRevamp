import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  variant?: "default" | "gradient" | "blue-gradient";
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = "",
  variant = "default",
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const variants = {
    default: "text-gray-900",
    gradient:
      "bg-linear-to-r from-gray-500 via-black to-gray-500 bg-clip-text text-transparent",
    "blue-gradient":
      "bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent",
  };

  const sizes = {
    1: "md:text-8xl text-5xl font-semibold md:font-normal",
    2: "md:text-5xl text-3xl font-semibold",
    3: "md:text-3xl text-2xl font-semibold",
    4: "text-xl font-semibold",
    5: "text-lg font-semibold",
    6: "text-base font-semibold",
  };

  return (
    <Tag className={cn(sizes[level], variants[variant], className)}>
      {children}
    </Tag>
  );
};

export default Heading;
