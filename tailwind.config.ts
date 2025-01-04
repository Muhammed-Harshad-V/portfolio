import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	'./@/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			primary: [
  				'var(--font-Bebas Neue)'
  			]
  		},
  		colors: {
  			retroBlack: '#0a0a09',
  			retroGold: '#D4AF37',
  			retroGreen: '#62f00c',
  			retroWhite: '#F5F5DC',
  			silver: '#C0C0C0',
  			retroOrange: '#f78605',
  			retroTeal: '#4682B4',
  			retroRed: '#CD5C5C',
  			retroBlue: '#5F9EA0',
  			retroYellow: '#FFD700',
  			retroPink: '#D87093',
  			retroBrown: '#8B4513',
  			retroGrey: '#696969',
  			retroPurple: '#9370DB',
  			retroMint: '#98FF98',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			sm: '300px',
  			md: '480px',
  			lg: '768px',
  			xl: '1024px'
  		},
  		dropShadow: {
  			greenGlow: [
  				'0 0px 3px rgba(98, 240, 12, 0.7)',
  				'0 0px 3px rgba(98, 240, 12, 0.5)',
  				'0 0px 20px rgba(98, 240, 12, 0.25)'
  			],
  			purpleGlow: [
  				'0 0px 3px rgba(147, 112, 219, 0.7)',
  				'0 0px 3px rgba(147, 112, 219, 0.5)',
  				'0 0px 20px rgba(147, 112, 219, 0.25)'
  			],
  			whiteGlow: [
  				'0 0px 3px rgba(255, 255, 255, 0.7)',
  				'0 0px 3px rgba(255, 255, 255, 0.5)',
  				'0 0px 20px rgba(255, 255, 255, 0.25)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			shine: 'shine var(--duration) infinite linear',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		keyframes: {
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
