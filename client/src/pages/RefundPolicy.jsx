import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-8 text-pink-600">Refund Policy</h1>
      <p className="text-gray-700 mb-4">Effective Date: 23 July 2024</p>

      <p className="text-gray-700 mb-4">
            No refunds are possible under any circumstances. All sales made are final as these are instantly downloadable digital products that can be resold as your own. Please read the product page carefully before making a purchase. If you have any questions, please reach out to us.
      </p>

      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Email: <strong>ethanj.michael03@gmail.com</strong></li>
        {/* <li>Mailing Address: <strong>[Your Business Address, if applicable]</strong></li> */}
      </ul>
    </div>
  )
}

export default RefundPolicy