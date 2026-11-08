import type { Metadata } from "next";
import { Outfit, DM_Sans, Kalam, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-kalam",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Applies the saved theme before the first paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amal Bakhouya — Cybersecurity & Cloud Security Engineer",
    template: "%s | Amal Bakhouya",
  },
  description:
    "Final-year engineering student at ENSIAS specializing in Cybersecurity, Cloud & Mobile Computing. Seeking a PFE internship in DevSecOps, Cloud Security, or Application Security.",
  keywords: [
    "cybersecurity",
    "cloud security",
    "DevSecOps",
    "ENSIAS",
    "portfolio",
    "Amal Bakhouya",
    "Kubernetes",
    "security engineer",
    "PFE internship",
  ],
  authors: [{ name: "Amal Bakhouya" }],
  creator: "Amal Bakhouya",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://amalbakhouya.dev"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Amal Bakhouya — Cybersecurity & Cloud Security Engineer",
    description:
      "Final-year engineering student at ENSIAS specializing in Cybersecurity, Cloud & Mobile Computing. Seeking a PFE internship in DevSecOps / Cloud Security.",
    siteName: "Amal Bakhouya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amal Bakhouya — Cybersecurity & Cloud Security Engineer",
    description:
      "Final-year engineering student at ENSIAS specializing in Cybersecurity, Cloud & Mobile Computing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amal Bakhouya",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://amalbakhouya.dev",
    jobTitle: "Cybersecurity & Cloud Security Engineering Student",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "ENSIAS - École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
    },
    knowsAbout: [
      "Cybersecurity",
      "Cloud Security",
      "DevSecOps",
      "Kubernetes",
      "Application Security",
    ],
    sameAs: [
      "https://github.com/amal-bkhb",
      "https://www.linkedin.com/in/amal-bakhouya-422bb5334/",
    ],
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${outfit.variable} ${dmSans.variable} ${kalam.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
