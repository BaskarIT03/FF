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
				// New color scheme with light pink and raisin
				'light-pink': '#FFB3D9',
				'raisin': '#3C2830',
				'soft-pink': '#FDF0F5',
				'dark-raisin': '#2A1F26',
				// Keep existing FabricFusion colors for compatibility
				'deep-sea-teal': '#144552',
				'soft-blush-beige': '#FDF0D5',
				'radiant-orchid': '#C084FC',
				'gold-bronze': '#F4A261',
				'indigo-start': '#5B2C6F',
				'indigo-end': '#8E44AD',
				'deep-charcoal': '#1F1F1F',
				'whisper-white': '#FAFAFA',
				'aqua-mint': '#3DDC97',
				'paper-cream': '#FFF7EC',
				'pink-coral': '#FF5F7E',
				// Legacy colors for compatibility
				'main': '#FAFAFA',
				'main-bg': '#3C2830',
				'rose-gold': 'hsl(var(--rose-gold))',
				'dusty-rose': 'hsl(var(--dusty-rose))',
				'cream': 'hsl(var(--cream))',
				'sage': 'hsl(var(--sage))',
				'lavender': 'hsl(var(--lavender))',
				'accent-blue': 'hsl(var(--accent-blue))',
				'warm-gold': 'hsl(var(--warm-gold))'
			},
			backgroundImage: {
				'indigo-gradient': 'linear-gradient(135deg, #5B2C6F 0%, #8E44AD 100%)',
				'pink-raisin-gradient': 'linear-gradient(135deg, #FFB3D9 0%, #3C2830 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				inter: ['Inter', 'sans-serif'],
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
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				fadeInUp: {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				scaleIn: {
					from: {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				shimmer: {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				floatShapes: {
					'0%': { transform: 'translateY(100vh) rotate(0deg)' },
					'100%': { transform: 'translateY(-100px) rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'scale-in': 'scaleIn 0.5s ease-out forwards',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'bounce-slow': 'bounce 2s infinite',
				shimmer: 'shimmer 2s infinite',
				'float-shapes': 'floatShapes 20s infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
