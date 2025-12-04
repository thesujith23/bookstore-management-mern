# 📚 Bookstore Management System

A modern, full-stack bookstore management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This system provides comprehensive book inventory management with secure user authentication and intuitive CRUD operations.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![Express](https://img.shields.io/badge/Framework-Express-000000)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

## 🌟 Overview

This bookstore management system demonstrates professional full-stack development practices, including secure authentication, RESTful API design, and modern React patterns. The application enables users to maintain a complete book inventory with features for adding, searching, updating, and removing books from the collection.

## ✨ Key Features

### Authentication & Security
- **User Registration & Login** - Complete authentication flow with form validation
- **JWT-Based Authorization** - Secure token-based authentication for protected routes
- **Password Encryption** - Industry-standard bcrypt hashing for password security
- **Persistent Sessions** - Token storage in localStorage for seamless user experience
- **Secure Logout** - Clean session termination with token removal

### Book Management
- **Create Books** - Add new books to the inventory with detailed information
- **View Books** - Browse complete book collection with organized display
- **Search Functionality** - Quickly find books in your collection
- **Delete Books** - Remove books from inventory with confirmation
- **Real-time Updates** - Instant UI updates after CRUD operations

### Technical Highlights
- **Protected API Routes** - JWT middleware securing all book management endpoints
- **Modern React Architecture** - Functional components with Hooks (useState, useEffect)
- **RESTful API Design** - Clean, semantic API endpoints following REST principles
- **Error Handling** - Comprehensive error management on both frontend and backend
- **Responsive Design** - Mobile-friendly interface (in progress)

## 🛠️ Technology Stack

### Frontend
- **React** - Component-based UI library for building interactive interfaces
- **Axios** - Promise-based HTTP client for API communication
- **React Hooks** - Modern state management and lifecycle methods
- **Vite** - Next-generation frontend build tool for faster development

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Minimal and flexible web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling for Node.js
- **JWT (jsonwebtoken)** - Secure authentication token generation and verification
- **bcryptjs** - Password hashing library for secure credential storage
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** for version control

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/thesujith23/bookstore-management-mern.git
cd bookstore-management-mern
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
node server.js
```

The backend server will start on `http://localhost:5000`

### 4. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}

Response: { "token": "jwt_token", "user": {...} }
```

### Book Management Endpoints (Protected)

All book endpoints require JWT token in Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

#### Get All Books
```http
GET /api/books
```

#### Add New Book
```http
POST /api/books
Content-Type: application/json

{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publishYear": "number",
  "genre": "string"
}
```

#### Delete Book
```http
DELETE /api/books/:id
```

## 🏗️ Project Structure

```
bookstore-management-mern/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route handlers
│   ├── middleware/      # JWT authentication middleware
│   ├── config/          # Database configuration
│   └── server.js        # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service functions
│   │   └── App.jsx      # Main application component
│   └── package.json
└── README.md
```

## 🔒 Security Features

- **Password Hashing** - All passwords are hashed using bcrypt before storage
- **JWT Authentication** - Stateless authentication using JSON Web Tokens
- **Protected Routes** - Middleware verification for secured endpoints
- **Input Validation** - Server-side validation for all user inputs
- **CORS Configuration** - Controlled cross-origin resource sharing

## 🎯 Future Enhancements

- [ ] Book update functionality (PUT/PATCH endpoints)
- [ ] Advanced search with filters (author, genre, year)
- [ ] User roles and permissions (admin/user)
- [ ] Book cover image uploads
- [ ] Pagination for large collections
- [ ] Book categories and tags
- [ ] Reading lists and favorites
- [ ] Export functionality (CSV/PDF)
- [ ] Comprehensive unit and integration tests
- [ ] Deployment configurations (Docker, CI/CD)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sujith**

- GitHub: [@thesujith23](https://github.com/thesujith23)

## 🙏 Acknowledgments

- MERN Stack Community
- MongoDB Documentation
- React Documentation
- Express.js Team

---

⭐ If you find this project useful, please consider giving it a star on GitHub!

## 📞 Support

For questions or support, please open an issue in the GitHub repository.
