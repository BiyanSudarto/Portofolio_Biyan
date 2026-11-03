import { ArrowDownToLine, ArrowUpRight, MapPin } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="home" className="grid items-center gap-9 border-b border-border py-12 sm:py-16 lg:grid-cols-[1fr_300px] lg:gap-16 lg:py-20">
      <div className="order-2 lg:order-1">
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-accent">
          <span className="h-px w-7 bg-accent" /> Personal Portfolio · 2026
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-[3.65rem]">
          Atmaghani Biyan Sudarto
        </h1>
        <p className="mt-3 font-display text-lg font-medium text-primary sm:text-xl">Full-Stack Developer <span className="text-accent">·</span> Game Designer</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          D4 Game Technology graduate from PENS with experience building web applications, backend transaction systems, and interactive game experiences. Interested in practical problem-solving, system development, and thoughtful gameplay design.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Node.js', 'Express.js', 'PHP', 'JavaScript', 'MySQL', 'SQLite', 'Game Design'].map((item) => <span key={item} className="rounded-full border border-border bg-white/70 px-3 py-1.5 text-xs font-medium text-secondary-foreground">{item}</span>)}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-foreground">Explore experience <ArrowUpRight className="size-4" /></a>
          <a href="/CV_Atmaghani_Biyan_Sudarto.pdf" download className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:border-primary"><ArrowDownToLine className="size-4" /> Download CV</a>
        </div>
        <p className="mt-7 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5 text-accent" /> Tuban, Jawa Timur, Indonesia</p>
      </div>
      <div className="relative order-1 mx-auto w-full max-w-[230px] lg:order-2 lg:max-w-[300px]">
        <div className="absolute -bottom-3 -left-3 -z-10 h-4/5 w-4/5 rounded-[1.6rem] bg-secondary" />
        <div className="overflow-hidden rounded-[1.6rem] border border-border bg-white p-1.5 shadow-lg shadow-black/5">
          <Image src="/images/biyan-portrait.png" alt="Atmaghani Biyan Sudarto" title="Atmaghani Biyan Sudarto" draggable className="aspect-[4/5] w-full cursor-grab rounded-[1.2rem] object-cover active:cursor-grabbing" width={640} height={800} priority />
        </div>
      </div>
    </section>
  )
}
