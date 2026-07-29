import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const testimonialSlots = [
  { role: 'Studio Lead', hint: 'Reserved for future studio collaboration feedback.' },
  { role: 'Team Member', hint: 'Reserved for teammate feedback from upcoming projects.' },
  { role: 'Playtester', hint: 'Reserved for playtest insights from released builds.' },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Design Philosophy" title="Mechanics serve the experience" />

      <Reveal className="mt-12">
        <blockquote className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 text-center sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/12 blur-[100px]"
          />
          <Quote className="mx-auto size-7 text-primary" aria-hidden="true" />
          <p className="font-display relative mt-6 text-lg leading-relaxed text-balance sm:text-2xl">
            &ldquo;I believe that great game design is not only about creating mechanics, but also
            about crafting meaningful player experiences. Every mechanic should support the core
            gameplay loop, reinforce progression, and evoke emotions that keep players
            engaged.&rdquo;
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">
            Atmaghani Biyan Sudarto — Game Designer
          </footer>
        </blockquote>
      </Reveal>

      <div className="mt-20">
        <h3 className="font-display text-center text-lg font-semibold">Testimonials</h3>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Coming soon — space reserved for collaborators and studios.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonialSlots.map((slot, index) => (
            <Reveal key={slot.role} delay={index * 0.08}>
              <article className="glass h-full rounded-2xl border-dashed p-6">
                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-full bg-secondary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{slot.role}</p>
                    <p className="text-xs text-muted-foreground/70">Pending</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{slot.hint}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
