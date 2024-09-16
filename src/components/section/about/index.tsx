// components/sections/About.tsx
import Button from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 400) {
        // 가장 작은 화면 - 4줄
        setDisplayText(
          "안녕하세요!<br/>프론트엔드<br/>개발자<br/>이인지입니다."
        );
      } else if (width < 600) {
        // 중간 크기의 화면 - 3줄
        setDisplayText("안녕하세요!<br/>프론트엔드 개발자<br/>이인지입니다.");
      } else {
        // 기본 - 2줄
        setDisplayText("안녕하세요!<br/>프론트엔드 개발자 이인지입니다.");
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 화면 크기 변경 이벤트에 리스너 추가

    return () => window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 리스너 제거
  }, []);

  return (
    <section
      id="about"
      className="py-20 flex justify-center flex-col items-center min-h-screen"
    >
      <h2 className="text-5xl font-bold mb-10 text-center">ABOUT ME</h2>
      <div className="flex flex-col md:flex-row items-center h-4/5">
        <img
          src="/img/profile.png" // 본인 사진 경로로 수정
          alt="Inji Lee"
          width={224}
          className="w-56 h-auto rounded-3xl hover:scale-105 mb-4 md:mb-0 transform transition-transform duration-200"
        />
        <div className="ml-0 md:ml-10 text-center md:text-left">
          <h2
            className="text-3xl font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: displayText }} // HTML로 줄바꿈 적용
          ></h2>
          <p className="font-semibold text-lg">Birth | 1999.02.12</p>
          <p className="font-semibold text-lg">Email | in22ji@gmail.com</p>
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            <Button href="https://github.com/inji0212">GitHub</Button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="btn bg-fuchsia-600 text-white rounded-lg px-5 py-2 hover:underline transform transition-transform"
            >
              Contact
            </button>
          </div>
          <p className="font-semibold text-xs pt-20">Update.24.09.16</p>
        </div>
      </div>
    </section>
  );
};

export default About;
