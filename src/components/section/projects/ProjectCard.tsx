"use client";
import React from "react";
import { useImageSlider } from "@/hooks/useImageSlider";
import { Project } from "@/data/projectsData";
import Chip from "@/components/ui/chip";

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  const { currentImageIndex, nextImage, prevImage } = useImageSlider(
    project.images,
    false
  );

  return (
    <li className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform cursor-pointer duration-300 hover:scale-105 list-none">
      <article
        onClick={onClick}
        className="flex flex-col h-full transform transition-transform duration-300 "
      >
        <div className="flex justify-center relative overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full aspect-1 object-cover transition-opacity duration-300 ease-in-out"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 text-black"
          >
            {"<"}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 text-black"
          >
            {">"}
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={`block w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow items-start">
          <div className="mb-2 flex justify-between w-full items-center">
            <h3 className="text-lg font-bold truncate">{project.title}</h3>
            <span
              className={`text-xs px-2 py-1 rounded-full ml-2 ${
                project.teamSize === "Personal"
                  ? "bg-yellow-200 text-yellow-700"
                  : "bg-fuchsia-200 text-fuchsia-700"
              }`}
            >
              {project.teamSize}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
            {project.date}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 truncate">
            {project.titleDescription}
          </p>
          {/* Flex-wrap 적용 및 margin을 통한 간격 조정 */}
          <div className="flex items-center flex-wrap mt-2">
            {project.stack.map((tech, index) => (
              <Chip key={index}>{tech}</Chip>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProjectCard;
