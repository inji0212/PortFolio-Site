"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleToggle = () =>
    setTheme(currentTheme === "dark" ? "light" : "dark");
  return (
    <switch
      onClick={handleToggle}
      className="  text-black dark:text-purple-400 flex items-center transition duration-300 "
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </switch>
  );
}
