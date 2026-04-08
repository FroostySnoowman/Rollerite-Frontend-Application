import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { buttonClassName } from '../components/ui/buttonClasses'
import { SectionHeading } from '../components/ui/SectionHeading'
import clsx from 'clsx'

const heroImg = '/images/hero-cafe.jpg'
const vibeImg = '/images/coffee-atmosphere.jpg'

export default function Home() {
  return (
    <>
      <section
        className="border-b-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface-muted)]"
        aria-labelledby="hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:gap-14 lg:py-16 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
            <div className="min-w-0 overflow-visible">
              <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-2)]">
                Est. MMXXIV
              </p>
              <h1
                id="hero-heading"
                className="font-display text-[clamp(1.75rem,7vw,2.25rem)] font-extrabold leading-snug tracking-tight text-balance text-[var(--fg)] break-words sm:text-5xl lg:text-6xl"
              >
                Coffee with{' '}
                <span className="text-[var(--accent)]">character</span>, not fluff.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--fg-muted)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/menu"
                  className={clsx(buttonClassName('primary'), 'no-underline')}
                >
                  See the menu
                </Link>
                <Link
                  to="/contact"
                  className={clsx(buttonClassName('secondary'), 'no-underline')}
                >
                  Visit us
                </Link>
              </div>
            </div>
            <div className="neu-card min-w-0 overflow-hidden p-2 sm:p-3">
              <img
                src={heroImg}
                alt="White coffee cup among roasted coffee beans"
                width={1600}
                height={1057}
                className="aspect-[4/3] w-full rounded-[var(--radius-sm)] object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section id="story" className="bg-[var(--bg-page)]">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:items-center lg:gap-16 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
            <SectionHeading
              className="min-w-0"
              eyebrow="Our story"
              title="Beans, bricks, and a little bit of chaos."
              description={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur. Curabitur blandit tempus
                  porttitor.
                </p>
              }
            />
            <div className="neu-card-sm min-w-0 p-6 sm:p-8">
              <ul className="space-y-4 text-[var(--fg-muted)]">
                <li className="flex gap-3">
                  <span
                    className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm border-[length:var(--border-width)] border-[var(--border)] bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span>
                    Single-origin rotations — lorem ipsum dolor sit amet weekly.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm border-[length:var(--border-width)] border-[var(--border)] bg-[var(--accent-2)]"
                    aria-hidden
                  />
                  <span>
                    Pastries from neighbors — consectetur adipiscing elit local.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm border-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface-muted)]"
                    aria-hidden
                  />
                  <span>
                    No laptop zones after noon — vestibulum id ligula porta felis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <SectionHeading
            className="mb-12 min-w-0"
            eyebrow="Highlights"
            title="Menu moments worth the wait."
            description={
              <p>
                Lorem ipsum dolor sit amet — placeholder pricing and copy for
                layout only.
              </p>
            }
          />
          <div className="grid grid-cols-1 gap-6 sm:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">
            {[
              { name: 'Velvet Flat White', price: '$5', note: 'Microfoam, two shots.' },
              { name: 'Cold Fog Latte', price: '$6', note: 'Oat, vanilla smoke.' },
              { name: 'Burnt Honey Cortado', price: '$4.5', note: 'Short, sharp, sweet.' },
            ].map((item) => (
              <article
                key={item.name}
                className="neu-card flex min-w-0 flex-col p-6 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex min-w-0 items-start justify-between gap-2">
                  <h3 className="min-w-0 font-display text-lg font-bold break-words text-[var(--fg)]">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-[var(--radius-sm)] border-[length:var(--border-width)] border-[var(--border)] bg-[var(--accent)] px-2 py-0.5 font-display text-sm font-bold text-[var(--fg-on-accent)]">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{item.note}</p>
                <Link
                  to="/menu"
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--fg)] underline-offset-4 hover:underline"
                >
                  Full menu →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--bg-page)]">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:items-center lg:gap-14 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
            <div className="neu-card order-2 min-w-0 overflow-hidden p-2 lg:order-1 sm:p-3">
              <img
                src={vibeImg}
                alt="Steaming cup of coffee on a wooden table"
                width={1200}
                height={1800}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[var(--radius-sm)] object-cover"
              />
            </div>
            <div className="order-1 min-w-0 lg:order-2">
              <SectionHeading
                className="min-w-0"
                eyebrow="Visit"
                title="Pull up a chair. Stay a while."
                description={
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna.
                  </p>
                }
              />
              <div className="mt-8 grid grid-cols-1 gap-4 sm:[grid-template-columns:repeat(2,minmax(0,1fr))]">
                <div className="neu-card-sm min-w-0 p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    Hours
                  </p>
                  <p className="mt-2 text-[var(--fg)]">Daily 7:00 — 19:00</p>
                  <p className="text-sm text-[var(--fg-muted)]">Kitchen til 18:00</p>
                </div>
                <div className="neu-card-sm min-w-0 p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent-2)]">
                    Address
                  </p>
                  <p className="mt-2 text-[var(--fg)]">123 Bean Street</p>
                  <p className="text-sm text-[var(--fg-muted)]">Lorem City, LC 00000</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className={clsx(buttonClassName('primary'), 'no-underline')}
                >
                  Get directions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
