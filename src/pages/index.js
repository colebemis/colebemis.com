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
          gridGap: [4, 5],
          px: [3, 5],
          py: [4, 5],
        }}
      >
        <Link to="/" sx={{ display: 'flex' }}>
          <Logo />
        </Link>
        <div>
          <h1 sx={{ variant: 'styles.h1', mt: 0, mb: 3 }}>Cole Bemis</h1>

          <p sx={{ fontSize: [3, 4], mt: 0, mb: [3, 4], maxWidth: '45ch' }}>
            Building things for people who build things. Design Systems Engineer
            at GitHub. Living in San Francisco, CA.
          </p>

          <a
            href="https://twitter.com/colebemis"
            sx={{ variant: 'styles.a', mr: [3, 4] }}
          >
            Twitter
          </a>
          <a href="https://github.com/colebemis" sx={{ variant: 'styles.a' }}>
            GitHub
          </a>
        </div>

        <div>
          <div sx={{ mb: [3, 4] }}>
            <h2 sx={{ variant: 'styles.h2', m: 0 }}>Projects</h2>
          </div>

          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridGap: [3, 4],
              width: '100%',
            }}
          >
            <CardLink
              title="Feather"
              description="Simply beautiful open source icons"
              href="https://feathericons.com"
            />
    
            <CardLink
              title="Hosted Export Figma plugin"
              description="Copy hosted image URLs for any frame inside Figma"
              href="https://www.figma.com/community/plugin/886688414738743606"
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
          <div sx={{ mb: [3, 4] }}>
            <h2 sx={{ variant: 'styles.h2', mt: 0, mb: 1 }}>Digital garden</h2>

            <p sx={{ m: 0 }}>A place for my ideas to grow</p>
          </div>

          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridGap: [3, 4],
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

        <div>
          <a
            href="https://github.com/colebemis/colebemis.com"
            sx={{ variant: 'styles.a' }}
          >
            View source
          </a>
        </div>
      </div>
    </div>
  )
}
