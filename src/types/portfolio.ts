export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory?: 'flagship' | 'web-platforms' | 'ai-systems' | 'cs-embedded' | 'ui-lab';
  description: string;
  technologies: string[];
  technicalDetails?: string[];
  link?: string;
  githubUrl?: string;
  repoName?: string;
  hasInteractiveHUD?: boolean;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  problem: string;
  approach: string[];
  outcome: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: string[];
}

export interface CapabilityGroup {
  category: string;
  skills: string[];
}

export interface AIWorkflowStage {
  step: string;
  title: string;
  description: string;
  focus: string;
}

export interface EducationItem {
  institution: string;
  credential: string;
  period: string;
  grade?: string;
  location?: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  context?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  grade?: string;
}
