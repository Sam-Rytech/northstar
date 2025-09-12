import Header from '@/components/Header'
import Footer from '@/components/cart/Footer'
import CartTable from '@/components/cart/CartTable'
import CartTotals from '@/components/cart/CartTotals'

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'Plain White Shirt',
      price: 59,
      quantity: 1,
      image: '/Product2.png',
    },
  ]

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8 uppercase">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <>
            <CartTable items={cartItems} />
            <CartTotals subtotal={subtotal} shipping="FREE!!!" />
          </>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}
