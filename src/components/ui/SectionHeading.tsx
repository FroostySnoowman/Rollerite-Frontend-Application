import clsx from 'clsx'
import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: Props) {
  return (
    <div className={clsx('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold leading-snug tracking-tight text-balance text-[var(--fg)] break-words sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-[var(--fg-muted)]">{description}</div>
      ) : null}
    </div>
  )
}
