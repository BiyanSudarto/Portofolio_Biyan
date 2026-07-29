import { Trophy } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const roles = ['Team Leader', 'Game Designer', 'Game Application Development Division']

export function AchievementSection() {
  return (
    <section id="achievements" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Achievements" title="National competition, first place" />

      <Reveal className="mt-14">
        <article className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-16 size-72 rounded-full bg-primary/12 blur-[100px]"
          />
          <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div className="animate-float-slow neon-ring grid size-20 shrink-0 place-items-center rounded-3xl bg-linear-to-br from-primary/25 to-accent/25 text-primary">
              <Trophy className="size-9" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">KMIPN VI</p>
              <h3 className="font-display mt-2 text-2xl font-bold text-balance sm:text-3xl">
                1st Place — Game Application Development
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-5 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
                Led the development team and designed educational gameplay systems that achieved
                first place in the national competition.
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
