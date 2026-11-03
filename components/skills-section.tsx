import { tools } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-9">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-accent">Toolkit</p>
          <h2 className="mt-1 font-display text-xl font-semibold">Skills & technologies</h2>
        </div>
        <div className="flex max-w-3xl flex-wrap gap-2">
          {tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs text-secondary-foreground">{tool}</span>)}
        </div>
      </div>
    </section>
  )
}
