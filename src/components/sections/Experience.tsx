"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
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
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-surface-2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
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

                <div className="card-base p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-fg">
                        {exp.title}
                      </h3>
                      <p className="text-accent text-sm font-medium flex items-center gap-2">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>
                    </div>
                    {exp.period && (
                      <span className="text-sm font-hand text-subtle bg-surface-2 px-3 py-1 rounded-full self-start whitespace-nowrap">
                        {exp.period}
                      </span>
                    )}
                  </div>

                  <p className="text-muted text-sm mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 flex-shrink-0">
                          ▹
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-line">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[13px] font-hand bg-surface-2 text-muted rounded-full border border-line"
                      >
                        {tech}
                      </span>
                    ))}
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
