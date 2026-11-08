"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/projects";

const otherProjects = projects.filter((p) => !p.featured);

export function OtherProjects() {
  if (otherProjects.length === 0) return null;

  return (
    <section aria-labelledby="other-projects" className="pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3
            id="other-projects"
            className="font-heading text-xl font-semibold text-fg mb-6"
          >
            Other Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-base p-5 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-heading text-sm font-semibold text-fg group-hover:text-accent transition-colors flex-1 pr-2">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.inProgress && (
                    <span className="px-2 py-0.5 text-[13px] font-hand text-success bg-success/10 rounded-full border border-success/30">
                      In progress
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted flex-1 mb-3">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[13px] font-hand bg-surface-2 text-muted rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-1 py-0.5 text-[13px] font-hand text-muted">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                // Static export writes these prefetch files where the client doesn't look (404).
                prefetch={false}
                className="inline-flex items-center gap-1 mt-4 text-xs text-accent hover:underline font-medium self-start"
                aria-label={`View details: ${project.title}`}
              >
                View Details
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
