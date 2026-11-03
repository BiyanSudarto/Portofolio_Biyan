'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { SectionHeading } from '@/components/reveal'
import { projectFilters, projects, type ProjectFilter } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter)), [filter])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Selected work" title="A mix of products, systems & play" description="A selection of web applications and game projects, with the role and contribution behind each one." />
        <span className="pb-2 text-sm text-muted-foreground">{String(visible.length).padStart(2, '0')} projects</span>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {projectFilters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={cn('rounded-full border px-4 py-2 text-sm transition-colors', filter === item ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-primary')}>{item}</button>)}
      </div>
      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article key={project.title} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .3 }} className="group overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                {project.image ? <Image src={project.image} alt={`Preview of ${project.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <div className="flex h-full items-center justify-center p-8"><span className="font-display text-5xl font-semibold tracking-tight text-primary/70">{project.title.split(' ').slice(0, 2).map((word) => word[0]).join('')}</span></div>}
                <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">{project.genre}</span>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>{project.subtitle && <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>}</div>
                  <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">{project.role}</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{project.period}</div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.result}</p>
                <ul className="mt-5 space-y-2">{project.responsibilities.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground"><span>{project.platform}</span><a href="#contact" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">Discuss project <ArrowUpRight className="size-3.5" /></a></div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
