const express = require("express");
const crypto = require("crypto"); // For checksum validation
const payfastRouter = express.Router();


payfastRouter.post("/payfast-initiate", (req, res) => {
    const { amount, item_name, email } = req.body;
  
    // Your PayFast merchant credentials
    const payfastUrl = "https://sandbox.payfast.co.za/eng/process"; // Testing URL
    const merchantId = "26051467"; // Replace with actual Merchant ID
    const merchantKey = "xty3ticuu2gup"; // Replace with actual Merchant Key
    const returnUrl = "http:localhost:3000/success";
    const cancelUrl = "http:localhost:3000/cancel";
    const notifyUrl = "http:localhost:3000/notify";
  
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
