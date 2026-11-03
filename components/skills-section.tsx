import { SectionHeading, Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Capabilities" title="A practical, cross-disciplinary toolkit" description="The tools and skills I use to move from a problem to a working product." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * .08}>
            <article className="h-full rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{group.title}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => <li key={skill} className="rounded-full bg-secondary px-3 py-2 text-sm text-secondary-foreground">{skill}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
