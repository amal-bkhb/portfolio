"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  FileLock2,
  FileText,
  Network,
  Shield,
  Smartphone,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);

const projectIcons: Record<string, React.ReactNode> = {
  "federated-ids-kubernetes": <Network size={22} />,
  "secure-wallet": <Smartphone size={22} />,
  "owasp-assessment": <Bug size={22} />,
  "xml-security": <FileLock2 size={22} />,
};

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
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
              Featured Projects
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-base p-6 flex flex-col group"
            >
              <div
                className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                {projectIcons[project.slug] ?? <Shield size={22} />}
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-heading text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-2 flex-1">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[13px] font-hand bg-surface-2 text-muted rounded-full border border-line"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="px-2 py-0.5 text-[13px] font-hand text-muted">
                      +{project.techStack.length - 6}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-line">
                  <Link
                    href={`/projects/${project.slug}`}
                    // Static export writes these prefetch files where the client doesn't look (404).
                    prefetch={false}
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline font-medium"
                    aria-label={`View details: ${project.title}`}
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                  {project.reportAvailable && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <FileText size={12} />
                      Report available
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
