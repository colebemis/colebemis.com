export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#1a1a1a',
    background: '#f7f7f7',
    gray: '#aaa',
    muted: '#eee',
    accent: '#FF0080',
    modes: {
      dark: {
        text: '#f7f7f7',
        background: '#1a1a1a',
        gray: '#808080',
        muted: '#333',
        accent: '#79FFE1',
      },
    },
  },
  fonts: {
    body: '"IBM Plex Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", monospace',
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
    container: '65ch',
  },
  radii: [0, 4],
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
      borderColor: 'gray',
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
    pre: {
      p: 3,
      bg: 'muted',
      overflowX: 'auto',
      borderRadius: 1,
    },
    code: {
      fontFamily: 'mono',
    },
    inlineCode: {
      p: 1,
      color: 'accent',
      bg: 'muted',
      fontFamily: 'mono',
      borderRadius: 1,
    },
    img: {
      maxWidth: '100%',
      boxSizing: 'content-box',
      borderRadius: 1,
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
      borderLeft: '2px solid',
      borderColor: 'gray',
    },
    hr: {
      height: 2,
      my: '1em',
      bg: 'gray',
      border: 0,
    },
  },
}
