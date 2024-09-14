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
    title: "개인 포트폴리오 사이트(INJI’s portfolio)",
    url: "https://github.com/inji0212/project1",
    image: "/images/project1.png",
    stack: ["Next.js", "tailwind.css", "Zustand", "TypeScript", "Vercel"],
    description:
      "개인 포트폴리오 사이트입니다.인트로 및 애니메이션을 포함하여 사용자에게 재미 요소를 주었으며 about, skills, project, contact을 통해 포트폴리오를 보다 편하게 보여주기 위해 제작하였습니다. ",
  },
  {
    title: "컴포넌트 라이브러리 (컴포넌트 팩토리)",
    url: "https://github.com/inji0212/project2",
    image: "/img/ComponentFactory.png",
    stack: ["Next.js ", "tailwind.css", "TypeScript", "Vercel"],
    description:
      "컴포넌트 팩토리는 컴포넌트 라이브러리입니다.여러 재사용가능한 컴포넌트 설명 및 예시로 사용자가 컴포넌트 사용시 보기 쉽고 뿐만 아니라 검색 기능을 통해 컴포넌트, 페이지 이동을 편히 하였습니다.",
  },
  {
    title: "프로젝트 테스트 및 요약해주는 개발자 플랫폼 (프리어)",
    url: "https://github.com/inji0212/project1",
    image: "/images/project1.png",
    stack: [
      "TypeScript",
      " React",
      " Tailwind.css",
      " styled-components",
      "Zunstand",
    ],
    description:
      "프리어란 개발자가 배포한 프로젝트를 테스터할 수 있는 개발자 플랫폼입니다.테스트뿐 아니라 개발자 커뮤니티로 소통의 창을 열어주며 테스트를 통해 얻은 코어(코인)으로 상점에서 물건을 기프트콘을 구매하실 수 있습니다. ",
  },
  {
    title: "커뮤니티와 챌린지 요소인 출석체크가 포함된 웹 IDE (CoCo)",
    url: "https://github.com/inji0212/project2",
    image: "/img/ComponentFactory.png",
    stack: [
      "React",
      "TypeScript",
      "Zustand ",
      "Styled-Components",
      "Tailwind.CSS",
      "Sock JS ( Web Socket )",
    ],
    description:
      "COCO IDE는 별도 설치없이 브라우저를 통한 개발환경을 제공하는 IDE입니다. 반응형 메인페이지로 필요한 것들이 한눈에 보이며 이용자들 서로 응원을 해줄 단체 채팅과 출석 도장을 찍을 수 있는 챌린지적 요소등이 포함되어 있습니다.",
  },
  // 추가 프로젝트들...
];

const Projects: React.FC = () => {
  // selectedProject의 타입을 Project 또는 null로 설정
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-6xl font-bold mb-10 text-center">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-20">
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
