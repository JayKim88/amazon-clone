require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// API

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received!! >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok - Created
  // console.log(paymentIntent);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/challenge-cc017/us-central1/api
