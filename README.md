# OliviaWilson-Parlour (Server-Side)

Welcome to **OliviaWilson-Parlour**, the backend server built with **Node.js**. This server handles requests, manages appointments, and provides a secure API for frontend interaction.

## Features

- 🚀 **Built with Node.js & Express.js** - Fast and scalable backend.
- 🗄️ **Database Integration** - MongoDB for data storage.
- 🔐 **Authentication** - Secure login and user authentication.
- 📅 **Booking System API** - Manage customer appointments.
- 📡 **RESTful API** - Well-structured endpoints for seamless communication.
- 🌍 **CORS Enabled** - Allows cross-origin requests for frontend integration.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **API Documentation:** Swagger / Postman

## Installation

Follow these steps to set up the project locally:

```sh
# Clone the repository
git clone https://github.com/Afran1984/OliviaWilson-parlour-Server

# Navigate to the project directory
cd OliviaWilson-parlour-Server

# Install dependencies
npm install

# Create a .env file and configure your environment variables

# Start the server
npm start
```

The API should now be running on `http://localhost:5000`.

## Usage

1. **User Authentication** - Signup/Login to access services.
2. **Manage Appointments** - Create, update, and delete bookings.
3. **Admin Panel** - Handle service listings and user management.

## Folder Structure

```
OliviaWilson-Parlour-Server/
├── .env           # Environment variables
├── index.js      # Main server entry point
├── package-lock.json   
├── package.json   # Project dependencies
├── README.md      # Documentation
```

## API Endpoints

- `POST /api/auth/signup` - User Registration
- `POST /api/auth/login` - User Login
- `GET /api/services` - Retrieve available services
- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Fetch user bookings
- `DELETE /api/appointments/:id` - Cancel an appointment

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the **MIT License**.

---

### 🛠️ Thank you for using OliviaWilson-Parlour Server! 🛠️
