/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import Logo from './logo'

export default function Header() {
  return (
    <header sx={{ p: 4 }}>
      <Link to="/" sx={{ color: 'inherit' }}>
        <Logo />
      </Link>
    </header>
  )
}
