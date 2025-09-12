const products = [
  { name: 'Plain White Shirt', price: '$29.00', img: '/Arrival1.png' },
  { name: 'Denim Jacket', price: '$69.00', img: '/Arrival2.png' },
  { name: 'Black Polo Shirt', price: '$49.00', img: '/Arrival3.png' },
  { name: 'Blue Sweatshirt', price: '$79.00', img: '/Arrival4.png' },
  { name: 'Blue Plain Shirt', price: '$49.00', img: '/Arrival5.png' },
  { name: 'Dark Blue Shirt', price: '$89.00', img: '/Arrival6.png' },
  { name: 'Outcast T Shirt', price: '$19.00', img: '/Arrival7.png' },
  { name: 'Polo Plain Shirt', price: '$29.00', img: '/Arrival8.png' },
]

export default function NewArrivals() {
  return (
    <section className="px-8 py-12">
      <h2 className="text-center text-2xl font-bold">Discover NEW Arrivals</h2>
      <p className="text-center text-gray-600 mb-8">Recently added shirts!</p>
      <a href="/Product">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="text-center">
            <img
              src={p.img}
              alt={p.name}
              className="object-cover"
            />
            <p>{p.name}</p>
            <p className="text-blue-600">{p.price}</p>
          </div>
        ))}
        </div>
      </a>
    </section>
  )
}
