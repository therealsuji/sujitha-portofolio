"use client";

import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case "typescript":
        return "bg-brutal-purple";
      case "javascript":
        return "bg-brutal-yellow";
      case "python":
        return "bg-brutal-green";
      case "rust":
        return "bg-accent";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="brutal-card p-6 bg-background hover:translate-x-2 hover:translate-y-2 transition-transform max-w-2xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-xl font-mono uppercase mb-2">
            {project.name}
          </h4>
          <p className="font-mono text-sm opacity-80 mb-4">
            {project.description}
          </p>
        </div>
        <span className={`${getLanguageColor(project.language)} text-black px-2 py-1 brutal-border text-xs font-mono`}>
          {project.language}
        </span>
      </div>

      <p className="font-mono text-sm mb-4">
        {project.longDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span key={index} className="font-mono text-xs bg-muted text-foreground px-2 py-1 brutal-border">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-secondary text-secondary-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              GITHUB →
            </div>
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-primary text-primary-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              LIVE →
            </div>
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-accent text-accent-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              DEMO →
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;