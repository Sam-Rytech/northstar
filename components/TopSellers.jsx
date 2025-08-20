const topSellers = [
  { name: 'Gray Polo Shirt', price: '$49.00', img: '/s1.jpg' },
  { name: 'Red Shirt', price: '$69.00', img: '/s2.jpg' },
  { name: 'Polo White Shirt', price: '$29.00', img: '/s3.jpg' },
  { name: 'Pink Casual Shirt', price: '$39.00', img: '/s4.jpg' },
]

export default function TopSellers() {
  return (
    <section className="px-8 py-12">
      <h2 className="text-center text-2xl font-bold">Top Sellers</h2>
      <p className="text-center text-gray-600 mb-8">
        Browse our top-selling products
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topSellers.map((p, i) => (
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
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white">SHOP NOW</button>
      </div>
    </section>
  )
}
