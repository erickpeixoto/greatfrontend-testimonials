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
        white: "#FFFFFF",
        neutral: {
          900: "#171717",
          600: "#525252",
        },
        customGray: "#F9FAFB",
        customGrayLight: "#D2D6DB",
      },
      fontSize: {
        sm: [".875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
      },
      gradientColorStops: {
        'custom-gradient-start': '#F9FAFB',
        'custom-gradient-end': '#D2D6DB',
      },
    },
  },
  plugins: [],
};
export default config;
