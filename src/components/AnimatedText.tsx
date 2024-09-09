"use client";
import { useEffect, useState } from "react";

const AnimatedText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="text-4xl font-bold">{displayedText}</h1>;
};

export default AnimatedText;
