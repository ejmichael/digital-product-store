import React from 'react'
import { Link } from 'react-router-dom'

const LeadSubmitted = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
        Thank you! We will contact you soon.
      </h1>
      <Link
        to="/"
        className="mt-4 inline-block bg-[#03989e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#027a80] transition"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default LeadSubmitted
