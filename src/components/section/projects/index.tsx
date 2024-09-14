// components/sections/Projects.tsx
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// 프로젝트 타입 정의
type Project = {
  title: string;
  url: string;
  image: string;
  stack: string[];
  description: string;
};

// 프로젝트 데이터 배열
const projects: Project[] = [
  {
    title: "Project 1",
    url: "https://github.com/inji0212/project1",
    image: "/images/project1.png",
    stack: ["React", "TypeScript", "Next.js"],
    description: "This is a brief description of Project 1.",
  },
  {
    title: "Project 2",
    url: "https://github.com/inji0212/project2",
    image: "/images/project2.png",
    stack: ["React Native", "Redux", "Expo"],
    description: "This is a brief description of Project 2.",
  },
  // 추가 프로젝트들...
];

const Projects: React.FC = () => {
  // selectedProject의 타입을 Project 또는 null로 설정
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-6xl font-bold mb-10 text-center">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
