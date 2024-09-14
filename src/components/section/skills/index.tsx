"use client";
import React, { useEffect, useRef } from "react";

const FrontendSkills = [
  { name: "HTML", icon: "/img/skills/HTML.svg" },
  { name: "CSS", icon: "/img/skills/CSS.svg" },
  { name: "Styled-Components", icon: "/img/skills/StyledComponents.svg" },
  { name: "TailwindCSS", icon: "/img/skills/TailwindCSS-Light.svg" },
  { name: "JavaScript", icon: "/img/skills/JavasCript.svg" },
  { name: "TypeScript", icon: "/img/skills/TypeScript.svg" },
  { name: "React", icon: "/img/skills/React.svg" },
  { name: "Next.js", icon: "/img/skills/NextJS-Light.svg" },
];
const DevelopmentSkills = [
  { name: "Vercel", icon: "/img/skills/Vercel-Light.svg" },
  { name: "AWS", icon: "/img/skills/AWS-Light.svg" },
];
const ETCSkills = [
  { name: "Figma", icon: "/img/skills/Figma.svg" },
  { name: "Git", icon: "/img/skills/Git.svg" },
  { name: "JavaScript", icon: "/img/skills/JavasCript.svg" },
];

const Skills: React.FC = () => {
  const skillSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        } else {
          entry.target.classList.remove("fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const skills = skillSectionRef.current?.querySelectorAll(".skill-item");
    skills?.forEach((skill) => observer.observe(skill));

    return () => {
      skills?.forEach((skill) => observer.unobserve(skill));
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-10 text-center">MY SKILLS</h2>
        <div
          className="flex flex-col md:flex-row justify-center items-start gap-10 mx-20"
          ref={skillSectionRef}
        >
          {/* 프론트엔드 섹션 */}
          <div className="bg-white dark:bg-gray-700 shadow-md p-5 rounded-lg w-full md:w-[500px] skill-item">
            <span className="text-fuchsia-500 text-2xl font-semibold mb-6 da">
              FrontEnd
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FrontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 border p-5 rounded-lg hover:scale-105 transform transition-transform duration-200 relative group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  {/* 오버레이 설정 */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-lg"></div>

                  {/* 호버 시 나타나는 텍스트 */}
                  <h3 className="absolute inset-0 flex items-center justify-center text-transparent text-xl font-semibold group-hover:text-white transition-all duration-200">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          {/* 개발 및 기타 섹션 */}
          <div className="bg-white dark:bg-gray-700 shadow-md p-5 rounded-lg w-full md:w-[250px] skill-item ">
            <span className="text-fuchsia-500 text-2xl font-semibold ">
              Development
            </span>
            <div className="grid grid-cols-1 gap-8">
              {DevelopmentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 border p-5 rounded-lg hover:scale-105 transform transition-transform duration-200 relative group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  {/* 오버레이 설정 */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-lg"></div>

                  {/* 호버 시 나타나는 텍스트 */}
                  <h3 className="absolute inset-0 flex items-center justify-center text-transparent text-xl font-semibold group-hover:text-white transition-all duration-200">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
            <span className="text-fuchsia-500 text-2xl font-semibold ">
              ETC
            </span>
            <div className="grid grid-cols-1 gap-8 ">
              {ETCSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 border p-5 rounded-lg hover:scale-105 transform transition-transform duration-200 relative group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  {/* 오버레이 설정 */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-lg"></div>

                  {/* 호버 시 나타나는 텍스트 */}
                  <h3 className="absolute inset-0 flex items-center justify-center text-transparent text-xl font-semibold group-hover:text-white transition-all duration-200">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
