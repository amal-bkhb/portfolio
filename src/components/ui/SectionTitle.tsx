import React from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

/**
 * Standard section header component with Space Grotesk font,
 * cyan accent vertical pill, and secondary color subtitle.
 */
export default function SectionTitle({
  title,
  subtitle,
  id,
  className,
}: SectionTitleProps) {
  return (
    <header id={id} className={cn("mb-8 scroll-mt-24", className)}>
      <div className="flex items-center gap-3">
        {/* 4px wide, 24px tall rounded cyan accent line */}
        <span
          className="w-1 h-6 rounded-full bg-accent shrink-0"
          aria-hidden="true"
        />
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-fg tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 ml-4 text-sm sm:text-base text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}

export { SectionTitle };
