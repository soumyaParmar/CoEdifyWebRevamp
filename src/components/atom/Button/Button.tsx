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
    ? "text-black bg-gray-300"
    : varient === "contained"
    ? "bg-blue-500 text-white"
    : "border border-blue-500 text-blue-500";
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
