import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-[25px] leading-[32px] text-balance md:text-[40px] md:leading-[50px] text-slate-800 font-[800]",
        className
      )}
    >
      {children}
    </h2>
  );
};
