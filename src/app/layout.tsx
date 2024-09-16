import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "../components/common/header";
import pretendard from "@/styles/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "이인지 | 프론트엔드 포트폴리오",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.variable}>
      <head>
        {/* 파비콘 다크모드설정 */}
        <link
          rel="icon"
          href="/img/in_light.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme:light)"
        />
        <link
          rel="icon"
          href="/img/in_dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme:dark)"
        />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
