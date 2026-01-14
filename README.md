# Trip Tales Backend

This is the **backend API** for the Trip Tales travel booking application. It handles **user authentication, admin authentication, destinations management, and bookings**.

---

## Features

- **User Authentication**: Sign up, login, and JWT-based authentication.
- **Admin Authentication**: Separate admin login with protected routes.
- **Destinations**: CRUD operations for travel destinations (admin only).
- **Bookings**: Users can book trips, and admins can view, confirm, reject, or delete bookings.
- **Secure**: Passwords are hashed, and routes are protected using JWT.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas / local)
- Mongoose ODM
- JWT Authentication
- bcrypt for password hashing
- CORS enabled

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/trip-tales-backend.git
cd trip-tales-backend
