"use client";
import React from "react";
import { useImageSlider } from "@/hooks/useImageSlider";
import { Project } from "@/data/projectsData";
import Button from "@/components/ui/button";
import Chip from "@/components/ui/chip";

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  // 모달에서는 autoSlide를 true로 설정
  const { currentImageIndex, nextImage, prevImage } = useImageSlider(
    project.images,
    true // 자동 슬라이드 활성화
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black  dark:bg-opacity-80 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg max-w-2xl md:max-w-4xl w-full overflow-hidden h-[95%]">
        <button
          onClick={onClose}
          className="float-right -mr-2 -mt-3 text-gray-800 dark:text-white"
        >
          ✕
        </button>

        <div className="flex flex-col items-center overflow-y-auto max-h-full">
          {/* 타이틀과 날짜 */}
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <div className="mb-2 gap-4 flex flex-row items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              {project.date}
            </p>
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

          {/* 이미지 슬라이더 */}
          <div className="relative w-full mb-4">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full lg:max-h-[360px] object-fill "
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 text-black"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 text-black"
            >
              {">"}
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={`block w-2 h-2 rounded-full ${
                    index === currentImageIndex
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 프로젝트 설명 */}
          <div className="w-full p-4">
            <p className="whitespace-pre-line mb-4">{project.description}</p>
            <div className="flex ">
              <Button
                href={project.git}
                className="text-xs hover:scale-100 hover:underline mb-2 "
              >
                GIT 바로가기
              </Button>
            </div>
            <div className="flex items-center flex-wrap mt-2">
              {project.stack.map((tag, index) => (
                <Chip key={index}>{tag}</Chip>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="w-full border-t border-gray-300 my-4" />

          {/* 타이틀 섹션 */}
          <div className="w-full mb-4">
            <h4 className="text-2xl font-black mb-2">
              {project.teamSize === "Personal"
                ? "개인 프로젝트"
                : "팀 프로젝트"}
            </h4>
          </div>

          {/* 기여 부분 */}
          <div className="w-full mb-4 ">
            <h4 className="text-lg font-bold mb-2 ml-2">
              ✍️ 주요업무 및 상세역할
            </h4>
            <div className="bg-gray-100 p-3 rounded-lg ml-2">
              <ul className="list-disc list-inside text-sm text-gray-700">
                {project.tasks.map((task, index) => (
                  <li key={index} className="whitespace-pre-wrap">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
