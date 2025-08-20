export default function Footer() {
  return (
    <footer className="bg-gray-100 px-8 py-12 mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">COMPANY INFO</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Latest Posts</li>
            <li>Contact Us</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">HELP LINKS</h3>
          <ul className="space-y-1">
            <li>Tracking</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">USEFUL LINKS</h3>
          <ul className="space-y-1">
            <li>Special Offers</li>
            <li>Gift Cards</li>
            <li>Advertising</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">GET IN THE KNOW</h3>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border p-2"
          />
        </div>
      </div>
      <div className="mt-8 text-xs text-gray-600 text-center">
        © 2025 NorthStar eCommerce. All rights reserved.
      </div>
    </footer>
  )
}
