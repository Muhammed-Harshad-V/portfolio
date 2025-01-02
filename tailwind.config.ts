import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Bebas Neue'],
        'secondary': ['Open Sans', 'sans-serif'],
      },
      colors: {
          // Core Retro Palette
          retroBlack: "#0e0d0d",
          retroGold: "#D4AF37",
          retroGreen: "#62f00c",
          retroWhite: "#F5F5DC",
          silver: '#C0C0C0',
          retroOrange: "#FF7F50", // Warm and vibrant
          retroTeal: "#4682B4",   // Calm and cool
          retroRed: "#CD5C5C",    // Muted red with vintage vibes
          retroBlue: "#5F9EA0",   // Soft blue, adds elegance
          retroYellow: "#FFD700", // Bright, retro pop
          retroPink: "#D87093",   // Subtle pink for softer accents
          retroBrown: "#8B4513",  // Rich brown for grounded elements
          retroBeige: "#F5F5DC",  // Neutral for balance
          retroGrey: "#696969",   // Vintage muted grey
          retroPurple: "#9370DB", // Warm, muted purple
          retroMint: "#98FF98",   // Fresh, retro mint green
      },
      screens: {
        'sm': '300px',  // Adding a custom breakpoint
        'md': '480px',  // Changing the 'md' breakpoint to 800px
        'lg': '768px',
        'xl': '1024px',
      },
    },
  },
  plugins: [],
} satisfies Config;
