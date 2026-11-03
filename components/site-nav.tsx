'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav aria-label="Main navigation" className={cn('mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all', scrolled ? 'border-border bg-background/95 shadow-sm backdrop-blur-xl' : 'border-transparent bg-background/75 backdrop-blur-md')}>
        <a href="#home" className="font-display text-sm font-bold tracking-tight">BIYAN<span className="text-primary">.</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => <li key={link.href}><a href={link.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{link.label}</a></li>)}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground md:inline-flex">Let’s talk <span aria-hidden="true" className="ml-2">↗</span></a>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="grid size-10 place-items-center rounded-full border border-border md:hidden">
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>
      {open && <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-background p-3 shadow-lg md:hidden">
        {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{link.label}</a>)}
      </div>}
    </header>
  )
}
