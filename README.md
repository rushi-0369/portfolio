# Personal Portfolio Website 🌐

This repository contains the source code for my **personal portfolio website** built using **React**.
The website showcases my projects, skills, and provides a contact form where visitors can send messages directly.

---

## 🚀 Live Demo

https://rushicodes.vercel.app/

---

## ✨ Features

* Responsive modern UI
* Smooth scrolling navigation
* Projects showcase section
* Skills section
* Contact form with backend integration
* Social media links (GitHub, LinkedIn, Gmail, Phone)
* Message storage through backend API

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* CSS

### Backend

* Node.js
* Express.js

### Deployment

* Vercel (Frontend)
* Render / Backend hosting

---

## 📂 Project Structure

```
portfolio
 ├── frontend
 │   ├── src
 │   │   ├── assets
 │   │   ├── components
 │   │   ├── context
 │   │   └── App.jsx
 │   └── package.json
 │
 ├── backend
 │   ├── models
 │   │   └── Contact.js
 │   ├── server.js
 │   └── package.json
 │
 └── README.md
```

---

## 📬 Contact Form API

When a user submits the contact form:

```
POST /api/contact
```

Example request:

```json
{
  "name": "John",
  "email": "john@email.com",
  "message": "Hello!"
}
```

The message is processed by the backend and stored for later review.

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Install frontend dependencies:

```
cd client
npm install
npm run dev
```

Run backend:

```
cd server
npm install
node server.js
```

---

## 👨‍💻 Author

Rushi

GitHub:
https://github.com/rushi-0369
