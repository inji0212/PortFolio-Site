"use client";
import React, { useState, useEffect } from "react";
import Intro from "../components/intro";
import Header from "../components/common/header";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";

const HomePage: React.FC = () => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {!showMain ? (
        <Intro />
      ) : (
        <>
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
};

export default HomePage;
