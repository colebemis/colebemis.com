/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Layout({ children }) {
  return <div sx={{ maxWidth: 'container', mx: 'auto', p: 4 }}>{children}</div>
}
