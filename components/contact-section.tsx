import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-accent">Get in touch</p>
        <h2 className="mt-1 font-display text-xl font-semibold">Let’s build something useful.</h2>
        <a href="mailto:biyansudarto05@gmail.com" className="mt-1 inline-block text-sm text-muted-foreground hover:text-primary">biyansudarto05@gmail.com</a>
      </div>
      <div className="flex flex-wrap gap-2">
        <a href="mailto:biyansudarto05@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-foreground"><Mail className="size-3.5" /> Send email</a>
        <a href="https://linkedin.com/in/biyansudarto" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-border bg-white text-primary hover:border-primary"><BriefcaseBusiness className="size-4" /></a>
        <a href="https://github.com/BiyanSudarto" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-border bg-white text-primary hover:border-primary"><Code2 className="size-4" /></a>
      </div>
    </section>
  )
}
