import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'

const categories = [
  {
    title: 'Espresso bar',
    items: [
      { name: 'Doppio Lorem', price: '$3.5', desc: 'Ipsum dolor sit amet.' },
      { name: 'Macchiato Consectetur', price: '$4', desc: 'Adipiscing elit tellus.' },
      { name: 'Ristretto Integer', price: '$3', desc: 'Posuere erat a ante.' },
    ],
  },
  {
    title: 'Filter & batch',
    items: [
      { name: 'Pour-over Aenean', price: '$5', desc: 'Lacinia bibendum nulla.' },
      { name: 'Cold Brew Cras', price: '$5.5', desc: 'Mattis consectetur purus.' },
      { name: 'Nitro Donec', price: '$6', desc: 'Ullamcorper nulla non.' },
    ],
  },
  {
    title: 'Bites',
    items: [
      { name: 'Cardamom Bun', price: '$4', desc: 'Vestibulum id ligula porta.' },
      { name: 'Salted Polenta Cake', price: '$5', desc: 'Cursus magna, nisl nunc.' },
      { name: 'Labneh Toast', price: '$7', desc: 'Ridiculus mus donec quam.' },
    ],
  },
] as const

export default function Menu() {
  return (
    <Section className="bg-[var(--bg-page)]">
      <Container>
        <SectionHeading
          className="mb-12 min-w-0 max-w-3xl"
          eyebrow="Menu"
          title="Placeholder prices. Real vibes."
          description={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
          }
        />
        <div className="grid grid-cols-1 gap-12 lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">
          {categories.map((cat) => (
            <div key={cat.title} className="min-w-0">
              <h2 className="font-display text-xl font-extrabold text-[var(--fg)]">
                {cat.title}
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <article className="neu-card-sm min-w-0 p-4 sm:p-5">
                      <div className="flex min-w-0 items-baseline justify-between gap-3">
                        <h3 className="min-w-0 font-display text-base font-bold break-words text-[var(--fg)]">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-display text-sm font-bold text-[var(--accent)]">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--fg-muted)]">
                        {item.desc}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
