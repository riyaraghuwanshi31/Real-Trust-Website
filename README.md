# Project Management Platform

## Table of Contents

1. [Overview](#overview)
2. [Approach](#approach)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Project Locally](#running-the-project-locally)
7. [API Endpoints](#api-endpoints)

---

## Overview

This project is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed for managing projects, collecting client feedback, and capturing user subscriptions. Key features include CRUD operations for project management and client data, a contact form, and a subscription feature to store email addresses.

## Approach

1. **Modular Structure:** Organized as separate backend and frontend directories to keep the codebase scalable and maintainable.
2. **Backend API:** Developed a RESTful API to handle requests, perform CRUD operations, and interact with MongoDB for data storage.
3. **Responsive UI:** Created a user-friendly interface that aligns with the provided design specifications, focusing on accessibility and user experience.

## Technologies Used

- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with MongoDB Atlas
- **Other Tools:** Vercel (for deployment), Git (version control)

## Folder Structure

project-root/ ├── frontend/ # React frontend │ ├── public/ # Static files │ ├── src/ # React components │ └── ... ├── backend/ # Express backend │ ├── models/ # Mongoose schemas │ ├── routes/ # API routes │ ├── controllers/ # Request handling logic │ └── ... └── README.md # Project documentation



## Setup and Installation

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account and cluster set up

### Backend Installation

1. Navigate to the backend directory:
bash
             cd backend
   
2. Install dependencies:
bash
        npm install

      
3. Create a .env file in the backend directory with the following environment variables:
plaintext

        MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/your-database-name
PORT=5000
4. Start the backend server:
bash

      npm start

      
### Frontend Installation
1. Navigate to the frontend directory:
bash
      cd frontend
      
2. Install dependencies:
bash
      npm install
      
3. Update any instances of the backend URL in the frontend code to point to your deployed backend URL (e.g., https://your-backend-url/api/).
4. Start the frontend server:
bash
        npm start
        
Running the Project Locally
1. Run both the backend and frontend servers. The backend will run on http://localhost:5000, and the frontend on http://localhost:3000.
2. Open http://localhost:3000 in your browser to view the application.

API Endpoints
Here are some of the key API endpoints:

-Projects: GET /api/projects - Fetch all projects
-Clients: GET /api/clients - Fetch all client testimonials
-Contact Form Submission: POST /api/contact/submit - Submit contact form data
-Subscribe: POST /api/subscriptions/subscribe - Subscribe to newsletter



        
