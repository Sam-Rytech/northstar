import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <Hero title="CONTACT US" />
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <ContactForm />
        <ContactInfo />
      </section>
      <Footer />
    </div>
  )
}
