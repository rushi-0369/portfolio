const express = require("express");
const mongoose = require("mongoose");
const { Resend } = require("resend");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

/* ================== CORS ================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

/* ================== DEBUG ================== */
console.log("FRONTEND_URL =", process.env.FRONTEND_URL);

/* ================== DB ================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected ✅"))
  .catch((err) => {
    console.error("MongoDB error:", err);
    process.exit(1);
  });

/* ================== ROUTE ================== */
app.post("/contact", async (req, res) => {
  try {
    console.log("Incoming request:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    // Save to DB
    await new Contact({
      name,
      email,
      message,
    }).save();

    // Send Email using Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `

Name: ${name}
Email: ${email}

Message:
${message}
`,
    });

    console.log("Email sent ✅");

    res.status(200).json({
      success: true,
    });

  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }
});

/* ================== TEST ROUTE ================== */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================== SERVER ================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});