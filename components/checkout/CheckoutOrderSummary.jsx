const CheckoutOrderSummary = ({ items, subtotal }) => {
  return (
    <div className="border p-6 rounded-md shadow-sm mb-6">
      <h3 className="text-xl font-bold mb-4">Your Order</h3>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Product</th>
            <th className="text-right py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2">{item.name}</td>
              <td className="text-right py-2">${item.price.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="font-semibold">
            <td className="py-3">Subtotal</td>
            <td className="text-right py-3">${subtotal.toFixed(2)}</td>
          </tr>
          <tr className="font-bold text-lg">
            <td className="py-3">Total</td>
            <td className="text-right py-3">${subtotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CheckoutOrderSummary
