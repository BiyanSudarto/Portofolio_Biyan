'use client'

import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { processSteps } from '@/lib/portfolio-data'

export function ProcessSection() {
  const containerRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 60%'],
  })
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 28,
  })

  return (
    <section id="process" className="relative mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Game Design Process"
        title="From research to final design"
        description="A repeatable loop that turns an idea into a system players can master."
      />

      <ol ref={containerRef} className="relative mt-14 flex flex-col gap-8 pl-10 sm:pl-14">
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-3 w-px bg-border sm:left-5"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-3 w-px origin-top bg-linear-to-b from-primary to-accent sm:left-5"
        />

        {processSteps.map((step, index) => (
          <li key={step.title} className="relative">
            <span
              className="absolute top-1 -left-10 grid size-6 place-items-center rounded-full border border-primary/40 bg-background font-mono text-[10px] font-bold text-primary sm:-left-14 sm:size-7 sm:text-xs"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <Reveal delay={index * 0.05}>
              <div className="glass rounded-2xl p-5 transition-colors duration-300 hover:border-primary/40">
                <h3 className="font-display text-base font-semibold sm:text-lg">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
