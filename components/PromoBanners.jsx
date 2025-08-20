export default function PromoBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-12">
      <div className="bg-black text-white p-12 text-center">
        <h2 className="text-xl font-bold mb-2">PEACE OF MIND</h2>
        <p className="mb-4">A one-stop platform for all your fashion needs</p>
        <button className="px-6 py-2 bg-white text-black">BUY NOW</button>
      </div>
      <div className="bg-black text-white p-12 text-center">
        <h2 className="text-xl font-bold mb-2">BUY 2 GET 1 FREE</h2>
        <p className="mb-4">End of season sale</p>
        <button className="px-6 py-2 bg-white text-black">BUY NOW</button>
      </div>
    </section>
  )
}
