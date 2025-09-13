import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutForm from '@/components/CheckoutForm'
import CheckoutOrderSummary from '@/components/CheckoutOrderSummary'
import CheckoutPaymentInfo from '@/components/CheckoutPaymentInfo'

export default function CheckoutPage() {
  // Replace this with data from cart context
  const orderItems = [
    { id: 1, name: 'Plain White Shirt', price: 59, quantity: 1 },
  ]

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side: Billing details */}
        <CheckoutForm />

        {/* Right side: Order summary */}
        <div>
          <CheckoutOrderSummary items={orderItems} subtotal={subtotal} />
          <CheckoutPaymentInfo />
        </div>
      </main>

      <Footer />
    </div>
  )
}
