export const SITE_URL = 'https://guruprasath.goatech.tech';
export const PROFILE_IMAGE = `${SITE_URL}/images/team/guruprasath-d.jpg`;
export const COMPANY_URL = 'https://www.goatech.tech';
export const profiles = [
  { label: 'GitHub', href: 'https://github.com/guru071' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guru-prasath-bb8328382' },
  { label: 'Instagram · infinity.sparrow', href: 'https://instagram.com/infinity.sparrow' },
  { label: 'Instagram · maghs.guruprasath', href: 'https://instagram.com/maghs.guruprasath' },
];
export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'Java', 'JavaScript', 'C', 'C++'] },
  { title: 'Web development', skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
  { title: 'Backend & data', skills: ['Flask', 'FastAPI', 'Node.js', 'Express.js', 'SQL', 'PostgreSQL', 'MySQL'] },
  { title: 'Tools & practice', skills: ['Git', 'GitHub', 'REST APIs', 'NumPy'] },
];
export const projects = [
  { name: 'Watercan Service', category: 'GOAT’ECH product', status: 'Developed', description: 'A water-delivery platform for suppliers, delivery teams and customers, developed by GOAT’ECH.', href: `${COMPANY_URL}/work/watercan-service`, linkLabel: 'Explore product', image: '/images/projects/watercan-service.png' },
  { name: 'MAGHGO', category: 'Personal project', status: 'Under development', description: 'My project under development. Explore its website for current information.', href: 'https://maghgo.goatech.tech', linkLabel: 'Visit project', image: '/images/projects/maghgo-logo.jpg' },
  { name: 'HIFI', category: 'Project' },
  { name: 'CRIETRACK', category: 'Project' },
];
export const pages = [
  { path: '/', title: 'Guruprasath D | Co-founder & CEO of GOAT’ECH', description: 'Meet Guruprasath D, co-founder and CEO of GOAT’ECH, and explore his software projects and skills.' },
  { path: '/about', title: 'About Guruprasath D | GOAT’ECH Co-founder', description: 'Learn about Guruprasath D, his education and his work with the four co-founders of GOAT’ECH.' },
  { path: '/resume', title: 'Skills & Resume | Guruprasath D', description: 'Explore Guruprasath D’s programming, web, backend and database skills, education and experience.' },
  { path: '/projects', title: 'Projects | Guruprasath D', description: 'Explore Watercan Service, MAGHGO, HIFI and CRIETRACK in Guruprasath D’s portfolio.' },
  { path: '/blog', title: 'Resources | Guruprasath D', description: 'Explore practical guides and resources from GOAT’ECH on websites, software and water-delivery planning.' },
  { path: '/contact', title: 'Contact | Guruprasath D', description: 'Find ways to connect with Guruprasath D and discuss a project with GOAT’ECH.' },
];
export const pageByPath = path => pages.find(page => page.path === path) || null;
export function structuredData(page) {
  const person = { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'Guruprasath D', jobTitle: 'Co-founder & CEO', url: `${SITE_URL}/`, image: PROFILE_IMAGE, worksFor: { '@type': 'Organization', name: 'GOAT’ECH', url: `${COMPANY_URL}/` }, sameAs: ['https://github.com/guru071', 'https://www.linkedin.com/in/guru-prasath-bb8328382', `${COMPANY_URL}/team/guruprasath-d`] };
  return page.path === '/' ? { '@context': 'https://schema.org', '@type': 'ProfilePage', url: `${SITE_URL}/`, mainEntity: person } : { '@context': 'https://schema.org', '@type': 'WebPage', url: `${SITE_URL}${page.path}`, name: page.title, description: page.description, about: person };
}
