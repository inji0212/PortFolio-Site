"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const introText = "Transforming ideas into digital reality.";
  const nameText = "Frontend Developer, Lee Inji.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + introText[index]);
      index += 1;
      if (index === introText.length) {
        clearInterval(interval);
        setTimeout(() => setIntroComplete(true), 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!introComplete) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.h1>
      </div>
    );
  }

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ x: "100vw", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => setIntroComplete(false)}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {nameText}
      </motion.h2>
    </motion.div>
  );
};

export default Intro;
