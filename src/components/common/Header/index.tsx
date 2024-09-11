// components/common/header/index.tsx
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ModeToggle from "../../common/Header/mode-toggle";

const Header: React.FC = () => {
  return (
    <header className="w-full flex h-[70px] justify-between items-center border-b px-[11vw] shadow-md ">
      <Link href="/" className="text-foreground ">
        Inji's Portfolio
      </Link>
      <div className="flex flex-row items-center space-x-2">
        <Link href="/contact" className="text-fuchsia-500 hover:underline ">
          Contact
        </Link>
        <a
          href="https://github.com/inji0212"
          className="text-foreground hover:text-fuchsia-500 "
        >
          <FaGithub />
        </a>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
