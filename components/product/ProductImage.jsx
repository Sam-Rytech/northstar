import React from 'react'

const ProductImage = () => {
  return (
    <div className="relative">
      {/* Discount Badge */}
      <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
        -24%
      </span>

      <img
        src="https://images.unsplash.com/photo-1520975916090-310aaa8435e6"
        alt="Plain White Shirt"
        className="w-full rounded-lg object-cover"
      />

      {/* Thumbnail indicators */}
      <div className="flex space-x-2 mt-4 justify-center">
        {[1, 2, 3, 4, 5].map((dot, index) => (
          <span
            key={index}
            className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-500 cursor-pointer"
          ></span>
        ))}
      </div>
    </div>
  )
}

export default ProductImage
