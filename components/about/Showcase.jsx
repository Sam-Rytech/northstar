export default function Showcase() {
  const items = [
    { img: '/About/Woman.png', btn: 'BUY NOW' },
    { img: '/About/Man.png', btn: 'BUY NOW' },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-6">
      {items.map((item, i) => (
        <div key={i} className="relative group">
          <img
            src={item.img}
            alt=""
            className="w-full object-cover rounded-lg"
          />
          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow">
            {item.btn}
          </button>
        </div>
      ))}
    </section>
  )
}
