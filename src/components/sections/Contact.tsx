"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SocialIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

type FormStatus = "idle" | "submitting" | "success" | "error";

const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";
const hasFormService = accessKey !== "" && accessKey !== "YOUR_ACCESS_KEY_HERE";
const hasEmail = profile.email !== "";

const inputClasses =
  "w-full px-4 py-2.5 bg-surface-2 border border-line rounded-xl text-sm text-fg placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // A filled honeypot means a bot: pretend it worked and send nothing.
    if (botcheck) {
      setStatus("success");
      resetFields();
      return;
    }

    if (!hasFormService) {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio Contact from ${name}`,
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        resetFields();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-fg">
              Get In Touch
            </h2>
          </div>
          <p className="text-muted mb-10 max-w-lg">
            Interested in working together or have a question? Reach out and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={
              hasFormService || hasEmail
                ? "md:col-span-2 space-y-4"
                : "md:col-span-5 space-y-4"
            }
          >
            <div className="card-base p-5">
              <h3 className="text-sm font-semibold text-fg mb-4 uppercase tracking-wider">
                Contact Info
              </h3>
              <div className="space-y-3">
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    {...(link.icon === "Mail"
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <SocialIcon icon={link.icon} size={16} />
                    <span className="truncate">
                      {link.icon === "Mail" ? profile.email : link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-base p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="status-dot flex-shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium text-fg">
                  {profile.status}
                </p>
              </div>
              <p className="text-xs text-muted">
                Open to PFE internship opportunities (4–6 months)
              </p>
            </div>
          </motion.div>

          {/* Contact Form: needs a form service key or, as a fallback, an email address */}
          {(hasFormService || hasEmail) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3"
            >
              <form onSubmit={handleSubmit} className="card-base p-6 space-y-5">
                {/* Honeypot: hidden from users, catches bots */}
                <input
                  type="text"
                  name="botcheck"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-fg mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-fg mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={inputClasses}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-fg mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-on-accent rounded-xl font-medium text-sm hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {hasFormService ? "Send Message" : "Open Email Client"}
                    </>
                  )}
                </button>

                <div aria-live="polite">
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-sm text-success bg-success/10 rounded-xl p-3">
                      <CheckCircle size={16} className="flex-shrink-0" />
                      Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl p-3">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      Something went wrong. Please try again or use the links
                      beside this form.
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
