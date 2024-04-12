import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFFFFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        secondary2: "#DB4444",
        text: "#FAFAFA",
        text1: "#7D8184",
        blacks: "#000000",
        button1: "#00FF66",
        hover1: "#E07575",
        hover2: "#A0BCE0",
      },
    },
  },
  plugins: [],
};
export default config;
