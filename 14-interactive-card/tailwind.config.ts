import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-1": "hsl(249, 99%, 64%)",
        "gradient-2": "hsl(278, 94%, 30%)",
        "red-error": "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        space: ["Space Grotesk, sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/images/bg-main-desktop.png')",
        mobile: "url('/images/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
export default config;
