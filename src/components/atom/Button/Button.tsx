"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface props {
  label: string | React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  varient?: "contained" | "outlined";
}

const Button: React.FC<props> = ({
  label,
  onClick,
  className = "",
  disabled = false,
  varient = "contained",
}) => {
  const buttonStyle = disabled
    ? "text-black bg-gray-300 dark:text-gray-500 dark:bg-gray-800"
    : varient === "contained"
    ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 active:scale-95"
    : "border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:scale-95";
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl cursor-pointer",
        buttonStyle,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
