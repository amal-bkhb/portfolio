"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSection, setVisibleSection] = useState("");
  // Sections only exist on the home page, so nothing is active elsewhere.
  const activeSection = pathname === "/" ? visibleSection : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-bg/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-heading text-lg font-bold text-accent hover:opacity-80 transition-opacity"
          aria-label="Amal Bakhouya, home"
        >
          AmalBakhouya.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5 ml-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={activeSection === item.href ? "true" : undefined}
                className={`px-2.5 py-2 rounded-lg text-[13px] transition-colors ${
                  activeSection === item.href
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-fg hover:bg-surface-2/50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 ml-auto lg:ml-0">
          <ThemeToggle />

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-muted hover:text-fg transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-b border-line"
          >
            <ul className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleClick}
                    className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                      activeSection === item.href
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-fg hover:bg-surface-2/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
