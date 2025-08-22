import Navbar from '@/components/Navbar'
import Hero from '@/components/about/Hero'
import Showcase from '@/components/about/Showcase'
import Founders from '@/components/about/Founders'
import Testimonials from '@/components/about/Testimonials'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <Founders />
      <Testimonials />
      <Footer />
    </div>
  )
}
