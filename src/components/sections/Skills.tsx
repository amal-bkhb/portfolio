"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Cloud,
  Code,
  Network,
  BarChart3,
  Brain,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  Wrench: <Wrench size={20} />,
  Cloud: <Cloud size={20} />,
  Code: <Code size={20} />,
  Network: <Network size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Brain: <Brain size={20} />,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-fg">
              Skills
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-base p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  {iconMap[category.icon] || <Code size={20} />}
                </div>
                <h3 className="font-heading text-sm font-semibold text-fg">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-sm font-hand bg-surface-2 text-muted rounded-lg border border-line hover:text-fg hover:border-line-strong transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
