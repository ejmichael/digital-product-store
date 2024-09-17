import React, { useContext, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { CartContext } from '../context/CartContext';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

const PaystackPayment = ({deliveryAddress}) => {
  const publicKey = "pk_test_2c2ba5b58c11ca05c55a0d6ea3ba3e6f076c65b4"; // Replace with your Paystack public key
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  console.log(cart);

  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(''); // Modal message content
  const [isSuccess, setIsSuccess] = useState(false); // Track payment success

  const amount = cart.total * 100; // Convert Rand to cents (e.g., R100 becomes 10000 cents)
  const email = user?.email; // Replace with actual customer email
  const reference = new Date().getTime().toString(); // Generate a unique reference

  const onSuccess = async (reference) => {
    console.log('Payment successful!', reference);
    // Here, you can send the transaction details to your backend for verification

    try {
        const response = await axios.post(`http://localhost:5000/api/order/create/${reference.reference}`,  {cart, deliveryAddress}, {
          headers: {
              'Authorization': `Bearer ${user.token}`
            }
      });
        if (response.data) {
          // Payment verified successfully
          console.log('Payment verified:', response.data);
          setModalContent('Payment was successful! Your order has been placed with reference number: ', response.data.data.reference);
          setIsSuccess(true);

        }
      } catch (error) {
        console.error('Payment verification failed', error);
        setModalContent('Payment verification failed. Please try again.');
        setIsSuccess(false);
      }
      setShowModal(true); 
  };

  const onClose = () => {
    console.log('Transaction was not completed.');
    setModalContent('Transaction was not completed.');
    setIsSuccess(false);
    setShowModal(true); 
  };

  const componentProps = {
    email,
    amount, // Amount in cents (Rands * 100)
    publicKey,
    text: 'Pay Now',
    currency: 'ZAR',
    onSuccess,
    onClose,
    reference,
  };

  return (
    <div>
      <PaystackButton className='w-full' {...componentProps} />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg mb-4 text-center">{modalContent}</p>
            {isSuccess && (
              <button 
                onClick={() => window.location.href = '/orders'}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                View Orders
              </button>
            )}
            <button 
              onClick={() => setShowModal(false)}
              className="w-full mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default PaystackPayment;
