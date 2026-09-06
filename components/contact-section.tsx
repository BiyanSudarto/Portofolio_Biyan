'use client'

import { ArrowRight, Briefcase, Code, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { contactChannels } from '@/lib/portfolio-data'

const channelIcons: Record<string, typeof Mail> = {
  Email: Mail,
  LinkedIn: Briefcase,
  GitHub: Code,
  Phone: Phone,
  Location: MapPin,
}

export function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <SectionHeading
        eyebrow="Contact"
        title="Let's design something players remember"
        description="Open to design roles, internships, collaboration on gameplay systems and Progammer."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="flex flex-col gap-3">
          {contactChannels.map((channel) => {
            const Icon = channelIcons[channel.label] ?? Mail
            const content = (
              <span className="glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{channel.label}</span>
                  <span className="block truncate text-sm font-medium">{channel.value}</span>
                </span>
              </span>
            )

            return channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={channel.label}>{content}</div>
            )
          })}
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault()
              const data = new FormData(event.currentTarget)
              const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`)
              const body = encodeURIComponent(String(data.get('message') ?? ''))
              window.location.href = `mailto:biyansudarto05@gmail.com?subject=${subject}&body=${body}`
              setSent(true)
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted-foreground">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@studio.com"
                  className="rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the project or role..."
                className="resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_32px_-8px_var(--primary)] transition-transform hover:scale-[1.01]"
            >
              Send Message
              <ArrowRight className="size-4" />
            </button>
            <p aria-live="polite" className="min-h-5 text-xs text-primary">
              {sent ? 'Opening your email client — thank you for reaching out.' : ''}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
