export interface Activity {
  role: string;
  organization: string;
  description: string;
  details: string;
}

export const activities: Activity[] = [
  {
    role: 'Donations Lead',
    organization: 'CINDH Club, ENSIAS',
    description: 'Coordinated a team of ~35 members for a medical social caravan',
    details: '~225 families, ~1,100 beneficiaries; partner outreach and logistics'
  }
];
