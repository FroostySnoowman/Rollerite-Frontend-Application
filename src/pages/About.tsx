import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { SectionHeading } from '../components/ui/SectionHeading'

const team = [
  {
    name: 'Ava Rost',
    role: 'Head Roaster',
    img: '/images/team-ava.jpg',
  },
  {
    name: 'Milo Chen',
    role: 'Pastry Lead',
    img: '/images/team-milo.jpg',
  },
  {
    name: 'Sofia Nils',
    role: 'Floor Captain',
    img: '/images/team-sofia.jpg',
  },
] as const

export default function About() {
  return (
    <>
      <Section className="border-b-[length:var(--border-width)] border-[var(--border)] bg-[var(--surface-muted)]">
        <Container>
          <div className="min-w-0 max-w-3xl">
            <SectionHeading
              eyebrow="About"
              title="We built Anvil for people who like their coffee loud."
              description={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  quis risus eget urna mollis ornare vel eu leo. Cras mattis
                  consectetur purus sit amet fermentum.
                </p>
              }
            />
            <p className="mt-6 text-[var(--fg-muted)]">
              Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
              mollis interdum. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--bg-page)]">
        <Container>
          <SectionHeading
            className="mb-12 min-w-0"
            eyebrow="Team"
            title="The humans behind the bar."
            description={
              <p>
                Lorem ipsum placeholder bios — names and roles are fictional for
                this demo.
              </p>
            }
          />
          <ul className="grid grid-cols-1 gap-8 sm:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">
            {team.map((person) => (
              <li key={person.name} className="min-w-0">
                <article className="neu-card min-w-0 overflow-hidden">
                  <img
                    src={person.img}
                    alt=""
                    width={400}
                    height={400}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="border-t-[length:var(--border-width)] border-[var(--border)] p-5">
                    <h2 className="font-display text-lg font-bold text-[var(--fg)]">
                      {person.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm text-[var(--fg-muted)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur blandit tempus porttitor.
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
