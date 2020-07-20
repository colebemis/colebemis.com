/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { jsx } from 'theme-ui'
import * as timeago from 'timeago.js'
import CardLink from '../components/card-link'
import Logo from '../components/logo'

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allFile(
          filter: {
            sourceInstanceName: { eq: "notes" }
            childMdx: { frontmatter: { published: { eq: true } } }
          }
        ) {
          nodes {
            childMdx {
              frontmatter {
                title
                date
              }
            }
            name
          }
        }
      }
    `,
  )

  const { siteMetadata } = data.site
  const { nodes: notes } = data.allFile

  return (
    <div>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <div
        sx={{
          display: 'grid',
          gridGap: 5,
          p: 5,
        }}
      >
        <Link to="/" sx={{ display: 'flex' }}>
          <Logo />
        </Link>
        <div>
          <h1 sx={{ variant: 'styles.h1', mt: 0, mb: 3 }}>Cole Bemis</h1>

          <p sx={{ fontSize: 4, mt: 0, mb: 4 }}>
            Building things for people who build things.
            <br />
            Design Systems Engineer at GitHub.
            <br />
            Living in San Francisco, CA.
          </p>

          <a
            href="https://twitter.com/colebemis"
            sx={{ variant: 'styles.a', mr: 4 }}
          >
            Twitter
          </a>
          <a
            href="https://github.com/colebemis"
            sx={{ variant: 'styles.a', mr: 4 }}
          >
            GitHub
          </a>
          <a href="mailto:cole@colebemis.com" sx={{ variant: 'styles.a' }}>
            cole@colebemis.com
          </a>
        </div>

        <div>
          <h2 sx={{ variant: 'styles.h2', mt: 0, mb: 4 }}>Projects</h2>

          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridGap: 4,
              width: '100%',
            }}
          >
            <CardLink
              title="Feather"
              description="Simply beautiful open source icons"
              href="https://feathericons.com"
            />

            <CardLink
              title="Tabio"
              description="A tab switcher for Chrome"
              href="https://usetabio.com"
            />

            <CardLink
              title="Dasher"
              description="Create flexible dashboards with GitHub queries"
              href="https://github.com/colebemis/dasher"
            />
          </div>
        </div>

        <div>
          <div sx={{ mb: 4 }}>
            <h2 sx={{ variant: 'styles.h2', mt: 0, mb: 1 }}>Digital garden</h2>

            <p sx={{ m: 0 }}>A place for my ideas to grow</p>
          </div>

          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridGap: 4,
            }}
          >
            {notes.map((note) => (
              <CardLink
                title={note.childMdx.frontmatter.title}
                description={`Updated ${timeago.format(
                  note.childMdx.frontmatter.date,
                )}`}
                href={`/${note.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
