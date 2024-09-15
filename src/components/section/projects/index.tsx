// components/sections/Projects.tsx
"use client";
import React, { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectsData, Project } from "@/data/projectsData";
import { useDebounce } from "@/hooks/useDebounce";
import { Filter, Search, X } from "lucide-react"; // Lucide 아이콘 추가

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | "Personal" | "Team">("All");

  const debouncedSearchTerm = useDebounce(searchTerm);

  // 필터링된 프로젝트 목록 계산
  const filteredProjects = projectsData.filter((project) => {
    const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase();

    const matchesSearch =
      debouncedSearchTerm === "" ||
      project.title.toLowerCase().includes(lowercasedSearchTerm) ||
      project.titleDescription.toLowerCase().includes(lowercasedSearchTerm) ||
      project.date.toLowerCase().includes(lowercasedSearchTerm) ||
      project.description.toLowerCase().includes(lowercasedSearchTerm) ||
      project.tasks.some((task) =>
        task.toLowerCase().includes(lowercasedSearchTerm)
      ) ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(lowercasedSearchTerm)
      );

    const matchesFilter = filter === "All" || project.teamSize === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-5xl font-bold mb-10 text-center">Projects</h2>

      {/* 검색 및 필터 */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-xl mb-8 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-auto flex items-center">
          <Search className="absolute left-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search Projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-8 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 text-gray-500"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div className="flex space-x-4">
          <Filter className="text-yellow-400 mt-0.5" size={18} />
          <button
            className={`${
              filter === "All" ? "text-yellow-400" : ""
            } cursor-pointer`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`${
              filter === "Personal" ? "text-yellow-400" : ""
            } cursor-pointer`}
            onClick={() => setFilter("Personal")}
          >
            Personal
          </button>
          <button
            className={`${
              filter === "Team" ? "text-yellow-400" : ""
            } cursor-pointer`}
            onClick={() => setFilter("Team")}
          >
            Team
          </button>
        </div>
      </div>

      {/* 프로젝트 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 sm:mx-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))
        ) : (
          <p className="text-center w-full">검색 결과가 없습니다.</p>
        )}
      </div>

      {/* 선택된 프로젝트에 대한 모달 표시 */}
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
