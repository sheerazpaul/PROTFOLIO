/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== OPTION 1: Soft Blue =====
        // primary: '#3B82F6',
        // secondary: '#60A5FA',
        // dark: '#0B1120',
        // card: '#1E293B',
        // softGray: '#94A3B8',

        // ===== OPTION 2: Soft Green =====
        // primary: '#10B981',
        // secondary: '#34D399',
        // dark: '#0F172A',
        // card: '#1E293B',
        // softGray: '#94A3B8',

        // ===== OPTION 3: Soft Rose =====
        // primary: '#F43F5E',
        // secondary: '#FB7185',
        // dark: '#0F0F1A',
        // card: '#1A1A2E',
        // softGray: '#94A3B8',

        // ===== OPTION 4: Soft Amber =====
        // primary: '#F59E0B',
        // secondary: '#FBBF24',
        // dark: '#1A120B',
        // card: '#2D1F14',
        // softGray: '#A8A29E',

        // ===== OPTION 5: Soft Teal =====
        // primary: '#14B8A6',
        // secondary: '#2DD4BF',
        // dark: '#0F172A',
        // card: '#1E293B',
        // softGray: '#94A3B8',

        // ===== OPTION 6: Soft Indigo (Current) =====
        primary: '#6366F1',
        secondary: '#818CF8',
        dark: '#0F0F1A',
        card: '#1A1A2E',
        softGray: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}