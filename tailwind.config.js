module.exports = {
  // mode: 'jit',
  // // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: 'black',
      light: 'white',
      primary: '#01559A',
      accent: '#D25C78',
      stone: '#e7e5e4',
      rose: '#fb7185',
      cyan: {
        600: '#0891b2',
        500: '#06b6d4',
        100: '#cffafe',
      },
    },
    extend: {
      height: { header: '95px' },
      minHeight: {
        'screen-50': '50vh',
      },
    },
  },
  plugins: [],
}
