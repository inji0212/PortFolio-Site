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
        <h2 className="text-6xl font-bold mb-10 text-center">MY SKILLS</h2>

        {/* Frontend 섹션 */}
        <section className="flex flex-col items-center">
          <span className="text-fuchsia-500 text-2xl font-semibold mb-4">
            FrontEnd
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            {FrontendSkills.map((skill, index) => (
              <article
                key={index}
                className="flex items-center justify-center bg-white dark:bg-gray-700 border p-5 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200"
              >
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
              </article>
            ))}
          </div>
        </section>

        {/* Development 섹션 */}
        <section className="flex flex-col items-center">
          <span className="text-fuchsia-500 text-2xl font-semibold mb-4">
            Development
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            {DevelopmentSkills.map((skill, index) => (
              <article
                key={index}
                className="flex items-center justify-center bg-white dark:bg-gray-700 border p-5 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200"
              >
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
              </article>
            ))}
          </div>
        </section>

        {/* ETC 섹션 */}
        <section className="flex flex-col items-center">
          <span className="text-fuchsia-500 text-2xl font-semibold mb-4">
            ETC
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            {ETCSkills.map((skill, index) => (
              <article
                key={index}
                className="flex items-center justify-center bg-white dark:bg-gray-700 border p-5 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200"
              >
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
