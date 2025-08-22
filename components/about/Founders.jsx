const founders = [
  { name: 'HM Jawad', img: '/founder1.jpg' },
  { name: 'Furqan Abid', img: '/founder2.jpg' },
  { name: 'Abdullah Ah', img: '/founder3.jpg' },
  { name: 'Abrar Khan', img: '/founder4.jpg' },
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
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-2 font-medium">{f.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
