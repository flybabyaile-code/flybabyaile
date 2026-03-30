import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
      },
      colors: {
        cyan: {
          400: "#00d9ff",
          500: "#00d9ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
