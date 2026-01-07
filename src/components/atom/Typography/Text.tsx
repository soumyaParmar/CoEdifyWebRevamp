import { cn } from "@/lib/utils";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "small";
}

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variants = {
    default: "text-gray-700",
    muted: "text-gray-400 font-medium",
    small: "text-sm text-gray-500",
  };

  return (
    <p className={cn("leading-relaxed", variants[variant], className)}>
      {children}
    </p>
  );
};

export default Text;
