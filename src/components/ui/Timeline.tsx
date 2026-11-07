import React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface TimelineProps {
  children?: React.ReactNode;
  items?: TimelineItemProps[];
  className?: string;
}

/**
 * Individual entry for the Timeline component.
 */
export function TimelineItem({
  title,
  subtitle,
  period,
  children,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative pl-7 pb-8 last:pb-1 group", className)}>
      {/* Dark gray (#1E293B) vertical line connecting entries */}
      <div
        className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-surface-2 group-last:hidden"
        aria-hidden="true"
      />
      {/* Cyan small circle dot marker */}
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-bg shadow-[0_0_8px_rgba(247,164,64,0.5)]"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1">
        {period && (
          <span className="text-xs font-mono text-accent font-medium tracking-wide">
            {period}
          </span>
        )}
        <h3 className="text-base sm:text-lg font-heading font-semibold text-fg">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm font-medium text-muted">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-2 text-sm text-muted leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Vertical timeline container for education, experience, and milestones.
 */
export default function Timeline({ children, items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {items
        ? items.map((item, index) => <TimelineItem key={index} {...item} />)
        : children}
    </div>
  );
}

export { Timeline };
