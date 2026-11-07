"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-fg">
              About Me
            </h2>
          </div>

          <div className="card-base p-6 sm:p-8">
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              {profile.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
