import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink:"#17243b", muted:"#718096", line:"#e7edf4", canvas:"#f6f8fc", brand:"#4969e8", mint:"#dff7ee", coral:"#ff8e7d" },
    boxShadow: { soft:"0 12px 40px rgba(34,55,95,.07)", lift:"0 18px 50px rgba(34,55,95,.12)" },
    borderRadius: { "4xl":"2rem" },
    fontFamily: { sans:["var(--font-inter)","Inter","sans-serif"] }
  }},
  plugins: []
};
export default config;