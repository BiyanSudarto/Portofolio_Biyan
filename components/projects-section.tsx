'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { SectionHeading } from '@/components/reveal'
import { projectFilters, projects, type ProjectFilter } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const visible = useMemo(
    () =>
      filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  )

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Systems shipped in real games"
        description="Each project below is documented by role, responsibilities, and the gameplay result it delivered."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
              filter === item
                ? 'bg-primary text-primary-foreground shadow-[0_0_26px_-8px_var(--primary)]'
                : 'glass text-muted-foreground hover:text-foreground',
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass group flex flex-col overflow-hidden rounded-3xl transition-colors duration-300 hover:border-primary/40"
            >
              <div className="relative aspect-16/9 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Key art for ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="glass rounded-full px-3 py-1 text-xs font-medium text-primary">
                    {project.genre}
                  </span>
                  <span className="glass rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.platform}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                    {project.subtitle ? (
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    ) : null}
                  </div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {project.role}
                  </span>
                </div>

                <ul className="mt-5 flex flex-col gap-2">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 flex items-start gap-2 rounded-2xl bg-secondary/60 p-4 text-sm leading-relaxed text-pretty">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                  {project.result}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Read Case Study
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
