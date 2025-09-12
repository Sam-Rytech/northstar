import CartItemRow from './CartItemRow'

const CartTable = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3"> </th>
            <th className="text-left py-3">Product</th>
            <th className="text-left py-3">Price</th>
            <th className="text-left py-3">Quantity</th>
            <th className="text-left py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
