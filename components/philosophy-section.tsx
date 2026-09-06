import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'


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
            Atmaghani Biyan Sudarto — Designer & Programmer
          </footer>
        </blockquote>
      </Reveal>

    </section>
  )
}
