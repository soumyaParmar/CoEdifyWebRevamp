"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Text from "@/components/atom/Typography/Text";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface MegaMenuCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  logoUrl?: string;
  logoBg?: string;
  onClick?: () => void;
  className?: string;
}

const MegaMenuCard = ({
  title,
  description,
  href,
  icon: Icon,
  logoUrl,
  logoBg,
  onClick,
  className,
}: MegaMenuCardProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group block w-[280px] h-[100px] p-4 rounded-xl transition-all duration-300",
        "bg-white dark:bg-slate-900",
        "hover:bg-blue-50/50 dark:hover:bg-blue-900/10",
        "border border-gray-100 dark:border-white/5",
        "hover:border-blue-200 dark:hover:border-blue-800",
        "shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className="flex gap-4 items-start h-full">
        <div
          className={cn(
            "shrink-0 mt-1 w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden transition-colors",
            logoUrl
              ? cn(
                  "bg-transparent border border-gray-100 dark:border-white/5",
                  logoBg
                )
              : "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white"
          )}
        >
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={title}
              height={100}
              width={100}
              className="w-full h-full object-contain"
            />
          ) : (
            <Icon size={20} />
          )}
        </div>
        <div className="space-y-1 overflow-hidden">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {title}
          </h4>
          <Text
            variant="small"
            className="text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed"
          >
            {description}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default MegaMenuCard;
