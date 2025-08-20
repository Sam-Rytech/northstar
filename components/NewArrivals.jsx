const products = [
  { name: 'Plain White Shirt', price: '$29.00', img: '/p1.jpg' },
  { name: 'Denim Jacket', price: '$69.00', img: '/p2.jpg' },
  { name: 'Black Polo Shirt', price: '$49.00', img: '/p3.jpg' },
  { name: 'Blue Sweatshirt', price: '$79.00', img: '/p4.jpg' },
]

export default function NewArrivals() {
  return (
    <section className="px-8 py-12">
      <h2 className="text-center text-2xl font-bold">Discover NEW Arrivals</h2>
      <p className="text-center text-gray-600 mb-8">Recently added shirts!</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="text-center">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-64 object-cover"
            />
            <p>{p.name}</p>
            <p className="text-blue-600">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
