"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("p-2 w-10 h-10", className)} />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative flex items-center w-14 h-8 rounded-full p-1 transition-all duration-500 cursor-pointer",
        "bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-white/10 shadow-inner",
        className
      )}
      aria-label="Toggle theme"
    >
      {/* Target sliding background icon */}
      <div
        className={cn(
          "absolute w-6 h-6 rounded-full bg-white dark:bg-blue-600 shadow-md transform transition-all duration-500 flex items-center justify-center",
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        )}
      >
        {theme === "dark" ? (
          <Moon className="text-white" size={14} />
        ) : (
          <Sun className="text-amber-500" size={14} />
        )}
      </div>

      {/* Static icons for context */}
      <div className="flex justify-between w-full px-1.5 z-0 opacity-40">
        <Sun size={12} className="text-gray-600 dark:text-gray-400" />
        <Moon size={12} className="text-gray-600 dark:text-gray-400" />
      </div>

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
