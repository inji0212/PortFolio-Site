// components/sections/About.tsx
import Button from "@/components/ui/button";
import React from "react";

const About: React.FC = () => (
  <section
    id="about"
    className="py-20 flex justify-center flex-col items-center min-h-screen"
  >
    <h2 className="text-6xl font-bold mb-10 text-center">ABOUT</h2>
    {/* min-h-screen을 사용하여 최소 높이 설정 */}
    <div className="flex flex-col md:flex-row items-center h-4/5">
      {" "}
      {/* 높이 값을 수정하여 더 키우기 */}
      <img
        src="/img/profile.png" // 본인 사진 경로로 수정
        alt="Inji Lee"
        className="w-60 h-auto rounded-3xl hover:scale-105 mb-4 md:mb-0 transform transition-transform duration-200"
      />
      <div className="ml-0 md:ml-10 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2">
          안녕하세요! 프론트엔드 개발자 이인지입니다.
        </h2>
        <div className="flex space-x-4 mt-4">
          <Button href="https://github.com/inji0212">GitHub</Button>
          <Button href="mailto:in22ji@gmail.com">Email</Button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="btn bg-fuchsia-600 text-white rounded-lg px-5 py-2 hover:scale-110 transform transition-transform"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
