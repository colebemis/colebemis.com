export default {
  colors: {
    text: '#f7f7f7',
    background: '#1a1a1a',
    secondary: '#808080',
  },
  fonts: {
    body: '"IBM Plex Sans", system-ui, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    container: '60ch',
  },
  text: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
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
      borderColor: 'secondary',
      ':hover': {
        borderColor: 'inherit',
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
  },
}
