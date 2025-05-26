import React from 'react'

const ContactUs = () => {
  return (
    <div className="px-20 py-20  h-[90vh] flex flex-col md:flex-row items-center justify-around gap-8">
      <div className='w-full '>
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Request a Free Quote</h3>
          <form id="lead-form" className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <textarea
              placeholder="Describe what you need cleaned..."
              rows="3"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#03989e] text-white font-semibold py-2 rounded hover:bg-[#027a80] transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-center mb-8 text-[#03989e]">Contact</h1>
        <p className="text-gray-700 mb-4">
              Should you have any questions or queries, please feel free to contact our support person at the email address listed below.
        </p>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Email: <strong>ethanj.michael03@gmail.com</strong></li>
          {/* <li>Mailing Address: <strong>[Your Business Address, if applicable]</strong></li> */}
        </ul> 
      </div>      
    </div>
  )
}

export default ContactUs