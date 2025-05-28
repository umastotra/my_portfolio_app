import { techLogos } from "../../constants/techlogos";
import "./ProjectsSection.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

// This reusable component renders a single project card with all its details
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
  demo,
}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-list">
        {tech.map((t) =>
          techLogos[t] ? (
            <div className="tech-icon" key={t}>
              <img src={techLogos[t].icon} alt={t} />
              <span>{techLogos[t].name}</span>
            </div>
          ) : (
            <span key={t}>{t}</span>
          )
        )}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
