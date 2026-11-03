'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { SectionHeading } from '@/components/reveal'
import { projectFilters, projects, type ProjectFilter } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const galleryProjects = projects.filter((project) => project.image)

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const visible = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  )
  const maxSlide = Math.max(0, galleryProjects.length - 3)

  useEffect(() => {
    if (!galleryOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setGalleryOpen(false)
      if (event.key === 'ArrowRight') setSlide((current) => Math.min(maxSlide, current + 1))
      if (event.key === 'ArrowLeft') setSlide((current) => Math.max(0, current - 1))
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [galleryOpen, maxSlide])

  const openGallery = (projectTitle: string) => {
    const projectIndex = galleryProjects.findIndex((project) => project.title === projectTitle)
    setSlide(Math.min(Math.max(projectIndex, 0), maxSlide))
    setGalleryOpen(true)
  }

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
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{project.platform}</span>
                  <button type="button" onClick={() => openGallery(project.title)} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    View project gallery <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/55 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setGalleryOpen(false) }}
            role="dialog"
            aria-modal="true"
            aria-label="Project image gallery"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: .98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: .98 }}
              transition={{ duration: .22 }}
              className="w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-background p-5 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Project gallery</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">A closer look at my work</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Browse screenshots and visuals from selected projects.</p>
                </div>
                <button type="button" onClick={() => setGalleryOpen(false)} aria-label="Close gallery" className="grid size-10 shrink-0 place-items-center rounded-full border border-border hover:bg-secondary"><X className="size-5" /></button>
              </div>

              <div className="mt-7 overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${slide * (100 / galleryProjects.length)}%` }}
                  transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                  style={{ width: `${(galleryProjects.length / 3) * 100}%` }}
                >
                  {galleryProjects.map((project) => (
                    <div key={project.title} className="min-w-0 px-1.5" style={{ flex: `0 0 ${100 / galleryProjects.length}%` }}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                        <Image src={project.image!} alt={`Project visual: ${project.title}`} fill sizes="(max-width: 768px) 33vw, 30vw" className="object-cover" />
                      </div>
                      <p className="mt-3 truncate text-sm font-semibold">{project.title}</p>
                      <p className="mt-1 truncate text-xs text-muted-foreground">{project.role}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                <p className="text-xs text-muted-foreground">Showing 3 of {galleryProjects.length} projects · Use arrows to browse</p>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setSlide((current) => Math.max(0, current - 1))} disabled={slide === 0} aria-label="Previous images" className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-35"><ArrowLeft className="size-4" /></button>
                  <button type="button" onClick={() => setSlide((current) => Math.min(maxSlide, current + 1))} disabled={slide === maxSlide} aria-label="Next images" className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-35"><ArrowRight className="size-4" /></button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
