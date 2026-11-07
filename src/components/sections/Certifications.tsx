"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6">
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
              Certifications
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-base p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm font-semibold text-fg leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                <p className="text-xs text-subtle mt-0.5">{cert.date}</p>
                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-accent hover:underline"
                  >
                    <ExternalLink size={12} />
                    Verify on Credly
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
