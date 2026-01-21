import React from 'react';
import { ExternalLink, Database, Server, Box, Lock } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'database': return <Database size={24} />;
      case 'server': return <Server size={24} />;
      case 'box': return <Box size={24} />;
      case 'lock': return <Lock size={24} />;
      default: return <Box size={24} />;
    }
  };

  const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
    blue: { bg: 'bg-blue-900/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    purple: { bg: 'bg-purple-900/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    green: { bg: 'bg-green-900/20', text: 'text-green-400', border: 'border-green-500/30' },
    orange: { bg: 'bg-orange-900/20', text: 'text-orange-400', border: 'border-orange-500/30' },
  };

  const theme = colorClasses[project.color] || colorClasses.blue;

  return (
    <div className="group border border-[#333] bg-[#1a1a1a] hover:bg-[#222] hover:border-primary/50 rounded-xl p-5 transition-all duration-300 cursor-pointer relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="text-primary" size={20} />
      </div>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${theme.bg} ${theme.text}`}>
          {getIcon(project.icon)}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">
            /{project.name}
          </h3>
          <p className="text-[#888] text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 rounded text-xs bg-[#111] border border-[#333] ${theme.text}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};