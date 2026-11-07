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
  }
];
