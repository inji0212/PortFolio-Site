// app/projects/page.tsx
import React from "react";
import Link from "next/link";

// 샘플 프로젝트 데이터
const projects = [
  {
    id: "1",
    name: "Project One",
    description: "A brief description of project one.",
  },
  {
    id: "2",
    name: "Project Two",
    description: "A brief description of project two.",
  },
  {
    id: "3",
    name: "Project Three",
    description: "A brief description of project three.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a className="block p-4 border rounded-lg hover:bg-gray-100">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p>{project.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
