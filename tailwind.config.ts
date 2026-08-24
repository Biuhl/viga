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
        "space-indigo": "#2b2d42",
        "lavender-grey": "#8d99ae",
        "platinum": "#edf2f4",
        "punch-red": "#ef233c",
        "flag-red": "#d90429",
      },
    },
  },
  plugins: [],
};
export default config;