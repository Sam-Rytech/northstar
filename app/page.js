import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import Features from '@/components/Features'
import PromoBanners from '@/components/PromoBanners'
import TopSellers from '@/components/TopSellers'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewArrivals />
      <Features />
      <PromoBanners />
      <TopSellers />
      <Footer />
    </div>
  )
}
