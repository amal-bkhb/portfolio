import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
        <ShieldAlert size={32} className="text-accent" />
      </div>

      <p className="font-mono text-sm text-accent mb-2">
        HTTP 404
      </p>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-fg mb-3">
        Page Not Found
      </h1>

      <p className="text-muted max-w-md mb-8">
        The resource you requested could not be located. It may have been moved,
        deleted, or the URL may be incorrect.
      </p>

      <div className="font-mono text-xs text-subtle bg-surface border border-line rounded-xl px-4 py-3 mb-8 max-w-sm">
        <span className="text-success">$</span>{" "}
        <span className="text-muted">curl -I</span>{" "}
        <span className="text-fg">/this-page</span>
        <br />
        <span className="text-red-400">404 Not Found</span>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-on-accent rounded-xl font-medium text-sm hover:brightness-110 transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}
