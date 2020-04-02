/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

export default function Header() {
  return (
    <header sx={{ p: 4 }}>
      <Link to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
        @colebemis
      </Link>
    </header>
  )
}
