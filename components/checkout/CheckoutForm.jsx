'use client'

import { useState } from 'react'

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Street Address*"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Town / City*"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
      </form>
    </div>
  )
}

export default CheckoutForm
