// components/projects/ProjectCard.tsx
"use client";
import Chip from "@/components/ui/chip";
import React from "react";

const ProjectCard = ({ project, onClick }: any) => (
  <div
    className="bg-gray-100 dark:bg-gray-800 shadow-md p-5 rounded-lg cursor-pointer hover:scale-105 transform transition-transform duration-100 mx-4"
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-auto aspect-video object-cover mb-4 rounded "
    />
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="mb-4">{project.description}</p>
    <div className="flex space-x-2 relative flex-wrap">
      {project.stack.map((tech: string, index: number) => (
        <Chip>{tech}</Chip>
      ))}
    </div>
  </div>
);

export default ProjectCard;
