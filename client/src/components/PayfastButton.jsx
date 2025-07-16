import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const PayfastButton = () => {
  const [loading, setLoading] = useState(false);
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  // Determine backend URL dynamically
  const domain = window.location.href.includes("localhost")
    ? "http://localhost:5000"
    : "https://miranda-fitness-backend.onrender.com";

    const initiatePayment = async () => {
      setLoading(true);
      try {
        // Step 1: Initiate Payment with PayFast
        const paymentResponse = await axios.post(`${domain}/payfast/payfast-initiate`, {
          amount: cart.total,
          item_name: "12 Week Body Transformation",
          email: user.email, // Replace with the actual email of the user
        });
    
        if (paymentResponse.data.redirectUrl) {

            console.log("Response recieved")
          const { redirectUrl, paymentReference } = paymentResponse.data; // Get paymentReference
    
          // Step 2: Create the Order in your system
          
          const orderResponse = await axios.post(
            domain + `/api/order/create/${paymentReference}`, 
            {
              cart, // Pass the cart details
              paymentReference, // Use the paymentReference from PayFast
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`, // Authentication token
              },
            }
          );
    
          // console.log(orderResponse);
          
          if (orderResponse.status === 201) {
            console.log("Order created successfully:", orderResponse.data);
            setLoading(true)
            clearCart();
            // Step 3: Redirect to PayFast for payment
            window.location.href = redirectUrl
          } else {
            setLoading(false);
            // console.error("Failed to create order:", orderResponse.data);
            alert("Order creation failed. Please try again.");
          }
        } else {
          // console.error("No redirect URL received from PayFast.");
          alert("Payment initiation failed. Please try again.");
        }
      } catch (error) {
        // console.error("Error during payment initiation or order creation:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    

  return (
    <button
      onClick={initiatePayment}
      disabled={loading}
      className=""
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PayfastButton;
