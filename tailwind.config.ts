import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: "#061226", emerald: "#15d08f", electric: "#39a0ff" }, boxShadow: { glow: "0 0 24px rgba(57,160,255,0.45)" } } },
  plugins: []
};
export default config;
