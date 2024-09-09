import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className=" container flex h-16 justify-between  items-center border-b border-gray-200 bg-header">
      <Link href={"/"}>Inji's</Link>
      <div className="flex flex-row items-center space-x-1">
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
