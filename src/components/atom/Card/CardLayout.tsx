import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

const CardLayout = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grow border-4 border-gray-100 dark:border-gray-500 w-full  rounded-3xl p-3 bg-linear-to-b from-gray-100/65 via-white to-white dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-950 transition-all duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardLayout;
