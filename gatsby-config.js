module.exports = {
  siteMetadata: {
    title: 'Cole Bemis',
    description:
      'Frontend developer, designer, lifelong learner, dog lover. Studying computer science at Cal Poly. Intern at iFixit.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cole Bemis',
        short_name: 'colebemis',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#eb3349',
        display: 'minimal-ui',
        icon: 'src/images/colebemis-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
}
