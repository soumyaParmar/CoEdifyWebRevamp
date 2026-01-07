import Button from "@/components/atom/Button/Button";
import { CTA } from "@/types";
import { cn } from "@/lib/utils";
import React from "react";

interface CTAGroupProps {
  ctas: CTA[];
  className?: string;
  centered?: boolean;
}

const CTAGroup: React.FC<CTAGroupProps> = ({
  ctas,
  className = "",
  centered = true,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-5",
        centered && "justify-center items-center",
        className
      )}
    >
      {ctas.map((cta, index) => (
        <a
          key={index}
          href={cta.href}
          target={cta.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          <Button
            label={cta.label}
            onClick={() => {}}
            varient={cta.variant || (index === 0 ? "contained" : "outlined")}
            className="w-[280px]"
          />
        </a>
      ))}
    </div>
  );
};

export default CTAGroup;
