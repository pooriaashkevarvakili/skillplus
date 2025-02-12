import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],

  plugins: [flowbite.plugin()],
  screens: {
  
   

    smone: { min: "0px", max: "360px" },
    sm: { min: "361px", max: "480px" },
    // => @media (min-width: 640px) and (max-width: 767px) {... }

    md: { min: "481px", max: "900px" },
    // => @media (min-width: 768px) and (max-width: 1023px) {... }

    lg: { min: "901px", max: "1280px" },

    xlg: { min: "1281px", max: "1365px" },
    // => @media (min-width: 1024px) and (max-width: 1279px) {... } portate tbal
    laptopmini: { min: "1366px", max: "1440px" },

    laptop: { min: "1441px", max: "1919px" },

    xl: { min: "1920px" },
  },
};
export default config;
