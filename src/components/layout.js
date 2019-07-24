import { Global } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Styled } from 'theme-ui'
import 'typeface-inter'
import Container from '../components/container'

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Styled.root>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://colebemis.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Global styles={{ body: { margin: 0 } }} />
      <Container>{children}</Container>
    </Styled.root>
  )
}

export default Layout
