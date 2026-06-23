import Navbar            from '@/components/landing/Navbar'
import HeroSection       from '@/components/landing/HeroSection'
import StatsSection      from '@/components/landing/StatsSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import ServicesSection   from '@/components/landing/ServicesSection'
import PricingSection    from '@/components/landing/PricingSection'
import UseCasesSection   from '@/components/landing/UseCasesSection'
import AboutSection      from '@/components/landing/AboutSection'
import ContactSection    from '@/components/landing/ContactSection'
import Footer            from '@/components/landing/Footer'
import WhatsAppBubble    from '@/components/landing/WhatsAppBubble'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection />
      <PricingSection />
      <UseCasesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppBubble />
    </>
  )
}
