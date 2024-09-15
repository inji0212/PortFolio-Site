// hooks/useImageSlider.ts
import { useState, useEffect } from "react";

export const useImageSlider = (
  images: string[],
  autoSlide: boolean = false,
  intervalTime: number = 5000
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return; // 자동 슬라이드가 비활성화된 경우, 슬라이드하지 않음

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime, autoSlide]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return { currentImageIndex, nextImage, prevImage };
};
