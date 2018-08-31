import { MDXProvider } from '@mdx-js/tag'
import { graphql, StaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { node } from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import './layout.css'
import Logo from './logo'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <main>
          <Logo style={{ marginBottom: 64, color: 'var(--accent)' }} />
          <MDXProvider components={{ a: OutboundLink }}>{children}</MDXProvider>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
