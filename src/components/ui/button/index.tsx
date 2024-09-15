// components/common/LinkButton.tsx
import React from "react";

type LinkButtonProps = {
  href: string; // 링크 주소
  children: React.ReactNode; // 버튼 내에 표시될 콘텐츠
  className?: string; // 추가적인 CSS 클래스
};

const Button: React.FC<LinkButtonProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`"btn bg-fuchsia-600 text-white rounded-lg px-5 py-2 hover:underline transform transition-transform" ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
