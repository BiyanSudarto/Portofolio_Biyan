'use client'

import { motion } from 'motion/react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MagneticButton } from '@/components/magnetic-button'
import { ParticleField } from '@/components/particle-field'
import { stats } from '@/lib/portfolio-data'

const roles = ['Game Designer', 'Game Programmer', 'Full Stack Developer']

function TypingRoles() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const done = !deleting && text === current
    const cleared = deleting && text === ''

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true)
          return
        }
        if (cleared) {
          setDeleting(false)
          setIndex((value) => (value + 1) % roles.length)
          return
        }
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        )
      },
      done ? 1600 : deleting ? 40 : 75,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <p className="font-display text-xl font-medium text-primary sm:text-2xl">
      <span aria-live="polite">{text}</span>
      <span className="animate-caret ml-0.5 inline-block w-0.5 translate-y-0.5 self-center bg-primary align-middle" aria-hidden="true">
        &nbsp;
      </span>
    </p>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <ParticleField />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 -z-10 size-[28rem] rounded-full bg-accent/12 blur-[120px]"
      />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Open for studio opportunities
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Atmaghani Biyan Sudarto</span>
          </h1>

          <div className="mt-4 flex justify-center lg:justify-start">
            <TypingRoles />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground lg:text-lg">
            I design engaging gameplay systems that combine mechanics, progression, and player
            experience into meaningful and enjoyable games.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <MagneticButton href="#projects">
              View Portfolio
              <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton href="/CV_Atmaghani_Biyan_Sudarto_MT.pdf" variant="accent" download>
              Download CV
              <Download className="size-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
              <Mail className="size-4" />
            </MagneticButton>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-3">
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-primary">
                  {stat.value}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="animate-float-slow relative w-full max-w-sm shrink-0"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" />
          <div className="glass neon-ring relative overflow-hidden rounded-[2rem] p-2">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-linear-to-b from-primary/20 via-secondary to-accent/20">
              <Image
                src="/images/biyan-portrait.png"
                alt="Portrait of Atmaghani Biyan Sudarto"
                width={640}
                height={800}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl px-4 py-3">
              <p className="font-display text-sm font-semibold">Game Designer</p>
              <p className="text-xs text-muted-foreground">
                Politeknik Elektronika Negeri Surabaya
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
