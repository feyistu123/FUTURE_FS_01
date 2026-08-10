# Full Stack Portfolio Repository

This repository contains a professional portfolio website implemented as a separated frontend and backend project.

## Project Structure

- `frontend/` — React application built with Vite.
- `backend/` — Node.js and Express API connected to MongoDB Atlas.
- `.gitignore` — ignore rules for node modules and environment files.

## Included Projects

- Personal Professional Portfolio Website
- Client Lead Management System (Mini CRM)
- Solomon Tutoring
- Search Algorithm Visualizer
- Perfume Shopping
- Namer App

## Tech Stack

- React.js with Vite
- Node.js and Express
- MongoDB Atlas
- JavaScript, HTML, CSS

## Setup Instructions

### 1. Install dependencies

```bash
cd frontend
npm install
cd ../backend
npm install
```

### 2. Configure MongoDB Atlas

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Copy the connection string and update `backend/.env`.

Example `.env` values:

```env
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

# Server Configuration
PORT=4000

# JWT Secret (for authentication)
JWT_SECRET=your_jwt_secret_here
```

### 3. Run backend

```bash
cd backend
npm run dev
```

### 4. Run frontend

```bash
cd frontend
npm run dev
```

### 5. Visit the app

Open the URL shown by Vite, typically `http://localhost:3000`.
The frontend proxies API requests to `http://localhost:4000`.

## Deployment Roadmap

1. Build the React app with `npm run build` inside `frontend/`.
2. Deploy it to GitHub and Render Pages.
3. Set the production MongoDB Atlas URI in the backend environment.
4. Update the live site URL and repository README.

## Frontend / Backend Roadmap

1. Complete the React UI for Home, About, Projects, and Contact sections.
2. Add the Future Interns portfolio and CRM projects to the featured workspace.
3. Implement the backend contact API and store messages in MongoDB Atlas.
4. Connect the contact form to backend POST `/api/contact`.
5. Deploy frontend and backend to a hosting service.
