export default function Showcase() {
  const items = [
    { img: '/woman.jpg', btn: 'BUY NOW' },
    { img: '/man.jpg', btn: 'BUY NOW' },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-6">
      {items.map((item, i) => (
        <div key={i} className="relative group">
          <img
            src={item.img}
            alt=""
            className="w-full h-96 object-cover rounded-lg"
          />
          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow">
            {item.btn}
          </button>
        </div>
      ))}
    </section>
  )
}
