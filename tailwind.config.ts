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
        base: "url('/base.png')",
        sea: "url('/Rectangle3.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        map: "url('/map.png')",
        person: "url('/image71.png')",
      },
      fontFamily: {
        preahvihear: ["var(--font-preahvihear)"],
        karla: ["var(--font-roboto-karla)"],
      },
      animation:{
        
      }
    },
  },
  plugins: [],
};
export default config;
