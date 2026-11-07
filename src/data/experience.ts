export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    title: 'Engineering Intern',
    company: 'DXC Technology',
    period: 'July 13 – August 31, 2025',
    description: 'Automated vulnerability monitoring and security bulletin generation.',
    bullets: [
      // À COMPLÉTER: name the confirmed sources (NVD API 2.0, CERT-FR, CISA KEV?).
      'Built a pipeline collecting vulnerabilities from public security sources, with normalization and deduplication',
      'Generated PDF security bulletins automatically',
      'Developed a web dashboard ("Security Advisories") to search and filter CVEs by product',
      // À COMPLÉTER: result metrics — e.g., number of sources, collection frequency, CVEs processed
    ],
    stack: ['Python', 'REST APIs', 'JSON', 'GitHub Actions', 'Spring Boot', 'HTML/CSS']
  },
  {
    title: 'Intern',
    company: 'Ministère de la Transition Énergétique',
    period: '', // À COMPLÉTER: dates
    description: 'Web application security: OWASP Top 10 assessment on OWASP Juice Shop.',
    bullets: [
      'Conducted security assessment based on the OWASP Top 10 methodology',
      'Tested vulnerabilities on OWASP Juice Shop environment'
    ],
    stack: ['OWASP Top 10', 'Burp Suite', 'OWASP Juice Shop']
  }
];
