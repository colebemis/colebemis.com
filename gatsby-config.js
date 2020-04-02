module.exports = {
  siteMetadata: {
    title: 'Cole Bemis',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [{ family: 'IBM Plex Sans', variants: [400, 600] }],
      },
    },
  ],
}
