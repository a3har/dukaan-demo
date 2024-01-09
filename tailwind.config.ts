import type { Config } from "tailwindcss"

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
        primary: {
          blue: "#146EB4",
        },
        secondary: {
          navbar: "#1E2640",
        },
        black: {
          "12": "#1A181E",
          "30": "#4D4D4D",
          "50": "#808080",
          "60": "#999999",
          "85": "#D9D9D9",
          "90": "#E6E6E6",
          DEFAULT: "#000000",
        },
      },
      boxShadow: {
        table: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
      },
    },
  },
  plugins: [],
}
export default config
