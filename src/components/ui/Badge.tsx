import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "accent" | "success";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-surface-2 border-line text-muted hover:border-line-strong hover:text-fg",
  accent:
    "bg-surface-2 border-accent/40 text-accent hover:border-accent/80 hover:brightness-110",
  success:
    "bg-surface-2 border-success/40 text-success hover:border-success/80 hover:brightness-110",
};

/**
 * Tech badge component displaying tags, tools, and statuses in a pill shape
 * with JetBrains Mono font and variant-based color schemes.
 */
export default function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full border transition-all duration-200 hover:brightness-110 select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
