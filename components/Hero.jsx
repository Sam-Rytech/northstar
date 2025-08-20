export default function Hero() {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">STYLIST PICKS BEAT THE HEAT</h1>
        <button className="mt-4 px-6 py-2 border border-white">Shop Now</button>
      </div>
    </section>
  )
}