"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface props {
  label: string | React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  varient?: "contained" | "outlined";
  link?: string;
  showArrow?: boolean;
}

const Button: React.FC<props> = ({
  label,
  onClick,
  className = "",
  disabled = false,
  varient = "contained",
  link = "",
  showArrow = true,
}) => {
  const isPrimary = varient === "contained";

  const buttonStyle = disabled
    ? "text-black bg-gray-300 dark:text-gray-500 dark:bg-gray-800"
    : varient === "contained"
    ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-300"
    : "border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:scale-95 transition-all duration-300";

  const renderContent = () => (
    <div className="flex items-center justify-between gap-4">
      <span className="font-bold">{label}</span>
      {isPrimary && showArrow && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <ArrowRight size={18} />
        </div>
      )}
    </div>
  );

  const finalClassName = cn(
    "px-6 py-2 cursor-pointer group transition-all min-h-[48px] rounded-xl",
    isPrimary && showArrow && "pr-2",
    buttonStyle,
    className
  );

  return (
    <>
      {link ? (
        <Link href={link}>
          <button
            className={finalClassName}
            onClick={onClick}
            disabled={disabled}
          >
            {renderContent()}
          </button>
        </Link>
      ) : (
        <button
          className={finalClassName}
          onClick={onClick}
          disabled={disabled}
        >
          {renderContent()}
        </button>
      )}
    </>
  );
};

export default Button;
