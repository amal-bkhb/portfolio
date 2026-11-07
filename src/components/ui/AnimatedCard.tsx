"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

/**
 * Animated wrapper component that fades and slides up content as it scrolls into view.
 * Computes stagger delay based on `index * 0.1` and respects user's prefers-reduced-motion setting.
 */
export default function AnimatedCard({
  children,
  className,
  delay,
  index,
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, render static container with no animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const computedDelay =
    typeof delay === "number"
      ? delay
      : typeof index === "number"
      ? index * 0.1
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: computedDelay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { AnimatedCard, useReducedMotion };
