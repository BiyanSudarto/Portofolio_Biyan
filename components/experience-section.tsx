import { Reveal, SectionHeading } from '@/components/reveal'
import { experiences, tools } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience & Tools"
        title="Where the work happened"
        description="Studio collaboration, team leadership, and a daily production toolset."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <ol className="flex flex-col gap-5">
          {experiences.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.08}>
              <li className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40">
                <p className="font-mono text-xs tracking-[0.16em] text-primary uppercase">
                  {item.period}
                </p>
                <h3 className="font-display mt-2 text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-accent">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div>
          <h3 className="font-display text-lg font-semibold">Tools</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {tools.map((tool, index) => (
              <Reveal key={tool} delay={index * 0.05}>
                <div className="glass group flex h-full items-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span
                    className="font-display grid size-9 shrink-0 place-items-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-sm font-bold text-primary"
                    aria-hidden="true"
                  >
                    {tool.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
