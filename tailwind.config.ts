import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#1E3A8A',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#FBB03B',
          foreground: '#1E3A8A'
        },
        accent: {
          DEFAULT: '#F3F4F6',
          foreground: '#1E3A8A'
        }
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;