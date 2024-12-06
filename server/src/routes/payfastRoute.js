const express = require("express");
const crypto = require("crypto"); // For checksum validation
const payfastRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
const { log } = require("console");


payfastRouter.post("/payfast-initiate", (req, res) => {
  console.log("Initiating payment  on backend");
    
  const { amount, item_name, email } = req.body;
    const orderReference = uuidv4();
    const paymentReference = uuidv4(); 
  
    // Your PayFast merchant credentials
    //const payfastUrl = "https://sandbox.payfast.co.za/eng/process"; // Testing URL
    //const merchantId = "10000100"; // Replace with actual Merchant ID
    //const merchantKey = "46f0cd694581a"; // Replace with actual Merchant Key
    const payfastUrl = "https://www.payfast.co.za/eng/process"; // Live URL
    const merchantId = process.env.PAYFAST_MERCHANT_ID; // Replace with actual Merchant ID
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY; // Replace with actual Merchant Key
    const returnUrl = "https://www.bloodsugartracker.co.za/success";
    const cancelUrl = "https://www.bloodsugartracker.co.za/cancel";
    const notifyUrl = "https://www.bloodsugartracker.co.za/notify";
  
    // Construct the query string
    const queryParams = new URLSearchParams({
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      notify_url: notifyUrl,
      amount: amount, // Example: "100.00"
      item_name: item_name,
      email_address: email,
      m_payment_id: paymentReference, // Include the reference as PayFast's custom field
    });
  
    const redirectUrl = `${payfastUrl}?${queryParams.toString()}`;

    // Send the reference and redirect URL back to the client
    res.status(200).json({
      redirectUrl,
      paymentReference,
      orderReference, // Include the reference for use in order creation
    });

    console.log("response sent");
    
  });

payfastRouter.post("/notify", (req, res) => {
  // PayFast will send a notification with payment details
  const { paymentReference } = req.body; // This will be sent by PayFast

  // Verify the transaction by calling PayFast's transaction verification API
  axios.post('https://sandbox.payfast.co.za/eng/query/validate', {
    m_payment_id: paymentReference,
    // Other parameters like merchant_id, merchant_key, etc. should also be sent
  })
  .then(response => {
    // Validate the payment status here
    const paymentStatus = response.data; // Parse PayFast response

    // Update order status based on payment verification result
    if (paymentStatus.status === 'COMPLETE') {
      // Update the order status in your database
      console.log(`Payment successful for order ${paymentReference}`);
    } else {
      console.log(`Payment failed for order ${paymentReference}`);
    }
  })
  .catch(error => {
    console.error('Error during payment verification:', error);
  });

  res.send("Payment verification received");
});
  

module.exports = payfastRouter;
