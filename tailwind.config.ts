import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        black: "#17181A",
        white: "#ffffff",
        gray50: "#F9F9F9",
        gray100: "#e5e7eb",
        gray200: "#969697",
        gray300: "#27272A",
        red100: "#EF4444",
        red200: "#7f1d1d",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
      },
      fontWeight: {
        thin: "300",
        regular: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
