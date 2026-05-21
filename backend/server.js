const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

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

console.log("FRONTEND_URL =", process.env.FRONTEND_URL);
console.log("EMAIL_USER =", process.env.EMAIL_USER);

app.use(express.json());

/* ================== DEBUG ================== */
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

/* ================== DB ================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected ✅"))
  .catch((err) => {
    console.error("MongoDB error:", err);
    process.exit(1);
  });

/* ================== MAIL SETUP ================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4,
});



/* Optional: verify transporter (helps debugging) */
transporter.verify((error, success) => {
  if (error) {
    console.error("Mail server error:", error);
  } else {
    console.log("Mail server ready ✅");
  }
});

/* ================== ROUTE ================== */
app.post("/contact", async (req, res) => {
  try {
    console.log("Incoming request:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Save to DB
    await new Contact({ name, email, message }).save();

    // Send Email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `${name} (${email}): ${message}`,
    });

    console.log("Email sent:", info.response);

    res.status(200).json({ success: true });

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