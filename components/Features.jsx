const features = [
  { title: 'FREE SHIPPING', desc: 'On all orders above $100' },
  { title: 'SUPPORT 24/7', desc: 'Our team is here for you' },
  { title: '30 DAYS RETURN', desc: 'Return within 30 days' },
  { title: '100% SECURE', desc: 'Payments secured' },
]

export default function Features() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 text-center py-8">
      {features.map((f, i) => (
        <div key={i} className="px-4">
          <h3 className="font-bold">{f.title}</h3>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  )
}
