import Link from 'next/link'

const CartTotals = ({ subtotal, shipping }) => {
  return (
    <div className="mt-10 max-w-md ml-auto border p-6 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-6">Cart Totals</h2>

      <div className="flex justify-between py-2 border-b">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between py-2 border-b">
        <span>Shipping Free</span>
        <span className="text-green-600 font-medium">{shipping}</span>
      </div>

      <div className="flex justify-between py-4 font-bold text-lg">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Link
        href="/Checkout"
        className="block bg-orange-600 text-white text-center py-3 rounded-md mt-4 hover:bg-orange-700 transition"
      >
        PROCEED TO CHECKOUT
      </Link>
    </div>
  )
}

export default CartTotals
