"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Download, Network } from "lucide-react";
import {
  SiBurpsuite,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiOpenjdk,
  SiPython,
  SiSpringboot,
  SiWireshark,
} from "@icons-pack/react-simple-icons";
import { SocialIcon } from "@/components/ui/BrandIcons";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

const featuredProject = projects.find((p) => p.featured);

// "default" uses the brand color; near-black brands follow the text color instead.
const mostUsed = [
  { name: "Kubernetes", Icon: SiKubernetes, color: "default" },
  { name: "Docker", Icon: SiDocker, color: "default" },
  { name: "Python", Icon: SiPython, color: "default" },
  { name: "Burp Suite", Icon: SiBurpsuite, color: "default" },
];

const techStack = [
  { name: "Docker", Icon: SiDocker, color: "default" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "default" },
  { name: "Python", Icon: SiPython, color: "default" },
  { name: "Java", Icon: SiOpenjdk, color: "currentColor" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "default" },
  { name: "Linux", Icon: SiLinux, color: "default" },
  { name: "Jenkins", Icon: SiJenkins, color: "default" },
  { name: "Git", Icon: SiGit, color: "default" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "default" },
  { name: "Grafana", Icon: SiGrafana, color: "default" },
  { name: "Burp Suite", Icon: SiBurpsuite, color: "default" },
  { name: "Wireshark", Icon: SiWireshark, color: "default" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const noMotion: Variants = { hidden: {}, visible: {} };

/** Hand-drawn note with a curved arrow, like a margin annotation. */
function Annotation({
  text,
  direction,
  className = "",
}: {
  text: string;
  direction: "down-left" | "left";
  className?: string;
}) {
  return (
    <div
      className={`flex items-start gap-1 font-hand text-sm text-accent ${className}`}
      aria-hidden="true"
    >
      {direction === "down-left" ? (
        <>
          <svg width="44" height="34" viewBox="0 0 44 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted mt-1">
            <path d="M42 6C26 2 12 8 8 30" />
            <path d="M3 24l5 7 6-5" />
          </svg>
          <span className="-mt-1">{text}</span>
        </>
      ) : (
        <>
          <svg width="56" height="30" viewBox="0 0 56 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted mt-4 order-first">
            <path d="M52 2C50 18 32 26 6 24" />
            <path d="M12 18l-6 6 7 4" />
          </svg>
          <span>{text}</span>
        </>
      )}
    </div>
  );
}

function RoundArrow({ href, label }: { href: string; label: string }) {
  const className =
    "w-8 h-8 rounded-full btn-warm flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105";
  return href.startsWith("/projects/") ? (
    <Link href={href} prefetch={false} className={className} aria-label={label}>
      <ArrowUpRight size={16} />
    </Link>
  ) : (
    <a href={href} className={className} aria-label={label}>
      <ArrowUpRight size={16} />
    </a>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const container = reduced ? noMotion : containerVariants;
  const item = reduced ? noMotion : itemVariants;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Intro */}
        <motion.div
          variants={item}
          className="md:col-span-2 lg:col-span-3 lg:row-start-1 lg:pl-12 py-4 self-center"
        >
          <p className="text-sm text-fg/90">{profile.title}</p>
          <h1 className="font-heading font-bold text-accent text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-3 tracking-tight">
            Securing Systems
            <br />
            For The Future.
          </h1>
          <div className="flex items-center gap-2 mt-5">
            <span className="status-dot flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted">{profile.status}</span>
          </div>
        </motion.div>

        {/* Contacts */}
        <motion.div
          variants={item}
          className="card-base p-5 lg:col-start-4 lg:row-start-1"
        >
          <h2 className="card-label">Contacts</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                {...(link.icon === "Mail"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="w-11 h-11 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-fg hover:text-accent hover:border-accent/40 transition-colors"
                aria-label={link.name}
                title={link.name}
              >
                <SocialIcon icon={link.icon} size={20} />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-warm mt-4 w-full flex items-center justify-center rounded-xl py-2.5 font-heading font-semibold text-base"
          >
            Direct
          </a>
          {profile.cvPath && (
            <a
              href={profile.cvPath}
              download
              className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl py-2 text-sm text-muted border border-line hover:text-accent hover:border-accent/40 transition-colors"
            >
              <Download size={14} />
              Download CV
            </a>
          )}
        </motion.div>

        {/* About */}
        <motion.div
          variants={item}
          className="card-base p-5 flex flex-col lg:col-start-1 lg:row-start-2 lg:row-span-2"
        >
          <h2 className="card-label">About me</h2>
          <p className="font-hand text-[15px] leading-snug text-fg mt-3 flex-1">
            I&apos;m <span className="text-accent">Amal</span>, a final-year
            engineering student at ENSIAS passionate about{" "}
            <span className="text-accent">
              cloud security, DevSecOps and application security
            </span>
            . {profile.taglines[0]}
          </p>
          <div className="flex justify-end mt-3">
            <RoundArrow href="#about" label="Read more about me" />
          </div>
        </motion.div>

        {/* Featured project */}
        {featuredProject && (
          <motion.div
            variants={item}
            className="card-base overflow-hidden flex flex-col min-h-64 lg:col-start-2 lg:row-start-2 lg:row-span-2"
          >
            <div className="relative flex-1 min-h-36 bg-gradient-to-br from-accent/30 via-surface-2 to-bg">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
                aria-hidden="true"
              />
              <Network
                size={72}
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-accent/70"
                aria-hidden="true"
              />
            </div>
            <div className="p-4 flex items-end gap-3 bg-gradient-to-t from-bg/80 to-transparent">
              <div className="flex-1 min-w-0">
                <h2 className="font-heading text-lg font-semibold text-fg uppercase tracking-wide">
                  Project
                </h2>
                <p className="font-hand text-xs text-muted leading-tight mt-1 line-clamp-2">
                  {featuredProject.title}
                </p>
              </div>
              <RoundArrow
                href={`/projects/${featuredProject.slug}`}
                label={`View project: ${featuredProject.title}`}
              />
            </div>
          </motion.div>
        )}

        {/* Most used */}
        <motion.div
          variants={item}
          className="flex flex-col items-center lg:col-start-3 lg:row-start-2 self-end"
        >
          <Annotation text="Most Used" direction="down-left" className="self-end mr-2" />
          <div className="card-base px-5 py-2.5 w-full flex items-center justify-center gap-5 mt-1">
            {mostUsed.map(({ name, Icon, color }) => (
              <Icon key={name} title={name} size={22} color={color} />
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          variants={item}
          className="card-base p-5 lg:col-start-3 lg:row-start-3"
        >
          <h2 className="card-label">Tech stack</h2>
          <ul className="grid grid-cols-4 gap-x-3 gap-y-4 mt-4 text-fg">
            {techStack.map(({ name, Icon, color }) => (
              <li key={name} className="flex justify-center">
                <Icon
                  title={name}
                  size={26}
                  color={color}
                  className="transition-transform hover:scale-110"
                />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={item}
          className="card-base p-5 flex flex-col lg:col-start-4 lg:row-start-2 lg:row-span-2 self-stretch"
        >
          <h2 className="card-label">Experience</h2>
          <ol className="mt-4 space-y-4 flex-1 border-l border-line-strong pl-4">
            {experiences.map((exp) => (
              <li key={exp.company} className="relative">
                <span
                  className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-fg leading-snug">
                  {exp.company}
                </p>
                <p className="text-xs text-muted mt-0.5">{exp.title}</p>
                {exp.period && (
                  <p className="text-[11px] font-mono text-subtle mt-1">
                    {exp.period}
                  </p>
                )}
              </li>
            ))}
          </ol>
          <div className="flex justify-end mt-3">
            <RoundArrow href="#experience" label="See my experience" />
          </div>
        </motion.div>

        {/* Currently learning */}
        <motion.div
          variants={item}
          className="card-base px-4 py-2.5 text-center lg:col-start-1 lg:row-start-4"
        >
          <p className="font-hand text-sm text-fg">
            Learning{" "}
            <span className="text-accent">{profile.currentlyLearning}</span>
          </p>
        </motion.div>
        <motion.div
          variants={item}
          className="hidden lg:block lg:col-start-2 lg:row-start-4"
        >
          <Annotation text="Currently Learning" direction="left" className="-mt-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
