"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ModeToggle from "./mode-toggle";

// import { useState } from "react";
// import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-200 flex justify-between">
      <Link href={"/"}>Inji's PortFolio</Link>
      <div className="flex flex-row items-center space-x-1">
        <Link href={"/contact"}>Contact</Link>
        <a href="https://github.com/inji0212">
          <FaGithub />
        </a>
        <ModeToggle />
      </div>
    </div>
    // <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
    //   <Link href="/" className="text-2xl font-bold">
    //     inji’s Portfolio
    //   </Link>
    //   <div className="flex items-center">
    //     <button onClick={toggleDarkMode} className="mr-4">
    //       {isDarkMode ? "Light Mode" : "Dark Mode"}
    //     </button>
    //     <Link href="/contact" className="mr-4">
    //       Contact
    //     </Link>
    //     <a
    //       href="https://github.com/your-github"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       GitHub
    //     </a>
    //   </div>
    // </header>
  );
};

export default Header;
