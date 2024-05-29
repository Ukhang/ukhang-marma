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
        primary: "#2C2C2E",
        secondary: "#F2F2F7",
      },
      screens: {
        cxl: "1440px",
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
