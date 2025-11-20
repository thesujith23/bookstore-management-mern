📚 MERN Book Store Management App

A full-stack Book Management system built using the MERN stack with secure JWT authentication.
Users can register, log in, and manage books through a clean & modular interface. This project showcases practical end-to-end full-stack development skills, including protected APIs, state management, and CRUD operations.

🚀 Features

🔐 User Authentication (Signup + Login)

🔑 JWT-Protected Backend Routes

🔒 Password Hashing with bcrypt

📚 Add / Delete Books

🔎 Search Books

💾 Persistent Login using localStorage

🚪 Logout Functionality

🎨 Modern UI (In Progress)

⚛️ React Hooks for State Management

🧩 Tech Stack
Frontend

React

Axios

React Hooks

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (Authentication)

bcryptjs (Password Hashing)

🧩 Tech Stack Badges
<p align="left"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" /> </p>
📦 Folder Structure
📦 MERN Book Store
 ┣ 📂 backend
 ┃ ┣ 📂 models
 ┃ ┃ ┣ user.js
 ┃ ┃ ┗ book.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ authRoutes.js
 ┃ ┃ ┗ bookRoutes.js
 ┃ ┗ server.js
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ Login.jsx
 ┃ ┃ ┃ ┣ Signup.jsx
 ┃ ┃ ┃ ┗ Book.jsx
 ┃ ┃ ┣ App.jsx
 ┃ ┃ ┣ App.css
 ┃ ┃ ┗ index.js
 ┃ ┗ package.json
 ┣ README.md
 ┗ package.json

⚙️ How to Run the Project
▶ 1. Clone the Repository
git clone <your-repo-url>

▶ 2. Start Backend
cd backend
npm install
node server.js


Backend runs on: http://localhost:5000

▶ 3. Start Frontend
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

📡 API Routes
🔐 Auth Routes
POST /api/auth/register     → Register user
POST /api/auth/login        → Login user (returns JWT)

📚 Book Routes (JWT Protected)
GET    /api/books           → Get all books
POST   /api/books           → Add new book
DELETE /api/books/:id       → Delete a book

⭐ Professional Summary

This project demonstrates complete MERN stack development, covering secure authentication, REST APIs, protected routes, data validation, and frontend integration. It serves both as a practical learning project and a strong portfolio piece highlighting real-world full-stack capabilities.
