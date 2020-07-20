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
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    container: '65ch',
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
      borderBottom: '1px solid',
      borderColor: 'currentColor',
      ':hover': {
        color: 'accent',
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
    pre: {
      p: 3,
      bg: 'muted',
      overflowX: 'auto',
    },
    code: {
      fontFamily: 'mono',
      fontSize: '80%',
    },
    inlineCode: {
      p: '0.1em 0.25em',
      bg: 'muted',
      fontFamily: 'mono',
      fontSize: '80%',
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
