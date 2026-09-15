import { Hero } from '@/components/hero'
import { OriginStory } from '@/components/origin-story'
import { Powers } from '@/components/powers'
import { Personality } from '@/components/personality'
import { Mission } from '@/components/mission'
import { SiteFooter } from '@/components/site-footer'
import { ChatbotDock } from '@/components/chatbot-dock'
import { OpeningScreen } from '@/components/opening-screen'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <OpeningScreen />
      <Hero />
      <OriginStory />
      <Powers />
      <Personality />
      <Mission />
      <SiteFooter />
      <ChatbotDock />
    </main>
  )
}
