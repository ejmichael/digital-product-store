import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="font-bebas-neue text-3xl font-bold text-green-600 tracking-wider">Payment Successful!</h1>
      <p className="mt-4 text-gray-600">Thank you for your purchase. Your payment has been processed successfully.</p>
      <p className="mt-4 text-gray-600">Your plan will be sent to you shortly.</p>
      {/* <a href="/profile/orders" className="mt-6 inline-block bg-pink-500 text-white px-4 py-2 rounded">
        Go to download 
      </a> */}
    </div>
  );
};

export default PaymentSuccess;
