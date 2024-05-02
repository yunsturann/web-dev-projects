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
        "var-black": "#12141D",
        "var-blue": "#2B59FF",
        "var-gray": "#BAB7B7",
        "var-light-gray": "#E3E3E3",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
