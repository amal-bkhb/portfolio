"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-fg">
              Education
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-surface-2" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-1.5 w-[16px] h-[16px] rounded-full border-[3px] border-accent bg-bg z-10" />

                <div className="card-base p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-base font-semibold text-fg flex items-center gap-2">
                        <GraduationCap size={18} className="text-accent" />
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-muted mt-1">
                        {edu.degree} — {edu.field}
                      </p>
                      <p className="text-xs text-subtle mt-1 flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-subtle bg-surface-2 px-3 py-1 rounded-full self-start whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
