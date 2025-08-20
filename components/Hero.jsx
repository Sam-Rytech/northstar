export default function Hero() {
  return (
    <section
      className="relative h-[600px] flex items-center justify-end bg-cover bg-center"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold pr-20">STYLIST PICKS BEAT <br/> THE HEAT</h1>
        <button className="mt-4 px-6 py-2 border border-white">Shop Now</button>
      </div>
    </section>
  )
}