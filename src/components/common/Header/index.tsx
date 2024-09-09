import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="  w-full flex h-[70px] justify-between  items-center border-b border-gray-200 dark:border-gray-800 bg-header px-[11vw] ">
      <Link href={"/"}>Inji's</Link>
      <div className="flex flex-row items-center space-x-2">
        <Link href={"/contact"}>Contact</Link>
        <a href="https://github.com/inji0212">
          <FaGithub />
        </a>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
