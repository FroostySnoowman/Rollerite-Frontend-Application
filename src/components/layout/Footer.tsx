import { NavLink } from 'react-router-dom'
import { Container } from './Container'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

const social = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://bsky.app', label: 'Bluesky' },
  { href: 'https://example.com', label: 'Newsletter' },
] as const

export function Footer() {
  return (
    <footer className="mt-auto border-t-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 sm:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:gap-8 lg:[grid-template-columns:repeat(4,minmax(0,1fr))]">
          <div className="min-w-0 lg:col-span-2">
            <p className="font-display text-xl font-extrabold tracking-tight text-[var(--fg)]">
              Anvil Coffee Co.
            </p>
            <p className="mt-3 max-w-md text-[var(--fg-muted)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bold brews,
              honest pastries, zero pretense.
            </p>
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-[var(--fg)]">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-[var(--fg)]">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {social.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t-[length:var(--border-width)] border-[var(--border)] py-6 text-sm text-[var(--fg-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0 break-words">
            © {new Date().getFullYear()} Anvil Coffee Co. Lorem ipsum.
          </p>
          <p className="min-w-0 break-words sm:text-right">
            123 Bean Street — Open daily 7–7
          </p>
        </div>
      </Container>
    </footer>
  )
}
