"use client"
import React, { useState } from 'react'

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'description' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'reviews' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews(0)
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'description' && (
        <p className="text-gray-700 leading-relaxed">
          A key objective is engaging digital marketing customers and allowing
          them to interact with the brand through servicing and delivery of
          digital media. Information is easy to access at a fast rate through
          the use of digital communications. <br />
          <br />
          Users with access to the Internet can use many digital mediums, such
          as Facebook, YouTube, Forums, and Email etc. Through Digital
          communications it creates a multi-communication channel where
          information can be quickly exchanged around the world by anyone
          without any regard to whom they are. Social segregation plays no part
          through social mediums due to lack of face to face communication and
          information being wide spread instead to a selective audience.
        </p>
      )}

      {activeTab === 'reviews' && (
        <p className="text-gray-500 italic">
          No reviews yet. Be the first to review this product!
        </p>
      )}
    </div>
  )
}

export default ProductTabs
