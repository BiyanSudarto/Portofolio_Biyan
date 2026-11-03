import { Reveal, SectionHeading } from '@/components/reveal'
import { experiences, education, tools } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Experience built through real projects" description="Selected professional work, collaboration, and education." />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_.65fr]">
        <ol className="space-y-4">
          {experiences.map((item, index) => (
            <Reveal key={item.org + item.role} delay={index * .05}>
              <li className="grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[150px_1fr] sm:p-6">
                <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-lg font-semibold">Education</h3>
            {education.map((item) => <div key={item.school} className="mt-4 rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
              <h4 className="mt-2 font-semibold">{item.school}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
              <p className="mt-2 text-sm text-muted-foreground">GPA {item.gpa}</p>
            </div>)}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-full border border-border px-3 py-2 text-sm text-muted-foreground">{tool}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
