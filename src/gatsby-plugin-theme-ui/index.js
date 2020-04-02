export default {
  colors: {
    text: '#333',
    background: '#FFF',
    primary: '#5551FF',
  },
  fonts: {
    body: 'system-ui, sans-serif',
  },
  lineHeights: {
    body: 1.5,
  },
  sizes: {
    container: '60ch',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 3,
      lineHeight: 'body',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: '2px solid',
      borderColor: 'rgba(0,0,0,0.2)',
      ':hover': {
        color: 'primary',
        borderColor: 'currentColor',
      },
    },
    h1: { fontSize: 6 },
    h2: { fontSize: 5 },
    h3: { fontSize: 4 },
    h4: { fontSize: 3 },
    h5: { fontSize: 2 },
    h6: { fontSize: 1 },
  },
}
