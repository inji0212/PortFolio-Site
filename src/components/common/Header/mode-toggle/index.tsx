// components/common/Header/mode-toggle.tsx
"use client";
import React, { memo } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = memo(function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isChecked = currentTheme === "light";

  const handleChange = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`inline-flex items-center ${isChecked ? "opacity-100" : ""}`}
    >
      <div
        onClick={handleChange}
        className={`relative flex items-center justify-start w-14 h-[30px] rounded-full transition-colors duration-300 ease-in-out ${
          isChecked ? "bg-fuchsia-100" : "bg-gray-400"
        } cursor-pointer`}
      >
        <span
          className={`absolute rounded-full transform transition-transform duration-300 ease-in-out cursor-pointer shadow ${
            isChecked
              ? "translate-x-[28px] bg-white"
              : "translate-x-[4px] bg-gray-800"
          } w-[24px] h-[24px] flex items-center justify-center`}
        >
          {isChecked ? (
            <Sun
              size={18}
              className="text-fuchsia-600 transition-colors duration-300 ease-in-out"
            />
          ) : (
            <Moon
              size={18}
              className="text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          )}
        </span>
      </div>

      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only"
      />
    </div>
  );
});

export default ModeToggle;
