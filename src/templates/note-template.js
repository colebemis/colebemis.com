/** @jsx jsx */
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { jsx } from 'theme-ui'
import * as timeago from 'timeago.js'
import Logo from '../components/logo'

export default function Layout({ children, pageContext }) {
  const title = pageContext.frontmatter.title
  const date = pageContext.frontmatter.date
  const published = pageContext.frontmatter.published
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        sx={{
          maxWidth: 'container',
          px: [3, 5],
          py: [4, 5],
        }}
      >
        <div sx={{ mb: [4, 5] }}>
          <Link to="/" sx={{ color: 'accent' }}>
            <Logo />
          </Link>
        </div>
        <main>
          <div sx={{ mb: [3, 4] }}>
            {!published ? (
              <div
                sx={{
                  display: 'inline-block',
                  fontSize: 1,
                  py: 1,
                  px: 2,
                  mb: 2,
                  bg: 'muted',
                }}
              >
                Unpublished
              </div>
            ) : null}
            <h1 sx={{ variant: 'styles.h1', mt: 0, mb: 0 }}>{title}</h1>
            {date ? (
              <p sx={{ m: 0, mt: 2, fontSize: 1 }}>
                Updated {timeago.format(date)}
              </p>
            ) : null}
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}
