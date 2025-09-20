# TaskPulse-Baby

A web-based task management application where users can register, authenticate, and manage their to-dos. Tasks can be categorized by project and displayed in order of priority. The front end is built with React, and the back end uses Node.js with Express and JWT-based authentication.

## Tech Stack
- React
- Node.js
- Express
- JSON Web Tokens (jsonwebtoken)

## Requirements
- Authenticate users using JWT (Hint: Use jsonwebtoken in Express to sign and verify tokens)
- Implement CRUD for tasks (Hint: Use Express routers and an in-memory store or database)
- Categorize tasks by project (Hint: Include a `projectId` field in the task object)
- Sort tasks by priority (Hint: Perform sorting in the controller or in React before rendering)

## Installation

### Backend
1. Clone the repository and navigate to the backend folder:
   bash
   git clone https://github.com/your-username/TaskPulse-Baby.git
   cd TaskPulse-Baby/backend
   
2. Install dependencies:
   bash
   npm install
   
3. Create a `.env` file in the `backend/` directory with the following variables:
   bash
   PORT=4000
   JWT_SECRET=your_jwt_secret_key
   
4. Start the backend server:
   bash
   npm start
   

### Frontend
1. Navigate to the frontend folder:
   bash
   cd ../frontend
   
2. Install dependencies:
   bash
   npm install
   
3. Create a `.env` file in the `frontend/` directory with the following variable:
   bash
   REACT_APP_API_URL=http://localhost:4000/api
   
4. Start the React development server:
   bash
   npm start
   

## Usage
1. Register a new user or log in with existing credentials.
2. Create, view, update, and delete tasks, assigning each to a project.
3. Use the UI controls to sort tasks by priority or filter by project.
4. All requests to protected routes will include the JWT in the `Authorization` header.

## Implementation Steps
1. Initialize the backend project with `npm init` and install `express`, `jsonwebtoken`, `cors`, and `nodemon`.
2. Set up an Express app and configure middleware for JSON parsing and CORS.
3. Create a simple in-memory store (or connect to a database) for users and tasks.
4. Implement authentication endpoints (`/api/auth/register`, `/api/auth/login`) that sign and verify JWTs.
5. Create task routes (`/api/tasks`) with Express routers to handle CRUD operations. Include a `projectId` and `priority` in the task model.
6. Protect task routes by verifying the JWT token in a middleware function.
7. Initialize the React app using Create React App in the `frontend/` directory.
8. Build authentication pages (Register, Login) and store the JWT in `localStorage` upon login.
9. Create components for task listing, creation, editing, and deletion. Fetch and update data from the backend API.
10. Implement project filter and priority sorting logic in React before rendering the task list.
11. Test end-to-end flow: user registration, login, CRUD operations, filtering, and sorting.

## API Endpoints

### Authentication
- POST /api/auth/register  — Register a new user
- POST /api/auth/login     — Authenticate user and receive JWT

### Tasks
- GET /api/tasks           — Get all tasks for the authenticated user
- POST /api/tasks          — Create a new task (`{ title, description, projectId, priority }`)
- PUT /api/tasks/:id       — Update an existing task by ID
- DELETE /api/tasks/:id    — Delete a task by ID