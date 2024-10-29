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
        'dv-purple-v0': '#EFEBFF',
        'dv-purple-v1': '#BEADFF',
        'dv-purple-v2': '#633CFF',

        'dv-black-v0': '#333333',
        'dv-black-v1': '#737373',
        'dv-black-v2': '#D9D9D9',
        'dv-black-v3': '#FAFAFA',

        'dv-red-v0': '#FF3939'
      },
    },
  },
  plugins: [],
};
export default config;
