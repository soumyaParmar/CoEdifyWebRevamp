import CardLayout from "@/components/atom/Card/CardLayout";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  subPoints?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = "",
  subPoints,
}) => {
  return (
    <CardLayout
      className={cn("flex-[1_1_30%] min-w-[350px] h-auto!", className)}
    >
      <div className="flex gap-4 flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          {icon && (
            <span className="p-2 border shadow rounded-xl text-blue-400">
              {icon}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <Heading level={4}>{title}</Heading>
          <Text variant="muted" className="text-sm">
            {description}
          </Text>
          {subPoints && subPoints.length > 0 && (
            <div className="pt-2 space-y-1">
              {subPoints.map((point, idx) => (
                <Text
                  key={idx}
                  variant="small"
                  className="flex items-start gap-2 italic"
                >
                  <span>•</span> {point}
                </Text>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardLayout>
  );
};

export default FeatureCard;
