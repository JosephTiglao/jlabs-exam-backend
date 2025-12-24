# IP GeoTracker – Backend (Serverless Node.js)

This repository contains the **backend API** for the IP GeoTracker project. The backend is built using **Node.js serverless functions** and deployed on **Vercel**.

---

## Tech Stack

- Node.js
- Vercel Serverless Functions
- JSON Web Token (JWT)

---

## Project Structure

```
backend/
└── api/
    └── login.js   # Authentication endpoint
```

---

## ⚙️ Setup & Installation

### Requirements

- Node.js v18 or later

> Note: The project was developed using Node.js v22.x.
> It is compatible with Node.js v18+ (recommended for Vercel and local testing).

- Node.js (v18 or later recommended)
- npm
- Vercel CLI

### Install Dependencies

```bash
npm install
```

---

## 🔐 Authentication API

### Login Endpoint

```
POST /api/login
```

### Request Body

```json
{
  "email": "jlabs@gmail.com",
  "password": "password123"
}
```

### Successful Response

```json
{
  "token": "<JWT_TOKEN>"
}
```

### Test Credentials

Use the following credentials for testing:

```
Email: jlabs@gmail.com
Password: password123
```

---

## 🌐 CORS Configuration

Since this backend is **serverless**, CORS is handled inside each API route.

- Allowed Origin:

  ```
  https://jlabs-exam-frontend-joseph-tiglaos-projects.vercel.app
  ```

- Preflight (`OPTIONS`) requests return HTTP 200

This ensures the frontend hosted on Vercel can communicate with the API.

---

## 🧪 Local Development

This backend can be run **offline on a local machine** or **online via Vercel**.

It includes an `index.js` file specifically for local/offline execution.

This backend can be run **locally** or **online (Vercel)**.

### Run Locally

The backend includes an `index.js` file for offline/local development.

```bash
node index.js
```

By default, the API will be available at:

```
http://localhost:3000/api/login
```

Alternatively, you can also run using Vercel CLI:

```bash
vercel dev
```

```bash
vercel dev
```

The API will be available at:

```
http://localhost:3000/api/login
```

---

## ☁️ Deployment

Deploy to Vercel:

```bash
vercel --prod
```

---

## 📝 Notes

- This backend does **not** use Express
- Each API file is a standalone serverless function
- JWT secret is hardcoded for demo purposes only

---

## 👨‍💻 Author

Joseph Bautista
