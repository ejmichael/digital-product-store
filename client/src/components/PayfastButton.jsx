import React, { useState } from "react";
import axios from "axios";

const PayfastButton = () => {
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/payfast/payfast-initiate", {
        amount: "100.00", // Example amount
        item_name: "Blood Sugar Tracker",
        email: "customer@example.com",
      });

      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl; // Redirect to PayFast
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={initiatePayment}
      disabled={loading}
      className="bg-blue-500 text-white p-2 rounded"
    >
      {loading ? "Processing..." : "Pay with PayFast"}
    </button>
  );
};

export default PayfastButton;
