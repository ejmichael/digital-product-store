import React from 'react'

const ContactUs = () => {
  return (
    <div className="h-[82vh] px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-8 text-black font-bebas-neue tracking-wider">Contact</h1>
      <p className="text-gray-700 mb-4">
            Should you have any questions or queries, please feel free to contact our support person at the email address listed below.
      </p>

      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Email: <strong>ethanj.michael03@gmail.com</strong></li>
        {/* <li>Mailing Address: <strong>[Your Business Address, if applicable]</strong></li> */}
      </ul>
    </div>
  )
}

export default ContactUs