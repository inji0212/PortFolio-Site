// components/common/LinkButton.tsx
import React from "react";

type LinkButtonProps = {
  href: string; // 링크 주소
  children: React.ReactNode; // 버튼 내에 표시될 콘텐츠
  className?: string; // 추가적인 CSS 클래스
};

const Button: React.FC<LinkButtonProps> = ({ href, children, className }) => {
  const isMailto = href.startsWith("mailto:"); // mailto: 링크 여부 확인

  const handleClick = () => {
    if (isMailto) {
      // mailto 링크는 location.href로 처리
      window.location.href = href;
    }
  };

  // mailto인 경우에는 button, 아닌 경우에는 a 태그 사용
  if (isMailto) {
    return (
      <button
        onClick={handleClick}
        className={`"btn bg-fuchsia-600 text-white rounded-lg px-5 py-2   hover:scale-110 transform transition-transform" ${className}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        href={href}
        className={`"btn bg-fuchsia-600 text-white rounded-lg px-5 py-2   hover:scale-110 transform transition-transform" ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default Button;
