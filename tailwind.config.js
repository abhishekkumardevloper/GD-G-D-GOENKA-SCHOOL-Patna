/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081424',
          900: '#0B1C33',
          850: '#0E223D',
          800: '#102747', // Deep navy blue from spec
          700: '#183864',
          600: '#204980',
        },
        royal: {
          700: '#1D4585',
          600: '#2455A4', // Royal blue from spec
          500: '#346BCA',
          100: '#EAF0FA',
          50: '#F2F6FC',
        },
        gold: {
          700: '#9B7C37',
          600: '#B08E44',
          500: '#C7A45A', // Warm gold accent from spec
          400: '#D8B86E',
          300: '#E8D099',
          100: '#FBF6EA',
          50: '#FDFBF5',
        },
        surface: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F5F7FA', // Soft background from spec
          300: '#EDF1F7',
          400: '#E2E8F0',
        },
        charcoal: {
          900: '#141B24',
          800: '#202A38', // Dark text from spec
          700: '#334155',
          600: '#475569',
          500: '#687386', // Muted text from spec
          400: '#94A3B8',
          300: '#CBD5E1',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 39, 71, 0.05), 0 1px 2px -1px rgba(16, 39, 71, 0.05)',
        'card': '0 4px 20px -2px rgba(16, 39, 71, 0.06), 0 2px 6px -1px rgba(16, 39, 71, 0.04)',
        'elevated': '0 10px 30px -4px rgba(16, 39, 71, 0.1), 0 4px 10px -2px rgba(16, 39, 71, 0.05)',
        'gold-glow': '0 0 20px rgba(199, 164, 90, 0.25)',
      }
    },
  },
  plugins: [],
}
