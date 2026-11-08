import Link from "next/link";
import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";
import { SocialIcon, linkTarget } from "@/components/ui/BrandIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading text-lg font-bold text-fg mb-2">
              {profile.name}
            </p>
            <p className="text-sm text-muted max-w-xs">
              {profile.title}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-fg mb-3 uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="text-sm font-semibold text-fg mb-3 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex gap-3">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  {...linkTarget(link.url)}
                  className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-2 transition-colors"
                  aria-label={link.name}
                >
                  <SocialIcon icon={link.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-subtle">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
