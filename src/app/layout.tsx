import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import pretendard from "@/styles/fonts";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "Inji's PortFolio",
  description: "frontend developeer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
