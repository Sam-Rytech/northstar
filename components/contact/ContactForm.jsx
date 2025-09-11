import React from 'react'

const ContactForm = () => {
  return (
    <div className="md:col-span-2">
      <h3 className="text-2xl font-semibold mb-4">
        We would love to hear from you.
      </h3>
      <p className="mb-8">
        If you have any query or any type of suggestion, you can contact us
        here. We would love to hear from you.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-600"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}

export default ContactForm
