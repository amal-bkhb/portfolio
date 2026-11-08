export interface SocialLink {
  name: string;
  url: string;
  icon: "Github" | "Linkedin" | "Mail" | "Phone";
  /** Text shown next to the icon in contact lists. */
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  taglines: string[];
  about: string;
  status: string;
  currentlyLearning: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cvPath: string | null;
  socialLinks: SocialLink[];
}

// Shown publicly on the site. Empty values are hidden.
const email = 'amalbakhouya.bh@gmail.com';
const phone = '+212704163798';
const phoneLabel = '+212 7 04 16 37 98';
const linkedin = 'https://www.linkedin.com/in/amal-bakhouya-422bb5334/';
const github = 'https://github.com/amal-bkhb';

export const profile: Profile = {
  name: 'Amal Bakhouya',
  title: 'Cybersecurity & Cloud Security Engineering Student',
  subtitle: 'Final-year engineering student at ENSIAS · Seeking a PFE internship in DevSecOps / Cloud Security',
  taglines: [
    'I build and secure systems, from Kubernetes workloads to vulnerability pipelines.',
    'Bridging cloud infrastructure and security — one hardened deployment at a time.',
    'From threat detection to secure architectures: engineering defense into every layer.'
  ],
  // À COMPLÉTER: add the internship start date to the last sentence.
  about: `I am a final-year engineering student at ENSIAS (Rabat, Morocco), specializing in Cybersecurity, Cloud, and Mobile Computing. Before ENSIAS, I completed two years of classes préparatoires TSI at Lycée Mohamed V in Béni Mellal (2022–2024). My focus areas include cloud security, web application security, and infrastructure hardening. During my internship at DXC Technology, I built an automated vulnerability monitoring pipeline and a security bulletin dashboard. I have also worked on Kubernetes-based intrusion detection, Android security, and OWASP Top 10 assessments. I am currently seeking a 4-to-6-month PFE internship in DevSecOps, Cloud Security, or Application Security.`,
  // À COMPLÉTER: add the year you are available.
  status: 'Open to PFE internship',
  currentlyLearning: 'Terraform & AWS Security',
  email,
  phone,
  linkedin,
  github,
  // À COMPLÉTER: add public/cv/Amal_Bakhouya_CV.pdf, then set this to '/cv/Amal_Bakhouya_CV.pdf'.
  cvPath: null,
  socialLinks: [
    ...(email ? [{ name: 'Email', url: `mailto:${email}`, icon: 'Mail' as const, label: email }] : []),
    ...(phone ? [{ name: 'Phone', url: `tel:${phone}`, icon: 'Phone' as const, label: phoneLabel }] : []),
    ...(linkedin ? [{ name: 'LinkedIn', url: linkedin, icon: 'Linkedin' as const, label: 'LinkedIn' }] : []),
    { name: 'GitHub', url: github, icon: 'Github', label: 'GitHub' }
  ]
};
