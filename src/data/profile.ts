export interface SocialLink {
  name: string;
  url: string;
  icon: "Github" | "Linkedin" | "Mail";
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
  linkedin: string;
  github: string;
  cvPath: string | null;
  socialLinks: SocialLink[];
}

// À COMPLÉTER: address shown publicly. Empty values are hidden on the site.
const email = '';
// À COMPLÉTER: full LinkedIn profile URL.
const linkedin = '';
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
  linkedin,
  github,
  // À COMPLÉTER: add public/cv/Amal_Bakhouya_CV.pdf, then set this to '/cv/Amal_Bakhouya_CV.pdf'.
  cvPath: null,
  socialLinks: [
    { name: 'GitHub', url: github, icon: 'Github' },
    ...(linkedin ? [{ name: 'LinkedIn', url: linkedin, icon: 'Linkedin' as const }] : []),
    ...(email ? [{ name: 'Email', url: `mailto:${email}`, icon: 'Mail' as const }] : [])
  ]
};
