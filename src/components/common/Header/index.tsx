"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ModeToggle from "../../common/header/mode-toggle";
import Image from "next/image"; // next/image 사용
import { SiTypescript } from "react-icons/si";

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / documentHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between h-[70px] bg-white dark:bg-gray-900 px-10 shadow-md z-50 transition-opacity duration-500 ease-in-out">
      {/* next/image 사용하여 로고 렌더링 */}
      {/* <Image
        src="/img/Injis.svg"
        alt="Logo"
        width={32}
        height={32}
        className="text-foreground"
      /> */}
      <p className=" ml-2 text-2xl font-black">Inji's PortFolio</p>
      <nav className="flex space-x-8 items-center">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:underline"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:underline"
        >
          Skill
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:underline"
        >
          Project
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:underline"
        >
          Contact
        </button>
        <a
          href="https://github.com/inji0212"
          className="text-gray-800 dark:text-white hover:text-fuchsia-500"
        >
          <FaGithub />
        </a>
        <ModeToggle />
      </nav>
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 bg-fuchsia-500 text-white rounded-full shadow-lg"
        >
          ⬆️
        </button>
      </div>
      {/* 스크롤 프로그래스 바 */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-fuchsia-500 transition-all duration-100"
        style={{ width: `${scrollPosition}%` }}
      />
    </header>
  );
};

export default Header;
