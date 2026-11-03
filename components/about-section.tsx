import { Brain, Check, Code2, Database, Gamepad2, Workflow } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { highlights } from '@/lib/portfolio-data'

const icons = [Code2, Database, Gamepad2, Workflow, Brain]

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Technology, systems, and player experiences"
        description="I enjoy turning complex requirements into useful products and understandable gameplay systems."
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <p className="text-lg leading-relaxed text-pretty">
            I’m <span className="font-semibold text-primary">Atmaghani Biyan Sudarto</span>, a D4 Game Technology graduate from Politeknik Elektronika Negeri Surabaya (PENS).
          </p>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            My work spans full-stack web applications, backend transaction systems, and game development. I use technologies such as Node.js, Express.js, PHP, JavaScript, MySQL, and SQLite to build web-based solutions.
          </p>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            In game projects, I work across gameplay mechanics, character progression, survival loops, and implementation. I also led the Red Life project and contributed to a national first-place game application team.
          </p>
          <div className="glass mt-2 rounded-2xl p-5">
            <p className="font-display text-sm font-semibold text-primary">What I value</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Clear requirements, practical problem-solving, maintainable systems, and experiences that are easy to understand.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={item} delay={index * 0.07}>
                <article className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <Check className="size-4 text-primary" />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold">{item}</h3>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
