import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/Header";
import pretendard from "@/styles/fonts";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "Inji's PortFolio",
  description: "frontend developeer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
