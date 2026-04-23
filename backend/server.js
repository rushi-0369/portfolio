const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected ✅"))
  .catch((err) => console.log(err));

// Mail Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields required" });
  }

  try {
    // Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send Email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.error(error);
  }
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
