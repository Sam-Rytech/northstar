import { Truck, Headphones, RotateCcw, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'FREE SHIPPING',
    desc: 'On all orders above $100',
    icon: Truck,
  },
  {
    title: 'SUPPORT 24/7',
    desc: 'Our team is here for you',
    icon: Headphones,
  },
  {
    title: '30 DAYS RETURN',
    desc: 'Return within 30 days',
    icon: RotateCcw,
  },
  {
    title: '100% SECURE',
    desc: 'Payments secured',
    icon: ShieldCheck,
  },
]

export default function Features() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 text-center py-12 bg-gray-50">
      {features.map((f, i) => {
        const Icon = f.icon
        return (
          <div
            key={i}
            className="flex flex-col items-center px-4 py-6 space-y-2"
          >
            <Icon className="w-8 h-8 text-indigo-600" />
            <h3 className="font-bold">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        )
      })}
    </section>
  )
}
