/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors:{
          primaryColor: '#055270',
          secondaryColor: '#07D0C4',
          accentColor: '#3b82f6',
          bgColor: '#F1F5F9',
          textColor:'#333333',
          white: '#FFFFFF',
          black: '#000000',
          highlightColor:'#3b82f6',
          darkGrey: '#94a3b8',
          red:'#e11d48',
          starColor:'#fde047',
      },
      extend: {
        animation: {
          'bounce-slow': 'bounce 8s linear infinite',
          'bg-border': 'background ease infinite',
        },
        keyframes: {
          background: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        }
      },
    },
  plugins: [],
}

