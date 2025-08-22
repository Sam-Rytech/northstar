'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
      <div className="text-2xl font-bold">NorthStar</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact Us</Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        <button>👤</button>
        <button>🛒</button>
      </div>
    </nav>
  )
}
