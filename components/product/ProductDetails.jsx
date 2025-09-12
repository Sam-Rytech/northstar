"use client"
import React, { useState } from 'react'

const ProductDetails = () => {
  const [size, setSize] = useState('')

  return (
    <div>
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mb-2">
        HOME / SHOP / WOMEN /{' '}
        <span className="font-semibold text-gray-800">SHOP</span>
      </p>

      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-2">Plain White Shirt</h1>

      {/* Reviews */}
      <div className="flex items-center mb-4">
        <span className="text-orange-500 text-lg mr-2">★★★★★</span>
        <span className="text-gray-600 text-sm">(15)</span>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="text-gray-400 line-through mr-2">$69.00</span>
        <span className="text-blue-600 text-2xl font-semibold">$59.00</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        A classic t-shirt never goes out of style. This is our most premium
        collection of shirt. This plain white shirt is made up of pure cotton
        and has a premium finish.
      </p>

      {/* Size Dropdown */}
      <div className="mb-6">
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border border-gray-300 rounded-md p-3 w-full md:w-1/2 focus:outline-none focus:border-blue-600"
        >
          <option value="">Select Size</option>
          <option value="S">Small (S)</option>
          <option value="M">Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
        </select>
      </div>

      {/* Add to Cart Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
        ADD TO CART
      </button>

      {/* Categories & Tags */}
      <div className="mt-6 text-sm text-gray-600">
        <p>
          <strong>Category:</strong> Women, Polo, Casual
        </p>
        <p>
          <strong>Tags:</strong> Modern, Design, Cotton
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
