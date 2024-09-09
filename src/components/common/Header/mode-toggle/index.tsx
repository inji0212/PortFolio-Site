"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  // 현재 테마를 가져옵니다.
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isChecked = currentTheme === "light"; // 체크 상태를 다크 모드인지 여부로 결정합니다.

  // 토글 스위치 상태를 변경하는 함수
  const handleChange = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`inline-flex items-center ${isChecked ? "opacity-100" : ""}`}
    >
      {/* 스위치 body */}
      <div
        onClick={handleChange}
        className={`relative flex items-center justify-start w-14 h-[30px] rounded-full transition-colors duration-300 ease-in-out ${
          isChecked ? "bg-fuchsia-100" : "bg-gray-400"
        } cursor-pointer`}
      >
        {/* 스위치 toggle */}
        <span
          onClick={handleChange}
          className={`absolute rounded-full transform transition-transform duration-300 ease-in-out cursor-pointer shadow ${
            isChecked
              ? "translate-x-[28px] bg-white"
              : "translate-x-[4px] bg-gray-800"
          } w-[24px] h-[24px] flex items-center justify-center`}
        >
          {/* 토글 상태에 따라 아이콘 변경 */}
          {isChecked ? (
            <Sun
              size={18}
              className="text-fuchsia-600 transition-all duration-300 ease-in-out p-0 "
            /> // 다크 모드 아이콘
          ) : (
            <Moon
              size={18}
              className="text-yellow-400 transition-all duration-300 ease-in-out"
            /> // 라이트 모드 아이콘
          )}
        </span>
      </div>

      {/* 체크박스 숨김 */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only"
      />
    </div>
  );
}
