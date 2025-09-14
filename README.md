# 🛍️ Forever – Full-Stack E-Commerce Platform

A **comprehensive e-commerce solution** built with **React.js frontend, Node.js/Express.js backend, and MongoDB database**.  
Designed to deliver **seamless shopping experiences**, with **secure authentication, payment integration, real-time cart updates, and an intuitive admin dashboard** for product & inventory management.

---

## 🚀 Tech Stack

- **Frontend:** [React.js](https://reactjs.org/)  
- **Backend:** [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)  
- **Database:** [MongoDB](https://www.mongodb.com/)  
- **Authentication:** JWT-based secure login/signup  
- **Payment Integration:** [Stripe](https://stripe.com/) (or chosen gateway)  
- **Deployment:** *(Optional: Vercel / Heroku / Render / AWS)*  

---

## ✨ Key Features

✅ Secure user authentication (JWT + bcrypt)  
✅ Real-time cart updates with automatic inventory adjustment  
✅ Online payments with integrated payment gateway  
✅ Order tracking with detailed history  
✅ Admin dashboard for product & inventory management  
✅ Responsive design (mobile, tablet, desktop)  
✅ Optimized performance with API caching & lazy loading  
✅ Role-based access control (User vs. Admin)  

---

## 📸 Screenshots (Add your own)

<img width="1794" height="891" alt="Screenshot 2025-09-05 120252" src="https://github.com/user-attachments/assets/ccf1d20c-bd0d-416e-a214-7fda705e99be" />

## 🗂️ Project Structure

forever-ecommerce/
│── client/ # React.js frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── utils/
│
│── server/ # Node.js + Express backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── utils/
│
│── database/ # MongoDB collections & schema
│── README.md

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**
bash
git clone https://github.com/your-username/forever-ecommerce.git
cd forever-ecommerce

2️⃣ **Install dependencies**

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

3️⃣ **Environment Variables**
Create a .env file in the server/ directory and configure:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

4️⃣ **Run the app**

# Run backend (server)
cd server
npm run dev

# Run frontend (client)
cd ../client
npm start

## 📊 Architecture Overview
[ React.js (Frontend) ]  <-->  [ Node.js + Express API ]  <-->  [ MongoDB Database ]
                   ↘---- Payment Gateway (Stripe) ----↙

## 📦 Deployment

- Frontend :-> https://ecommerce-frontend-omega-brown.vercel.app
- Backend :-> https://ecommerce-backend-three-ecru.vercel.app
- Admin Pannel :-> https://ecommerce-admin-sage.vercel.app

## 📜 License

- This project is licensed under the MIT License


