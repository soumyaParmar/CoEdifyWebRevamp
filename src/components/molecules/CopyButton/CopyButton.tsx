"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code!", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "absolute top-2 left-0 z-10 py-0.5 transition-all duration-300 rounded-full px-4",
        "bg-slate-800/50 hover:bg-slate-700/80 text-slate-400 hover:text-white border border-slate-700/50",
        copied && "bg-green-500/20 border-green-500/50 text-green-400",
        className
      )}
      title="Copy Code"
    >
      {copied ? (
        <div className="flex items-center ">
          <Check size={16} /> copied
        </div>
      ) : (
        <div className="flex items-center">
          <Copy size={16} /> copy
        </div>
      )}
    </button>
  );
};

export default CopyButton;
