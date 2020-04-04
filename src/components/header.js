/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, useColorMode } from 'theme-ui'

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Link
        to="/"
        sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'heading' }}
      >
        colebemis
      </Link>
      <button
        aria-label={
          colorMode === 'default' ? 'Activate dark mode' : 'Activate light mode'
        }
        onClick={() =>
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }
        sx={{
          display: 'grid',
          p: 1,
          color: 'text',
          background: 'transparent',
          border: 0,
          appearance: 'none',
        }}
      >
        {colorMode === 'default' ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            aria-hidden
          >
            <path d="M20.6439 14.5149C19.3346 15.4499 17.7315 16 16 16C11.5817 16 8 12.4183 8 8C8 6.26846 8.55011 4.66541 9.48509 3.35608C5.73845 4.44428 3 7.90234 3 12C3 16.9706 7.02944 21 12 21C16.0977 21 19.5557 18.2616 20.6439 14.5149Z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            aria-hidden
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>
    </header>
  )
}
