'use client'

import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'

export function HeroSection() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-primary">
            <span className="h-px w-8 bg-primary" /> Portfolio · 2026
          </p>
          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] text-balance sm:text-6xl lg:text-7xl">
            Building digital products <span className="text-primary">with purpose.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I’m Atmaghani Biyan Sudarto — a full-stack developer and game designer who builds practical web systems and thoughtful gameplay experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Explore selected work <ArrowUpRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
              Get in touch
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <span><strong className="mr-2 font-semibold text-foreground">Based in</strong>Tuban, Indonesia</span>
            <span><strong className="mr-2 font-semibold text-foreground">Focus</strong>Full-stack development · Game design</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .1 }} className="relative mx-auto w-full max-w-[340px]">
          <div className="absolute -bottom-5 -left-5 -z-10 h-4/5 w-4/5 rounded-[2rem] bg-secondary" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-xl shadow-foreground/5">
            <Image src="/images/biyan-portrait.png" alt="Portrait of Atmaghani Biyan Sudarto" width={640} height={800} priority className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="absolute -right-4 top-8 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium shadow-sm">Developer & Game Designer</div>
        </motion.div>
      </div>
      <a href="#projects" className="mt-16 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground hover:text-primary">
        Scroll to explore <ArrowDown className="size-4" />
      </a>
    </section>
  )
}
