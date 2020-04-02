/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div sx={{ maxWidth: 'container', mx: 'auto' }}>
      <Header />
      <div sx={{ p: 4 }}>{children}</div>
    </div>
  )
}
