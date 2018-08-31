import { graphql, StaticQuery } from 'gatsby'
import { node } from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import Logo from './Logo'
import './layout.css'

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
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
