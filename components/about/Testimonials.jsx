const testimonials = [
  {
    name: 'Stacy',
    text: 'Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.',
    img: '/About/Test1.png',
  },
  {
    name: 'Tiffany',
    text: 'I ordered 5 shirts from them and received them in no time. The customer support was awesome!',
    img: '/About/Test2.png',
  },
  {
    name: 'James',
    text: 'I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.',
    img: '/About/Test3.png',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-12">Testimonials</h2>
      <div className="space-y-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="italic text-gray-700 mb-2">“{t.text}”</p>
              <p className="font-semibold">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
