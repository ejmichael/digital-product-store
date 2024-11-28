import React, { useContext, useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PaystackPayment = () => {
  const publicKey = "pk_test_5b288b5e8b8b8756f5cbd8a12a4db7699522b794"; // Replace with your Paystack public key
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const domain = window.location.href.includes("localhost")
    ? "http://localhost:5000"
    : "https://blood-sugar-backend.onrender.com";

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(''); // Modal message content
  const [isSuccess, setIsSuccess] = useState(false); // Track payment success

  const amount = cart.total * 100; // Convert Rand to cents (e.g., R100 becomes 10000 cents)
  const email = user?.email; // Replace with actual customer email
  const reference = new Date().getTime().toString(); // Generate a unique reference

  // Log the modal content after it has been updated
  useEffect(() => {
    console.log("Updated modal content:", modalContent);
  }, [modalContent]);

  const onSuccess = async (reference) => {
    console.log("Payment successful!", reference);
    try {
      const response = await axios.post(
        `${domain}/api/order/create/${reference.reference}`,
        { cart },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.data) {
        console.log("Payment verified:", response.data);
        
        // Clear the cart and set success status
        clearCart();

        navigate('/orders/' +     response.data._id)
        
        setIsSuccess(true);
        
      } else {
        throw new Error("No response data received.");
      }
    } catch (error) {
      console.error("Payment verification failed", error);
      setModalContent("Payment verification failed. Please try again.");
      setIsSuccess(false);
    }
  };

  const onClose = () => {
    console.log("Transaction was not completed.");
    setModalContent("Transaction was not completed.");
    setIsSuccess(false);
    setShowModal(true); // Show modal only after setting content
  };

  const componentProps = {
    email,
    amount, // Amount in cents (Rands * 100)
    publicKey,
    text: "Paystack Test",
    currency: "ZAR",
    onSuccess,
    onClose,
    reference,
  };

  const handleCloseModal = () => {
    // window.location.href = "/";
    setShowModal(false);
  };

  return (
    <div>
      <PaystackButton className="w-full" {...componentProps} />

      {/* Render the modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-lg mb-4 text-center">{modalContent}</p>
            {/* {isSuccess && (
              <button
                onClick={() => navigate("/profile/orders")}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Go to download
              </button>
            )} */}
            <button
              onClick={handleCloseModal}
              className="w-full mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaystackPayment;
