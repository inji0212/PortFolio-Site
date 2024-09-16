"use client";
import React from "react";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";

const HomePage: React.FC = () => {
  // const [, setShowMain] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowMain(true), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
