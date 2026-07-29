'use client'

import { motion } from 'motion/react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[130px]"
      />
      <SectionHeading
        eyebrow="Skills"
        title="Design craft, measured"
        description="A toolkit built around gameplay systems, balance, and the tools that ship them."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <ul className="mt-6 flex flex-col gap-5">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{
                          duration: 1.1,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.15 + skillIndex * 0.08,
                        }}
                        className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
