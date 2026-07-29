import { navLinks } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-bold">Atmaghani Biyan Sudarto</p>
          <p className="text-sm text-primary">Game Designer</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">&copy; 2026 All Rights Reserved</p>
      </div>
    </footer>
  )
}
