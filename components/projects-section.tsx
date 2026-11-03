'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, Minimize2, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { SectionHeading } from '@/components/reveal'
import { projectFilters, projects, type ProjectFilter } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const galleryProjects = projects.filter((project) => project.image)

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [slide, setSlide] = useState(0)
  const visible = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  )
  const maxSlide = galleryProjects.length - 1
  const activeProject = galleryProjects[slide]

  useEffect(() => {
    if (!galleryOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (expanded) setExpanded(false)
        else setGalleryOpen(false)
      }
      if (event.key === 'ArrowRight') setSlide((current) => Math.min(maxSlide, current + 1))
      if (event.key === 'ArrowLeft') setSlide((current) => Math.max(0, current - 1))
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [galleryOpen, expanded, maxSlide])

  const openGallery = (projectTitle: string) => {
    const projectIndex = galleryProjects.findIndex((project) => project.title === projectTitle)
    setSlide(Math.max(projectIndex, 0))
    setExpanded(false)
    setGalleryOpen(true)
  }

  const changeSlide = (direction: -1 | 1) => {
    setSlide((current) => Math.min(maxSlide, Math.max(0, current + direction)))
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
                    View Project Gallery <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {galleryOpen && activeProject && (
          <motion.div
            className={cn('fixed inset-0 z-[100] flex items-center justify-center bg-black/25 backdrop-blur-[2px]', expanded ? 'p-0' : 'p-3 sm:p-6')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) { setExpanded(false); setGalleryOpen(false) } }}
            role="dialog"
            aria-modal="true"
            aria-label="Project image gallery"
          >
            <motion.div
              layout
              initial={{ opacity: 0, y: 18, scale: .99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: .99 }}
              transition={{ duration: .22 }}
              className={cn(
                'relative flex w-full flex-col overflow-hidden bg-white text-neutral-900 shadow-[0_28px_70px_-24px_rgba(0,0,0,.45)]',
                expanded ? 'h-full max-w-none rounded-none' : 'max-w-5xl rounded-sm',
              )}
            >
              <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-4 sm:p-6">
                <button
                  type="button"
                  onClick={() => setExpanded((value) => !value)}
                  aria-label={expanded ? 'Exit fullscreen' : 'View fullscreen'}
                  className="grid size-9 place-items-center text-neutral-800 transition-opacity hover:opacity-55"
                >
                  {expanded ? <Minimize2 className="size-5" strokeWidth={1.25} /> : <Maximize2 className="size-5" strokeWidth={1.25} />}
                </button>
                <button
                  type="button"
                  onClick={() => { setExpanded(false); setGalleryOpen(false) }}
                  aria-label="Close gallery"
                  className="grid size-9 place-items-center text-neutral-800 transition-opacity hover:opacity-55"
                >
                  <X className="size-7" strokeWidth={1.1} />
                </button>
              </div>

              <div className="relative flex min-h-[420px] flex-1 items-center justify-center px-12 py-16 sm:px-20 sm:py-20">
                <div className="relative h-[min(64vh,620px)] w-full max-w-[760px] sm:h-[min(68vh,700px)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.title}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -32 }}
                      transition={{ duration: .24, ease: 'easeInOut' }}
                    >
                      <Image
                        src={activeProject.image!}
                        alt={`Temporary gallery image for ${activeProject.title}`}
                        fill
                        priority
                        sizes="(max-width: 768px) 85vw, 760px"
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={() => changeSlide(-1)}
                  disabled={slide === 0}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center text-neutral-900 transition-opacity hover:opacity-50 disabled:opacity-20 sm:left-7"
                >
                  <ArrowLeft className="size-7" strokeWidth={1.15} />
                </button>
                <button
                  type="button"
                  onClick={() => changeSlide(1)}
                  disabled={slide === maxSlide}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center text-neutral-900 transition-opacity hover:opacity-50 disabled:opacity-20 sm:right-7"
                >
                  <ArrowRight className="size-7" strokeWidth={1.15} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pb-5 text-[11px] tracking-[.12em] text-neutral-500 sm:pb-6">
                <span>{activeProject.title.toUpperCase()}</span>
                <span className="text-neutral-300">/</span>
                <span>{String(slide + 1).padStart(2, '0')} — {String(galleryProjects.length).padStart(2, '0')}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
