import Link from 'next/link'

const CheckoutPaymentInfo = () => {
  return (
    <div className="border p-6 rounded-md shadow-sm">
      <p className="text-gray-700 mb-4">
        Cash on delivery. Please contact us if you require assistance or wish to
        make alternate arrangements.
      </p>
      <Link
        href="/order-confirmation"
        className="block bg-orange-600 text-white text-center py-3 rounded-md hover:bg-orange-700 transition"
      >
        PLACE ORDER
      </Link>
    </div>
  )
}

export default CheckoutPaymentInfo
