/** @jsx jsx */
import Helmet from 'react-helmet'
import { jsx } from 'theme-ui'
import Header from './header'

export default function Layout({ children, pageContext }) {
  return (
    <div>
      <Helmet>
        <title>{pageContext.frontmatter.title}</title>
      </Helmet>
      <Header />
      <div sx={{ maxWidth: 'container', mx: 'auto', p: 4 }}>
        <h1 sx={{ variant: 'styles.h1' }}>{pageContext.frontmatter.title}</h1>
        {children}
      </div>
    </div>
  )
}
