"use client";
import { useEffect, useState } from "react";

const IntroText = ({ words }: { words: string[] }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 50; // 삭제 속도
    }

    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        // 타이핑 중
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));

        if (displayedText === currentWord) {
          // 단어 끝에 도달했을 때, 삭제 시작
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // 삭제 중
        setDisplayedText((prev) => currentWord.substring(0, prev.length - 1));

        if (displayedText === "") {
          // 다음 단어로 이동
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, words]);

  return <h1 className="text-4xl font-bold">{displayedText}</h1>;
};

export default IntroText;
