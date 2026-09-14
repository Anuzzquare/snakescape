import { Hero } from '@/components/hero'
import { OriginStory } from '@/components/origin-story'
import { Powers } from '@/components/powers'
import { Mission } from '@/components/mission'
import { SiteFooter } from '@/components/site-footer'
import { ChatbotDock } from '@/components/chatbot-dock'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <OriginStory />
      <Powers />
      <Mission />
      <SiteFooter />
      <ChatbotDock />
    </main>
  )
}
