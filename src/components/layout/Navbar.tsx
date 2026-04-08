import clsx from 'clsx'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { buttonClassName } from '../ui/buttonClasses'
import { Container } from './Container'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 1.5v2M12 20.5v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1.5 12h2M20.5 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function useScrollLock(lock: boolean) {
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (!lock) return

    scrollYRef.current = window.scrollY
    const { body } = document
    const prevOverflow = body.style.overflow
    const prevPosition = body.style.position
    const prevTop = body.style.top
    const prevWidth = body.style.width

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollYRef.current}px`
    body.style.width = '100%'

    return () => {
      body.style.overflow = prevOverflow
      body.style.position = prevPosition
      body.style.top = prevTop
      body.style.width = prevWidth
      window.scrollTo(0, scrollYRef.current)
    }
  }, [lock])
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    // Sync drawer to URL (back/forward, external links) without leaving it open over the new page.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional close on navigation
    setMenuOpen(false)
  }, [location.pathname])

  useScrollLock(menuOpen)

  useEffect(() => {
    if (!menuOpen) return
    const main = document.getElementById('main-content')
    const footer = document.querySelector('footer')
    main?.setAttribute('aria-hidden', 'true')
    footer?.setAttribute('aria-hidden', 'true')
    return () => {
      main?.removeAttribute('aria-hidden')
      footer?.removeAttribute('aria-hidden')
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const t = window.setTimeout(() => firstFocusableRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const panel = panelRef.current
    if (!panel) return

    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    const list = Array.from(focusables)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeMenu()
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold transition-colors',
      isActive
        ? 'bg-[var(--surface-muted)] text-[var(--fg)] neu-border neu-shadow-sm'
        : 'text-[var(--fg-muted)] hover:text-[var(--fg)]',
    )

  const mobileOverlay =
    menuOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[200] flex min-h-[100dvh] justify-end bg-[var(--overlay)] md:hidden"
        role="presentation"
      >
        <button
          type="button"
          tabIndex={-1}
          className="absolute inset-0 cursor-default touch-manipulation border-0 bg-transparent"
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-[min(100vw,20rem)] shrink-0 flex-col border-l-[length:var(--border-width)] border-[var(--border)] bg-[var(--bg-page)] neu-shadow-lg overscroll-contain pt-[env(safe-area-inset-top,0px)] shadow-[var(--shadow-lg)]"
          onClick={(e) => e.stopPropagation()}
        >
            <div className="flex shrink-0 items-center justify-between border-b-[length:var(--border-width)] border-[var(--border)] px-4 py-4">
              <span className="font-display text-lg font-bold">Menu</span>
              <button
                type="button"
                className="neu-border neu-shadow-sm min-h-11 min-w-11 touch-manipulation rounded-[var(--radius-sm)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold sm:min-h-0 sm:min-w-0"
                onClick={closeMenu}
              >
                Close
              </button>
            </div>
            <nav
              className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain p-4 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]"
              aria-label="Mobile primary"
            >
              {navLinks.map(({ to, label }, i) => (
                <NavLink
                  key={to}
                  ref={i === 0 ? firstFocusableRef : undefined}
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'min-h-12 touch-manipulation rounded-[var(--radius-sm)] px-4 py-3 text-base font-semibold leading-snug',
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--fg-on-accent)] neu-border'
                        : 'text-[var(--fg)] active:bg-[var(--surface-muted)]',
                    )
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className={clsx(
                  buttonClassName('primary'),
                  'mt-2 min-h-12 w-full touch-manipulation justify-center no-underline',
                )}
                onClick={closeMenu}
              >
                Book a table
              </NavLink>
            </nav>
        </div>
      </div>,
      document.body,
    )

  return (
    <>
      <header className="sticky top-0 z-50 border-b-[length:var(--border-width)] border-[var(--border)] bg-[var(--bg-page)]/95 backdrop-blur-sm">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Container>
          <div className="flex h-14 items-center gap-2 sm:h-[4.25rem] sm:gap-4">
            <NavLink
              to="/"
              className="shrink-0 touch-manipulation font-display text-lg font-extrabold tracking-tight text-[var(--fg)] sm:text-xl"
              end
            >
              Anvil
            </NavLink>

            <nav
              className="mx-auto hidden min-w-0 flex-1 justify-center gap-0.5 px-1 md:flex md:gap-1"
              aria-label="Primary"
            >
              {navLinks.map(({ to, label }) => (
                <NavLink key={to} to={to} className={linkClass}>
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="neu-border neu-shadow-sm neu-press flex h-11 min-w-11 touch-manipulation items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] text-[var(--fg)]"
                aria-label={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>

              <NavLink
                to="/contact"
                className={clsx(
                  buttonClassName('primary'),
                  'hidden no-underline md:inline-flex',
                )}
              >
                Book a table
              </NavLink>

              <button
                ref={menuButtonRef}
                type="button"
                className="neu-border neu-shadow-sm neu-press flex h-11 min-w-11 touch-manipulation items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] text-[var(--fg)] md:hidden"
                aria-expanded={menuOpen}
                aria-controls={panelId}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </Container>
      </header>
      {mobileOverlay}
    </>
  )
}
