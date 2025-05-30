import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Site",
    description:
      "This personal portfolio site built from scratch with Vite, React, and TypeScript.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/umastotra/my_portfolio_app",
    demo: "https://my-portfolio-app-sable.vercel.app/",
  },
  {
    title: "GitHub Repo Tracker App",
    description:
      "A full-stack web application to track GitHub repositories and view their latest release activity",
    tech: [
      "React",
      "TypeScript",
      "Apollo Client",
      "TailwindCSS",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
    ],
    github: "https://github.com/umastotra/github-repotracker",
  },
  {
    title: "TaskSync App - Coming Soon",
    description:
      "A task collaboration tool with user authentication, built using FastAPI and React.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="projects">
      <h2> Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
