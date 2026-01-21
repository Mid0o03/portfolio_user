export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  icon: string;
  color: string; // Tailwind color class prefix e.g., 'blue'
}

export interface DeveloperProfile {
  name: string;
  role: string;
  stack: string[];
  status: string;
  location: string;
}
