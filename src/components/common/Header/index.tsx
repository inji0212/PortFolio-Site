"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ModeToggle from "../../common/header/mode-toggle";
import Image from "next/image";
import { SiTypescript } from "react-icons/si";
import { ArrowUp, Menu } from "lucide-react";

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // 드로어 상태 관리

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
    setIsDrawerOpen(false); // 섹션 이동 후 드로어 닫기
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between h-[70px] bg-white dark:bg-gray-900 px-4 md:px-10 shadow-md z-50 transition-opacity duration-500 ease-in-out">
      {/* Logo */}
      <p className="text-lg font-black">Inji's PortFolio</p>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 items-center">
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

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex  space-x-4 items-center">
        <a
          href="https://github.com/inji0212"
          className="text-gray-800 dark:text-white hover:text-fuchsia-500"
        >
          <FaGithub />
        </a>
        <ModeToggle />
        <button
          onClick={() => setIsDrawerOpen(true)} // 메뉴 버튼 클릭 시 드로어 열기
          className=" rounded"
        >
          <Menu />
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white dark:bg-fuchsia-100 border-2 border-fuchsia-600 text-fuchsia-600 rounded-full shadow-lg p-2 hover:scale-110 transform duration-200"
        >
          <ArrowUp />
        </button>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden w-64 z-50`}
      >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 text-gray-800 dark:text-white "
        >
          ✕
        </button>
        <div className="flex flex-col items-start p-8 space-y-4">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-800 dark:text-white hover:underline"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-800 dark:text-white hover:underline"
          >
            Skill
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-800 dark:text-white hover:underline"
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-800 dark:text-white hover:underline"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-fuchsia-500 transition-all duration-100"
        style={{ width: `${scrollPosition}%` }}
      />
    </header>
  );
};

export default Header;
