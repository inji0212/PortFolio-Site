"use client";
import React from "react";
import {
  FrontendSkills,
  DevelopmentSkills,
  ETCSkills,
} from "@/data/skillsData"; // 데이터를 가져옴

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto flex flex-col gap-20">
        <h2 className="text-5xl font-bold mb-10 text-center">MY SKILLS</h2>

        {/* Frontend 섹션 */}
        <section className="flex flex-col items-center">
          <span className="text-fuchsia-500 text-3xl font-semibold mb-4">
            FrontEnd
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            {FrontendSkills.map((skill, index) => (
              <article
                key={index}
                className="relative group flex items-center justify-center bg-white dark:bg-gray-700 border dark:border-gray-800  p-5 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200"
              >
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />

                {/* 오버레이 설정 */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>

                {/* 호버 시 나타나는 텍스트 */}
                <h3 className="absolute inset-0 flex items-center justify-center text-transparent text-base text-center font-semibold group-hover:text-white transition-all duration-200">
                  {skill.name}
                </h3>
              </article>
            ))}
          </div>
        </section>

        {/* Development 섹션 */}
        <section className="flex flex-col items-center">
          <span className="text-fuchsia-500 text-3xl font-semibold mb-4">
            Development
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            {DevelopmentSkills.map((skill, index) => (
              <article
                key={index}
                className=" dark:border-gray-800 relative group flex items-center justify-center bg-white dark:bg-gray-700 border p-5 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200"
              >
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />

                {/* 오버레이 설정 */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>

                {/* 호버 시 나타나는 텍스트 */}
                <h3 className="absolute inset-0 flex items-center justify-center text-transparent text-base text-center font-semibold group-hover:text-white transition-all duration-200">
                  {skill.name}
                </h3>
              </article>
            ))}
          </div>
        </section>

        {/* ETC 섹션 */}
        <section className="flex flex-col items-center">
          <span className="text-fuchsia-500 text-3xl font-semibold mb-4">
            ETC
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            {ETCSkills.map((skill, index) => (
              <article
                key={index}
                className="dark:border-gray-800 relative group flex items-center justify-center bg-white dark:bg-gray-700 border p-5 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200"
              >
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />

                {/* 오버레이 설정 */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>

                {/* 호버 시 나타나는 텍스트 */}
                <h3 className="absolute inset-0 flex items-center justify-center text-transparent text-base text-center font-semibold group-hover:text-white transition-all duration-200">
                  {skill.name}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
