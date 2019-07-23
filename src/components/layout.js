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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Global styles={{ body: { margin: 0 } }} />
      <Container>{children}</Container>
    </Styled.root>
  )
}

export default Layout
