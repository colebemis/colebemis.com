export default {
  colors: {
    text: 'rgba(0,0,0,0.87)',
    background: '#fff',
    muted: '#f0f0f0',
    accent: '#eb4962',
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    container: '70ch',
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
      fontSize: 2,
      lineHeight: 'body',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: 'currentColor',
      ':hover': {
        color: 'accent',
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 6],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5],
    },
    h3: {
      variant: 'text.heading',
      fontSize: [3, 4],
    },
    h4: {
      variant: 'text.heading',
      fontSize: [2, 3],
    },
    h5: {
      variant: 'text.heading',
      fontSize: [1, 2],
    },
    h6: {
      variant: 'text.heading',
      fontSize: [0, 1],
    },
    pre: {
      p: 3,
      bg: 'muted',
      overflowX: 'auto',
    },
    code: {
      fontFamily: 'mono',
      fontSize: '85%',
    },
    inlineCode: {
      p: '0.1em 0.25em',
      bg: 'muted',
      fontFamily: 'mono',
      fontSize: '85%',
    },
    img: {
      maxWidth: '100%',
      boxSizing: 'content-box',
    },
    table: {
      display: 'block',
      width: '100%',
      my: '1em',
      overflow: 'auto',
      borderCollapse: 'collapse',
    },
    th: {
      px: 3,
      py: 2,
      fontWeight: 'heading',
      border: '1px solid',
      borderColor: 'gray',
    },
    td: {
      px: 3,
      py: 2,
      border: '1px solid',
      borderColor: 'gray',
    },
    blockquote: {
      mx: 0,
      px: 3,
      borderLeft: '4px solid',
      borderColor: 'muted',
    },
    hr: {
      height: 1,
      my: '2em',
      bg: 'gray',
      border: 0,
    },
  },
}
