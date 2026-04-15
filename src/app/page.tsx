import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col">
      <Header />
      <StatsBar />
      <Hero />
      <ComparisonSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
