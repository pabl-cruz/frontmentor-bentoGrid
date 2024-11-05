/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
  ],
  theme: {
    container: {
      center: true,
    },
    colors:{
     'purple-100': '#dacffc',
     'purple-500': '#7650dc',
     'yellow-100': '#f9eee1',
     'yellow-500': '#ffcb6b',
     'black': '#121212',
     'white': '#ffffff',
     'grey-100': '#fafafa',
    },
    fontFamily:{
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      container:{
        screens:{
          'md': '1120px', 
        }
      },
      fontFamily:{
        italic: 'DM Sans Italic',
      },
      spacing:{
        '156': '37rem',
      },
      height:{
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}

