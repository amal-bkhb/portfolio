export interface SkillCategory {
  name: string;
  icon: string; // Lucide icon name
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Application Security',
    icon: 'Shield',
    skills: ['OWASP Top 10', 'Web App Pentesting', 'Burp Suite', 'Secure Code Review']
  },
  {
    name: 'Security Tools',
    icon: 'Wrench',
    skills: ['Wireshark', 'Metasploit', 'Suricata']
  },
  {
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['Docker', 'Kubernetes', 'Istio', 'Minikube', 'AWS', 'Jenkins', 'GitHub Actions', 'SonarQube', 'Linux']
  },
  {
    name: 'Development',
    icon: 'Code',
    skills: ['Python', 'Java', 'Spring Boot', 'SQL', 'JavaScript']
  },
  {
    name: 'Networking',
    icon: 'Network',
    skills: ['Routing & Switching', 'Network Security', 'Cisco Packet Tracer', 'GNS3']
  },
  {
    name: 'Monitoring',
    icon: 'BarChart3',
    skills: ['Grafana', 'Loki']
  },
  {
    name: 'AI for Security',
    icon: 'Brain',
    skills: ['Federated Learning (Flower)', 'Random Forest', 'LSTM', 'Isolation Forest', 'Anomaly Detection']
  }
];
