import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

const Marquee = ({ children, className, reverse = false }: MarqueeProps) => {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-12 animate-marquee",
          reverse && "direction-reverse"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-12 animate-marquee",
          reverse && "direction-reverse"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
