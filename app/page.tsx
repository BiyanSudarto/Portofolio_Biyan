import { AboutSection } from '@/components/about-section'
import { AchievementSection } from '@/components/achievement-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
