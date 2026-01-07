import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  badgeIcon?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  badgeIcon,
  className = "",
  centered = true,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className
      )}
    >
      {badge && (
        <div className="flex w-fit px-4 py-1 text-sm items-center gap-1 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 shadow text-gray-700">
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}
      <div>
        <Heading level={2} variant="gradient">
          {title}
        </Heading>
        {subtitle && (
          <Text variant="muted" className="pt-4 text-base">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
