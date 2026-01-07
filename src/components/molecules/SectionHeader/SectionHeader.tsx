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
        <div className="flex w-fit px-4 py-1.5 text-sm font-medium items-center gap-2 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-sm border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300 transition-all duration-500">
          {badgeIcon && <span className="text-blue-500">{badgeIcon}</span>}
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
