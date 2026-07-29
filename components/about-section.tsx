import { Brain, Check, Gamepad2, Layers, Scale, Target } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { highlights } from '@/lib/portfolio-data'

const icons = [Gamepad2, Target, Layers, Scale, Brain]

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Systems designed around the player"
        description="Design that respects the player's time, curiosity, and desire to master something."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <p className="text-lg leading-relaxed text-pretty">
            My name is <span className="font-semibold text-primary">Atmaghani Biyan Sudarto</span>.
          </p>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            I am a Game Designer with over two years of experience in designing gameplay mechanics,
            progression systems, and player experiences.
          </p>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            Currently studying at Politeknik Elektronika Negeri Surabaya (PENS).
          </p>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            I enjoy creating systems that are easy to understand, rewarding to master, and capable
            of delivering memorable gameplay.
          </p>

          <div className="glass mt-2 rounded-2xl p-5">
            <p className="font-display text-sm font-semibold text-primary">Currently focused on</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Progression curves, reward pacing, and economy balance for simulation and arcade
              gameplay loops.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={item} delay={index * 0.07}>
                <article className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <Check className="size-4 text-primary" />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold">{item}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Designed, documented, and balanced across shipped student and studio projects.
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
