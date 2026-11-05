export const primaryNavigation = [
  { label: 'About us', path: '/about-us' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Contact us', path: '/contact-us' },
] as const;

export const careerRoles = [
  { title: 'Program Specialist', path: '/careers/program-specialist' },
  { title: 'Data Scientist (Cheminfo)', path: '/careers/data-scientist-cheminfo' },
  {
    title: 'Assistant Account Manager- Scientific Solutions',
    path: '/careers/assistant-account-manager--scientific-solutions',
  },
  {
    title: 'Senior Data Scientist',
    path: '/careers/www-acsi-india-org-careers-senior-data-scientist',
  },
  { title: 'Data Engineer', path: '/careers/data-engineer' },
] as const;

export const legalPages = [
  { title: 'Privacy Statement', path: '/privacy-policy' },
  { title: 'Website Disclaimer', path: '/terms-of-use' },
] as const;

export const contactEmails = ['info@acs-i.org', 'hrd@acs-i.org', 'hrdtech@acs-i.org'] as const;
