import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const GradientH1 = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-gray-500 via-black to-gray-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientH1;
