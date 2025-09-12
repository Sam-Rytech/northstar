const CartItemRow = ({ item }) => {
  return (
    <tr className="border-b">
      <td className="py-4 text-red-500 cursor-pointer text-center">×</td>
      <td className="py-4 flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <span className="font-medium">{item.name}</span>
      </td>
      <td className="py-4">${item.price.toFixed(2)}</td>
      <td className="py-4">
        <input
          type="number"
          min={1}
          defaultValue={item.quantity}
          className="w-16 border border-gray-300 rounded-md p-2 text-center"
        />
      </td>
      <td className="py-4 font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  )
}

export default CartItemRow
