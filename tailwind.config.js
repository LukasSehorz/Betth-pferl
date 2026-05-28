/** @type {import('tailwindcss').Config} */
import relumePreset from "@relume_io/relume-tailwind";

export default {
  content: [
    "./index.html",
    "./**/*.{js,jsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,jsx}",
  ],
  presets: [relumePreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
