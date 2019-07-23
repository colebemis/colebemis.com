import { Global } from '@emotion/core'
import React from 'react'
import { Styled } from 'theme-ui'
import 'typeface-inter'
import Container from '../components/container'

function Layout({ children }) {
  return (
    <Styled.root>
      <Global styles={{ body: { margin: 0 } }} />
      <Container>{children}</Container>
    </Styled.root>
  )
}

export default Layout
