'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ChevronDown, ExternalLink, Maximize2, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { certifications, education, experiences, projects, training } from '@/lib/portfolio-data'

const categories = [
  { id: 'projects', label: 'Projects', count: projects.length },
  { id: 'work', label: 'Work', count: experiences.filter((item) => !item.org.startsWith('BSO')).length },
  { id: 'organization', label: 'Organization', count: experiences.filter((item) => item.org.startsWith('BSO')).length },
  { id: 'education', label: 'Education', count: 3 },
] as const

type Category = (typeof categories)[number]['id']

const gallery = projects.filter((project) => project.image)

export function ExperienceSection() {
  const [active, setActive] = useState<Category>('projects')
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const activeImage = gallery[imageIndex]

  useEffect(() => {
    if (!galleryOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setGalleryOpen(false)
      if (event.key === 'ArrowRight') setImageIndex((value) => (value + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setImageIndex((value) => (value - 1 + gallery.length) % gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [galleryOpen])

  const toggleItem = (id: string) => setOpenItem((current) => current === id ? null : id)

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Career overview</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Experience & selected work</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">Pilih kategori untuk melihat detail pengalaman tanpa memenuhi halaman dengan terlalu banyak konten.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
          {categories.map((category, index) => (
            <button key={category.id} type="button" onClick={() => { setActive(category.id); setOpenItem(null) }} aria-pressed={active === category.id}
              className={`flex shrink-0 items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left text-sm transition-colors lg:w-full ${active === category.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-white text-muted-foreground hover:border-primary/50 hover:text-foreground'}`}>
              <span className="flex items-center gap-3"><span className={`font-mono text-[10px] ${active === category.id ? 'text-white/70' : 'text-accent'}`}>0{index + 1}</span>{category.label}</span>
              <span className={`text-xs ${active === category.id ? 'text-white/70' : 'text-muted-foreground'}`}>{String(category.count).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .18 }} className="space-y-2">
              {active === 'projects' && projects.map((project, index) => (
                <article key={project.title} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button type="button" onClick={() => toggleItem(project.title)} aria-expanded={openItem === project.title} className="flex w-full items-center gap-4 p-3.5 text-left sm:p-4">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-secondary">
                      {project.image ? <Image src={project.image} alt="" fill sizes="56px" className="object-cover" /> : <span className="grid h-full place-items-center font-display text-lg font-semibold text-primary">{project.title.slice(0,2).toUpperCase()}</span>}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm font-semibold sm:text-base">{project.title}</p>
                      <p className="mt-1 truncate text-xs text-muted-foreground">{project.role} · {project.period ?? project.platform}</p>
                    </div>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${openItem === project.title ? 'rotate-180' : ''}`} />
                  </button>
                  {openItem === project.title && <div className="border-t border-border px-4 pb-4 pt-3 sm:pl-[5.5rem]">
                    <p className="text-sm leading-6 text-muted-foreground">{project.result}</p>
                    <ul className="mt-3 space-y-1.5">{project.responsibilities.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-muted-foreground"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
                    {project.image && <button type="button" onClick={() => { setImageIndex(gallery.findIndex((item) => item.title === project.title)); setGalleryOpen(true) }} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">View project image <ExternalLink className="size-3" /></button>}
                  </div>}
                </article>
              ))}

              {active === 'work' && experiences.filter((item) => !item.org.startsWith('BSO')).map((item) => (
                <article key={item.org} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button type="button" onClick={() => toggleItem(item.org)} aria-expanded={openItem === item.org} className="flex w-full items-center gap-4 p-4 text-left">
                    <span className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-accent">{item.period}</span>
                    <span className="min-w-0 flex-1"><span className="block font-display text-sm font-semibold">{item.role}</span><span className="mt-1 block text-xs text-muted-foreground">{item.org}</span></span>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${openItem === item.org ? 'rotate-180' : ''}`} />
                  </button>
                  {openItem === item.org && <p className="border-t border-border px-4 py-4 text-sm leading-6 text-muted-foreground sm:pl-36">{item.description}</p>}
                </article>
              ))}

              {active === 'organization' && experiences.filter((item) => item.org.startsWith('BSO')).map((item) => (
                <article key={item.role} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button type="button" onClick={() => toggleItem(item.role)} aria-expanded={openItem === item.role} className="flex w-full items-center gap-4 p-4 text-left">
                    <span className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-accent">{item.period}</span>
                    <span className="min-w-0 flex-1"><span className="block font-display text-sm font-semibold">{item.role}</span><span className="mt-1 block text-xs text-muted-foreground">{item.org}</span></span>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${openItem === item.role ? 'rotate-180' : ''}`} />
                  </button>
                  {openItem === item.role && <p className="border-t border-border px-4 py-4 text-sm leading-6 text-muted-foreground sm:pl-36">{item.description}</p>}
                </article>
              ))}

              {active === 'education' && <>
                {education.map((item) => <article key={item.school} className="rounded-2xl border border-border bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">{item.period}</p>
                  <h3 className="mt-2 font-display text-base font-semibold">{item.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
                  <p className="mt-2 text-xs text-muted-foreground">GPA {item.gpa} · Juara 1 Divisi Pengembangan Aplikasi Permainan KMIPN VI</p>
                </article>)}
                <article className="rounded-2xl border border-border bg-white p-5">
                  <h3 className="font-display text-sm font-semibold">Certifications</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{certifications.map((item) => <span key={item} className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">{item}</span>)}</div>
                </article>
                <article className="rounded-2xl border border-border bg-white p-5">
                  <h3 className="font-display text-sm font-semibold">Training</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">{training.map((item) => <li key={item.title} className="text-xs leading-5 text-muted-foreground">{item.title}<span className="block text-[10px] text-accent">{item.provider} · {item.period}</span></li>)}</ul>
                </article>
              </>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {galleryOpen && activeImage && <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 p-3 backdrop-blur-sm sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setGalleryOpen(false) }} role="dialog" aria-modal="true" aria-label="Project image viewer">
          <div className="relative flex h-[min(86vh,850px)] w-full max-w-5xl flex-col bg-white shadow-2xl">
            <div className="absolute inset-x-0 top-0 z-10 flex justify-between p-4"><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-neutral-500">Project preview</span><button type="button" onClick={() => setGalleryOpen(false)} aria-label="Close image" className="grid size-9 place-items-center text-neutral-800"><X className="size-6" /></button></div>
            <div className="relative flex flex-1 items-center justify-center px-12 py-14">
              <AnimatePresence mode="wait"><motion.div key={activeImage.title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="absolute inset-12"><Image src={activeImage.image!} alt={activeImage.title} fill sizes="80vw" className="object-contain" /></motion.div></AnimatePresence>
              <button type="button" onClick={() => setImageIndex((value) => (value - 1 + gallery.length) % gallery.length)} aria-label="Previous image" className="absolute left-2 grid size-10 place-items-center"><ArrowLeft className="size-6" /></button>
              <button type="button" onClick={() => setImageIndex((value) => (value + 1) % gallery.length)} aria-label="Next image" className="absolute right-2 grid size-10 place-items-center"><ArrowRight className="size-6" /></button>
            </div>
            <div className="pb-5 text-center text-[10px] tracking-widest text-neutral-500">{activeImage.title.toUpperCase()} · {imageIndex + 1} / {gallery.length}</div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </section>
  )
}
