"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleToggle = () =>
    setTheme(currentTheme === "dark" ? "light" : "dark");
  return (
    <button
      onClick={handleToggle}
      className="bg-pink-100 dark:bg-white flex items-center transition duration-300 focus:outline-none shadow"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
