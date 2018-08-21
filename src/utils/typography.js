import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['400'],
    },
    {
      name: 'Source Code Pro',
      styles: ['400', '300', '600'],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Source Sans Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Source Code Pro', 'serif'],
})

export default typography
