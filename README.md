# IP GeoTracker – Backend (Serverless Node.js)

This repository contains the **backend API** for the IP GeoTracker project.

The backend is designed to run **both offline on a local machine** and **online as a serverless deployment on Vercel**.
It is built using **Node.js serverless functions** and includes an `index.js` file for local/offline execution.

---

## Tech Stack

- Node.js
- Serverless Functions (Vercel)
- JSON Web Token (JWT)
- ES Modules

---

## Requirements

- Node.js **v18 or later**

> Note: Developed and tested using **Node.js v22.x**
> Compatible with Node.js v18+ (recommended for Vercel and local testing)

---

## Project Structure

```
backend/
├── api/
│   └── login.js        # Serverless function (Vercel)
├── index.js            # Local/offline server entry
└── package.json
```

---

## Authentication (Test Credentials)

Use the following credentials for testing login:

```
Email: jlabs@gmail.com
Password: password123
```

---

## Running the Backend Locally (Offline)

The backend can be run **offline on a local machine** using `index.js`.

### Install Dependencies

```bash
npm install
```

### Start Local Server

```bash
npm start
```

The API will be available at:

```
http://localhost:8000
```

Example endpoint:

```
POST http://localhost:8000/api/login
```

---

## Running Online (Serverless – Vercel)

The backend is deployed as **serverless functions** on Vercel.

Online base URL:

```
https://jlabs-exam-backend.vercel.app
```

Example endpoint:

```
POST https://jlabs-exam-backend.vercel.app/api/login
```

---

## CORS Support

CORS is configured to allow requests from the frontend hosted on Vercel and from local development environments.

---

## Notes

- Supports **local/offline** and **online/serverless** execution
- Uses JWT for authentication
- Designed to work seamlessly with the Vite-React frontend
- API base URL is configurable on the frontend via environment variables

---

## Author

Joseph Tiglao
