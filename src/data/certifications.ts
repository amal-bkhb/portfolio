export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credlyUrl: string;
  logo: string; // path or identifier
}

export const certifications: Certification[] = [
  {
    name: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'February 2026',
    credlyUrl: '', // À COMPLÉTER: Credly verification link
    logo: 'cisco'
  },
  {
    name: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services (AWS Academy)',
    date: 'November 2026',
    credlyUrl: '', // À COMPLÉTER: lien Credly du badge AWS Academy
    logo: 'aws'
  }
];