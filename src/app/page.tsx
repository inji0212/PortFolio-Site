// app/page.tsx
import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Project 1",
    githubLink: "https://github.com/inji0212/project1",
    image: "/images/project1.png",
    url: "/project1",
    description: "This is a brief description of Project 1.",
  },
  {
    name: "Project 2",
    githubLink: "https://github.com/inji0212/project2",
    image: "/images/project2.png",
    url: "/project2",
    description: "This is a brief description of Project 2.",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="h-full flex flex-wrap items-center justify-center my-10 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
