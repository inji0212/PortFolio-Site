// app/layout.tsx (또는 RootLayout 파일)
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/Header";
import pretendard from "@/styles/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Inji's Portfolio",
  description: "frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="bg-background duration-300 ease-in-out transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
