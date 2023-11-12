import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      backgroundColor: {
        body: "var(--primary-body-bg-clr)",
        navbar: "var(--navbar-bg-clr)",
        primary: {
          purple: "var(--primary-purple-clr)",
        },
      },
      backgroundImage: {
        grayRadialGradient:
          "radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 103, 103, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      colors: {
        dark: {
          DEFAULT: "var(--primary-dark-text-clr)",
        },
        light: {
          DEFAULT: "var(--primary-light-text-clr)",
          fadedGray: "var(--secondary-light-text-clr)",
        },
        accent: {
          purple: "var(--primary-purple-clr)",
          red: "var(--primary-red-clr)",
        },
      },
      fontSize: {
        h2: "var(--h2-font-size)",
        para: "var(--para-font-size)",
        btn: "var(--btn-font-size)",
      },
    },
  },
  plugins: [],
};
export default config;
