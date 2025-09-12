import Navbar from '@/components/Navbar'
import ProductImage from '@/components/product/ProductImage'
import ProductDetails from '@/components/product/ProductDetails'
import ProductTabs from '@/components/product/ProductTabs'
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
