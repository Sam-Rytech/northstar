import Header from '@/components/Navbar'
import ProductImage from '@/components/ProductImage'
import ProductDetails from '@/components/ProductDetails'
import ProductTabs from '@/components/ProductTabs'
import Footer from '@/components/Footer'

export default function ProductPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImage />
        <ProductDetails />
      </main>
      <ProductTabs />
      <Footer />
    </div>
  )
}
