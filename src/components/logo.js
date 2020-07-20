/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Logo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      sx={{
        color: 'accent',
        fill: 'currentColor',
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36 26C36 31.52 31.52 36 26 36H10H8V34V32H10H26C29.31 32 32 29.31 32 26C32 22.69 29.31 20 26 20H10H8V18V16H10H26C29.31 16 32 13.31 32 10C32 6.69 29.31 4 26 4H10H8V2V0H10H26C31.52 0 36 4.48 36 10C36 13.27 34.42 16.18 31.99 18C34.42 19.82 36 22.73 36 26ZM28 24H26H10C6.69 24 4 21.31 4 18C4 14.69 6.69 12 10 12H26H28V10V8H26H10C4.48 8 0 12.48 0 18C0 23.52 4.48 28 10 28H26H28V26V24Z"
      />
    </svg>
  )
}
