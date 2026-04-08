import { useState, type FormEvent } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <Section className="bg-[var(--bg-page)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <SectionHeading
              className="min-w-0"
              eyebrow="Contact"
              title="Say hello — no backend, just vibes."
              description={
                <p>
                  Lorem ipsum dolor sit amet. This form is front-end only; submit
                  shows a quick confirmation and resets nothing server-side.
                </p>
              }
            />
            <div className="mt-10 space-y-6">
              <div className="neu-card-sm p-5">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Address
                </p>
                <p className="mt-2 text-[var(--fg)]">123 Bean Street</p>
                <p className="text-sm text-[var(--fg-muted)]">Lorem City, LC 00000</p>
              </div>
              <div className="neu-card-sm p-5">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent-2)]">
                  Hours
                </p>
                <p className="mt-2 text-[var(--fg)]">Daily 7:00 — 19:00</p>
                <p className="text-sm text-[var(--fg-muted)]">
                  Events &amp; rentals — lorem@example.com
                </p>
              </div>
            </div>
          </div>

          <div className="neu-card min-w-0 p-6 sm:p-8">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[var(--fg)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Lorem Ipsum"
                  className="mt-2 w-full rounded-[var(--radius-sm)] border-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-base text-[var(--fg)] shadow-[var(--shadow-sm)] placeholder:text-[var(--fg-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[var(--fg)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-[var(--radius-sm)] border-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-base text-[var(--fg)] shadow-[var(--shadow-sm)] placeholder:text-[var(--fg-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[var(--fg)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your visit…"
                  className="mt-2 w-full resize-y rounded-[var(--radius-sm)] border-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-base text-[var(--fg)] shadow-[var(--shadow-sm)] placeholder:text-[var(--fg-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                />
              </div>
              <Button type="submit">Send message</Button>
            </form>
            <div
              role="status"
              aria-live="polite"
              className="mt-4 min-h-[1.5rem] text-sm font-semibold text-[var(--accent-2)]"
            >
              {sent ? 'Thanks — your message would be sent in a real app.' : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
