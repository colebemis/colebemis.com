/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function CardLink({ title, description, href }) {
  return (
    <a
      href={href}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        color: 'text',
        border: '1px solid',
        borderColor: 'currentColor',
        textDecoration: 'none',
        ':hover': {
          color: 'accent',
        },
      }}
    >
      <span
        sx={{
          mb: 2,
          fontSize: 3,
          border: 0,
          lineHeight: 'heading',
        }}
      >
        {title}
      </span>
      <span sx={{ fontSize: 1 }}>{description}</span>
    </a>
  )
}
