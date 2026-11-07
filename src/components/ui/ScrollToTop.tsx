"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

/**
 * Fixed floating button that appears after scrolling past a threshold (default 600px)
 * and smoothly scrolls back to the top of the page.
 */
export default function ScrollToTop({
  className,
  threshold = 600,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // Check initial position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          initial={{
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 0.8,
            y: prefersReducedMotion ? 0 : 8,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 0.8,
            y: prefersReducedMotion ? 0 : 8,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className={cn(
            "fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full",
            "bg-surface border border-line-strong text-fg shadow-lg",
            "hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(247,164,64,0.25)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            "transition-colors duration-200 cursor-pointer",
            className
          )}
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export { ScrollToTop };
