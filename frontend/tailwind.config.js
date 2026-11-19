/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFBF7',
          100: '#FBF9F5',
          200: '#F4F0E8',
          300: '#ECE7DD',
          400: '#DDD6C7',
          500: '#C2B8A3',
          900: '#1D1A16',
        },
        terracotta: {
          400: '#FF5E48',
          500: '#FF462D',
          600: '#EB3300',
          700: '#D82C00',
          800: '#B02400',
        },
        charcoal: {
          800: '#1A1A1A',
          900: '#121212',
          950: '#0D0D0D',
        },
        slateMoss: {
          800: '#2C3531',
          900: '#1E2421',
        }
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      letterSpacing: {
        eyebrow: '0.08em',
      },
      boxShadow: {
        'kyndryl': '0 16px 36px rgba(0, 0, 0, 0.06)',
        'kyndryl-hover': '0 24px 48px rgba(0, 0, 0, 0.09)',
        'quantum-glow': '0 0 50px -10px rgba(255, 70, 45, 0.35)',
      }
    },
  },
  plugins: [],
}

