const founders = [
  { name: 'HM Jawad', img: '/About/Founder1.png' },
  { name: 'Furqan Abid', img: '/About/Founder2.png' },
  { name: 'Abdullah Ah', img: '/About/Founder3.png' },
  { name: 'Abrar Khan', img: '/About/Founder4.png' },
]

export default function Founders() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-8">The Founders</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {founders.map((f, i) => (
          <div key={i}>
            <img
              src={f.img}
              alt={f.name}
              className="w-[295px] h-[280px] object-cover rounded-lg"
            />
            <p className="mt-2 font-medium">{f.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
