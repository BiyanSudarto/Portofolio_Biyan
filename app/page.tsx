import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { SiteNav } from '@/components/site-nav'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 sm:px-6">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
