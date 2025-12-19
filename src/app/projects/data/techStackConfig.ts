export interface TechStackItem {
  name: string;
  icon: string | React.ReactNode; // Supports emoji strings or SVG components
}

export const techStackConfig: Record<string, TechStackItem> = {
  // Frontend Frameworks
  'Next.js': {
    name: 'Next.js',
    icon: '▲',
  },
  'React': {
    name: 'React',
    icon: '⚛️',
  },
  
  // Languages
  'TypeScript': {
    name: 'TypeScript',
    icon: '📘',
  },
  'Java': {
    name: 'Java',
    icon: '☕',
  },
  'Node.js': {
    name: 'Node.js',
    icon: '🟢',
  },
  
  // Backend Frameworks
  'Spring Boot': {
    name: 'Spring Boot',
    icon: '🍃',
  },
  'Express': {
    name: 'Express',
    icon: '🚂',
  },
  
  // Databases
  'SQL Server': {
    name: 'SQL Server',
    icon: '🗄️',
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: '🐘',
  },
  
  // Container & Orchestration
  'OpenShift': {
    name: 'OpenShift',
    icon: '🔴',
  },
  'Docker': {
    name: 'Docker',
    icon: '🐳',
  },
  'Kubernetes': {
    name: 'Kubernetes',
    icon: '☸️',
  },
  
  // CI/CD & DevOps
  'Azure DevOps': {
    name: 'Azure DevOps',
    icon: '🔷',
  },
  'Tekton': {
    name: 'Tekton',
    icon: '🔧',
  },
  'Helm': {
    name: 'Helm',
    icon: '⎈',
  },
  'ArgoCD': {
    name: 'ArgoCD',
    icon: '🐙',
  },
  'CI/CD': {
    name: 'CI/CD',
    icon: '🔄',
  },
  
  // Testing
  'Jest': {
    name: 'Jest',
    icon: '🃏',
  },
  'Playwright': {
    name: 'Playwright',
    icon: '🎭',
  },
  'Unity': {
    name: 'Unity',
    icon: '🎮',
  },
};

export function getTechStackItem(tech: string): TechStackItem {
  return techStackConfig[tech] || { name: tech, icon: null };
}
