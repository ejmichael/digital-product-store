import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Branding / Logo */}
        <div>
          <h2 className="text-2xl font-bold">MLG Fitness</h2>
          <p className="text-sm mt-2 italic">© 2025 MLG Fitness. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 md:items-center ">
          <Link to="/contact" className="hover:text-green-500 transition">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-green-500 transition">Privacy Policy</Link>
          <Link to="/refunds" className="hover:text-green-500 transition">Refund Policy</Link>
          <Link to="/terms" className="hover:text-green-500 transition">Terms of Service</Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/miranda_leigh_ghirdari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@miranda_leigh16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer