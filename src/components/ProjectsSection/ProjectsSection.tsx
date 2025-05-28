import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Site",
    description:
      "This personal portfolio site built from scratch with Vite, React, and TypeScript.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/yourusername/my_portfolio_app",
    demo: "https://yourname.vercel.app",
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
    demo: "https://github-repotracker.vercel.app",
  },
  {
    title: "TaskSync App",
    description:
      "A task collaboration tool with user authentication, built using FastAPI and React.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/tasksync",
    demo: "https://tasksync.vercel.app",
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
