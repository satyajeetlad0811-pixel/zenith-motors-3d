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
        background: "#08090C",
        surface: {
          DEFAULT: "#0F1117",
          50: "#161922",
          100: "#1C202B",
          200: "#242938",
          300: "#2D3447",
        },
        brand: {
          cyan: "#00F0FF",
          blue: "#3B82F6",
          amber: "#F59E0B",
          emerald: "#10B981",
          purple: "#8B5CF6",
        },
        metallic: {
          silver: "#E2E8F0",
          platinum: "#CBD5E1",
          gunmetal: "#475569",
          titanium: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 60%)",
        "radial-hero": "radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.12) 0%, rgba(0, 0, 0, 0) 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.3)",
        "neon-blue": "0 0 30px -5px rgba(59, 130, 246, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;
