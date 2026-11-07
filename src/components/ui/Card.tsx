"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType | string;
}

/**
 * Reusable Bento Card component with dark styling, subtle cyan border glow,
 * elevation on hover, and prefers-reduced-motion support.
 */
export default function Card({
  children,
  className,
  hover = true,
  as = "div",
  ...props
}: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = hover && !prefersReducedMotion;

  // Resolve dynamic motion component based on `as` prop
  const MotionComponent = (
    typeof as === "string" && (motion as unknown as Record<string, React.ElementType>)[as]
      ? (motion as unknown as Record<string, React.ElementType>)[as]
      : typeof as === "function"
      ? motion.create(as)
      : motion.div
  ) as React.ElementType;

  return (
    <MotionComponent
      whileHover={
        shouldAnimate
          ? {
              y: -2,
              borderColor: "rgba(247, 164, 64, 0.4)",
              boxShadow: "0 10px 30px -10px rgba(247, 164, 64, 0.15)",
            }
          : undefined
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "bg-surface border border-line rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export { Card };
