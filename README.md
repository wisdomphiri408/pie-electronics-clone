# Pie Tech - Electronics Marketplace

A modern web application for buying and selling electronics, built with React (Vite) frontend and Node.js/Express backend.

## Features

- Browse electronics products
- User authentication (login/register)
- Sellers can add products
- Buyers can place orders
- Admin dashboard
- Image upload via Cloudinary
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React with Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion

### Backend
- Node.js + Express
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary for image storage
- Multer for file uploads

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Set up environment variables (see .env.example)

5. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```

6. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## Project Structure

```
pie-electronics/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.