import Navbar        from '@/components/landing/Navbar'
import HeroSection   from '@/components/landing/HeroSection'
import StatsSection  from '@/components/landing/StatsSection'
import ServicesSection from '@/components/landing/ServicesSection'
import AboutSection  from '@/components/landing/AboutSection'
import PartnersSection from '@/components/landing/PartnersSection'
import ClientsSection from '@/components/landing/ClientsSection'
import ContactSection from '@/components/landing/ContactSection'
import Footer        from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
