const express = require("express");
const crypto = require("crypto"); // For checksum validation
const payfastRouter = express.Router();


payfastRouter.post("/payfast-initiate", (req, res) => {
    const { amount, item_name, email } = req.body;
  
    // Your PayFast merchant credentials
    const payfastUrl = "https://sandbox.payfast.co.za/eng/process"; // Testing URL
    const merchantId = "10000100"; // Replace with actual Merchant ID
    const merchantKey = "46f0cd694581a"; // Replace with actual Merchant Key
    const returnUrl = "https://blood-sugar-backend.onrender.com/success";
    const cancelUrl = "https://blood-sugar-backend.onrender.com/cancel";
    //const notifyUrl = "https://blood-sugar-backend.onrender.com/notify";
  
    // Construct the query string
    const queryParams = new URLSearchParams({
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      //notify_url: notifyUrl,
      amount: amount, // Example: "100.00"
      item_name: item_name,
      email_address: email,
    });
  
    // Send back the redirect URL to the frontend
    res.json({ redirectUrl: `${payfastUrl}?${queryParams.toString()}` });
  });

payfastRouter.post("/payfast-notify", (req, res) => {
    const { body } = req;
  
    // Validate the signature or checksum (optional but recommended)
    const checksum = crypto
      .createHash("md5")
      .update(Object.values(body).join(""))
      .digest("hex");
  
    if (checksum === body.signature) {
      // Process the payment
      console.log("Payment verified:", body);
      res.status(200).send("Payment verified");
    } else {
      console.error("Payment verification failed");
      res.status(400).send("Invalid signature");
    }
  });
  

module.exports = payfastRouter;
