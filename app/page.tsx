import { AboutSection } from '@/components/about-section'
import { AchievementSection } from '@/components/achievement-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { MouseSpotlight } from '@/components/mouse-spotlight'
import { PhilosophySection } from '@/components/philosophy-section'
import { ProcessSection } from '@/components/process-section'
import { ProjectsSection } from '@/components/projects-section'
import { ScrollProgress } from '@/components/scroll-progress'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_55%),radial-gradient(circle_at_85%_20%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_50%)]"
      />
      <ScrollProgress />
      <MouseSpotlight />
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <AchievementSection />
        <ExperienceSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
