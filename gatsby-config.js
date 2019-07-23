module.exports = {
  siteMetadata: {
    title: 'Cole Bemis',
    description:
      'Frontend engineer, designer, lifelong learner, dog lover. Studying computer science at Cal Poly. Intern on the GitHub Design Systems team.',
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
  ],
}
