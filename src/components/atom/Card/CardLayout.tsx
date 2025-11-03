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
        "grow border-4 border-gray-100 w-full h-[300px] rounded-xl p-3 bg-linear-to-b from-gray-100/65 via-white to-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardLayout;
