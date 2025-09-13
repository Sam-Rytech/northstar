import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OrderConfirmationPage() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <div className="bg-orange-600 text-white rounded-xl p-10 max-w-lg w-full text-center shadow-md">
          <h1 className="text-3xl font-bold mb-4">
            🎉 Order Placed Successfully!
          </h1>
          <p className="text-lg mb-6">
            Thank you for shopping with us. Your order is being processed and
            you will receive a confirmation email shortly.
          </p>

          <Link
            href="/"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
