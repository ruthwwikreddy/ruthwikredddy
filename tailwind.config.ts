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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					'primary': '#ea384c',
					'secondary': '#c2152a',
					'accent': '#222222',
					'dark': '#000000',
					'light': '#333333'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
				'neon-red': '0 0 10px rgba(234, 56, 76, 0.7), 0 0 20px rgba(234, 56, 76, 0.5)',
				'glitch-red': '0 0 10px rgba(234, 56, 76, 0.7), -3px -1px 1px rgba(0, 0, 0, 0.5), 3px 1px 1px rgba(255, 255, 255, 0.8)',
				'neon-breath': '0 0 10px rgba(234, 56, 76, 0.6), 0 0 20px rgba(234, 56, 76, 0.3), 0 0 30px rgba(234, 56, 76, 0.1)',
				'3d-shadow': '5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(234, 56, 76, 0.1)',
				'inner-glow': 'inset 0 0 15px rgba(234, 56, 76, 0.5)',
			},
			boxShadow: {
				'neon-glow': '0 0 10px rgba(234, 56, 76, 0.7), 0 0 20px rgba(234, 56, 76, 0.3)',
				'neon-pulse': '0 0 10px rgba(234, 56, 76, 0.7), 0 0 20px rgba(234, 56, 76, 0.3), 0 0 30px rgba(234, 56, 76, 0.1)',
				'neon-strong': '0 0 15px rgba(234, 56, 76, 0.8), 0 0 30px rgba(234, 56, 76, 0.5), 0 0 45px rgba(234, 56, 76, 0.2)',
				'neon-breath': '0 0 10px rgba(234, 56, 76, 0.6), 0 0 20px rgba(234, 56, 76, 0.3), 0 0 30px rgba(234, 56, 76, 0.1)',
				'3d-shadow': '5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(234, 56, 76, 0.1)',
				'inner-glow': 'inset 0 0 15px rgba(234, 56, 76, 0.5)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'border-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'magnetic-float': {
					'0%, 100%': { transform: 'translateY(0) translateX(0)' },
					'25%': { transform: 'translateY(-5px) translateX(3px)' },
					'50%': { transform: 'translateY(0) translateX(0)' },
					'75%': { transform: 'translateY(5px) translateX(-3px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.03)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.8s ease-out',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'border-flow': 'border-flow 3s ease infinite',
				'magnetic-float': 'magnetic-float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'breathe': 'breathe 4s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'text-shadow': (value: string) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			);
		},
	],
} satisfies Config;
