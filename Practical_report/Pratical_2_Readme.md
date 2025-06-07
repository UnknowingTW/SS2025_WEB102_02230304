# Practical 2 – TikTok-Style REST API with Express.js

In this project, we built a basic backend system for a TikTok-like app using **Node.js** and **Express.js**. It allows users to manage videos, comments, likes, and followers through an API. The idea was to learn how to connect a frontend with a working backend using RESTful methods.

---

### 1. Install All Required Packages

Use the command below to set up all the tools we used:

```bash
npm install express cors morgan body-parser dotenv
npm install --save-dev nodemon
````

---

### 2. Start the App

This command runs the server while watching for changes:

```bash
npm run dev
```

---

## Project Setup

### Starting the Project

We made the project folder like this:

```bash
mkdir -p server
cd server
npm init -y
```

Then we added and used the following packages:

* **Express** – to create the backend server
* **CORS** – to handle cross-origin access from the frontend
* **Morgan** – to log requests for debugging
* **Body-parser** – to read incoming request data
* **Dotenv** – to load environment variables like ports or keys

---

### Folder Structure

This is how our project files were arranged:

```
server/
├── src/
│   ├── controllers/         # Logic for videos, users, comments
│   ├── models/              # In-memory or dummy data
│   ├── routes/              # API endpoint files
│   ├── middleware/          # Middleware for requests
│   └── utils/               # Helpers or shared functions
│   ├── app.js               # App setup
│   └── server.js            # Server entry point
├── .env
└── package.json
```

---

## API Breakdown

### Main Endpoints

Here’s a simple table showing what each part of the API does:

| Feature         | URL Path              | Methods            | Purpose                                     |
| --------------- | --------------------- | ------------------ | ------------------------------------------- |
| Videos          | `/api/videos`         | GET / POST         | Show all videos or add a new one            |
| Videos          | `/api/videos/:id`     | GET / PUT / DELETE | Manage a specific video by its ID           |
| Comments        | `/api/comments`       | GET / POST         | See all comments or post one                |
| Comments        | `/api/comments/:id`   | GET / PUT / DELETE | Work with one specific comment              |
| Users           | `/api/users`          | GET / POST         | View all users or add one                   |
| Users           | `/api/users/:id`      | GET / PUT / DELETE | Get or change one user                      |
| Likes/Followers | Various nested routes | GET / POST         | Follow/unfollow users, like videos/comments |

---

## Trying Out the API

You can use **Postman** or the command line to test if your routes work:

```bash
curl -X GET http://localhost:3000/api/users
curl -X GET http://localhost:3000/api/videos
curl -X GET http://localhost:3000/api/users/1/videos
curl -X GET http://localhost:3000/api/videos/1/comments
```
