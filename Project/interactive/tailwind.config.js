module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin' : 'reverse-spin 40s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    
      colors: {
        homeImg: '#DCE4F7',
        darkHome: '#7885AA',
        
        moredarkHome: '#13181C',
        // ARbg: '#80ffd4',
        page404A: "#1C1023",
        page404B: "#B53FA6",
        page404C: "#351945",
        blue: {
          dark: "#282C4D",
          light: "#E3EEF4",
        }
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'carattere': ['Carattere', 'cursive'],
      'sourceSerifPro': ['Source Serif Pro'],
      "fontVollkorn": ['Vollkorn'],
      'body': ['Open Sans'],
      'Arapey': ['Arapey', 'serif'],
      'Overpass': ['Overpass', 'sans-serif']
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
