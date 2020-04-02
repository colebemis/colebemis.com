/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div sx={{ maxWidth: 'container', mx: 'auto', p: 4 }}>{children}</div>
    </div>
  )
}
