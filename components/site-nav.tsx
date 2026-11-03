'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Profile', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 px-5 backdrop-blur-md sm:px-6">
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-base font-bold tracking-tight">BIYAN<span className="text-accent">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground">Contact ↗</a>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="grid size-10 place-items-center rounded-full border border-border md:hidden">
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>
      {open && <div className="border-t border-border py-3 md:hidden">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-sm text-muted-foreground hover:bg-secondary">{link.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground">Contact</a>
      </div>}
    </header>
  )
}
