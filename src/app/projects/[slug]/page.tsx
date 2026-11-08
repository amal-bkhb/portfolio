import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, FileText, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, getProjectBySlug } from "@/data/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-muted mb-8"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-accent transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/#projects"
            className="hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <ChevronRight size={14} />
          <span className="text-fg truncate">{project.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.inProgress && (
              <span className="px-3 py-1 text-sm font-hand text-success bg-success/10 rounded-full border border-success/30">
                In progress
              </span>
            )}
            {project.reportAvailable && (
              <span className="px-3 py-1 text-sm font-hand text-muted bg-surface-2 rounded-full border border-line flex items-center gap-1">
                <FileText size={12} />
                Report available
              </span>
            )}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-fg mb-4">
            {project.title}
          </h1>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-line-strong text-fg rounded-xl text-sm hover:border-accent transition-colors"
              >
                <GithubIcon size={16} />
                View on GitHub
              </a>
            )}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card-base p-6 mb-8">
          <h2 className="font-heading text-lg font-semibold text-fg mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-hand bg-surface-2 text-muted rounded-lg border border-line hover:text-fg hover:border-line-strong transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8">
          {/* Context */}
          {project.context && (
            <div className="card-base p-6">
              <h2 className="font-heading text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Context
              </h2>
              <p className="text-muted leading-relaxed">{project.context}</p>
            </div>
          )}

          {/* Objectives */}
          {project.objectives.length > 0 && (
            <div className="card-base p-6">
              <h2 className="font-heading text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Objectives
              </h2>
              <ul className="space-y-2">
                {project.objectives.map((obj, i) => (
                  <li
                    key={i}
                    className="text-muted flex items-start gap-2"
                  >
                    <span className="text-accent mt-1 flex-shrink-0">▹</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div className="card-base p-6">
              <h2 className="font-heading text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Architecture
              </h2>
              <p className="text-muted leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* What I Built */}
          {project.whatIBuilt.length > 0 && (
            <div className="card-base p-6">
              <h2 className="font-heading text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                What I Built
              </h2>
              <ul className="space-y-2">
                {project.whatIBuilt.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted flex items-start gap-2"
                  >
                    <span className="text-accent mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.length > 0 && (
              <div className="card-base p-6">
                <h2 className="font-heading text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-success rounded-full" />
                  Results
                </h2>
                <ul className="space-y-2">
                  {project.results.map((result, i) => (
                    <li
                      key={i}
                      className="text-muted flex items-start gap-2 text-sm"
                    >
                      <span className="text-success mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.learnings.length > 0 && (
              <div className="card-base p-6">
                <h2 className="font-heading text-lg font-semibold text-fg mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent rounded-full" />
                  What I Learned
                </h2>
                <ul className="space-y-2">
                  {project.learnings.map((learning, i) => (
                    <li
                      key={i}
                      className="text-muted flex items-start gap-2 text-sm"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">
                        →
                      </span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-line">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
