export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'ENSIAS',
    degree: 'Engineering Degree',
    field: 'Cybersecurity, Cloud & Mobile Computing',
    period: '2024 – 2027',
    location: 'Rabat, Morocco'
  },
  {
    institution: 'Lycée Mohamed V',
    degree: 'Classes Préparatoires TSI',
    field: 'Technology and Industrial Sciences',
    period: '2022 – 2024',
    location: 'Béni Mellal, Morocco'
  }
];
