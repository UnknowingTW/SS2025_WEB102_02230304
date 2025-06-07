# Practical 1 – Building a REST API with Express.js

In this task, the goal was to make a RESTful API for a basic social media app using **Node.js** and **Express.js**. The API uses correct HTTP methods, response codes, and includes simple documentation. It’s designed to be easy to test and expand later.

---

### 1. Install Required Packages

Open the terminal and run:

```bash
npm install express morgan cors helmet
npm install nodemon --save-dev
````

---

### 2. Start the Server (Development Mode)

Use this command to run the server with nodemon:

```bash
npm run dev
```

---

## Project Setup

### Getting Started

The project was set up using these commands:

```bash
mkdir social-media-api
cd social-media-api
npm init -y
```

It includes:

* Express framework
* Helpful middleware: Morgan (logs), CORS (cross origin), Helmet (security)
* Dev tool: Nodemon (auto-reload server)
* Organized folders: `controllers`, `routes`, `middleware`, `utils`, etc.

---

### Project Folder Layout

Here’s how everything is organized:

```
social-media-api/
├── controllers/
│   ├── userController.js
│   ├── postController.js
│   └── ... (comments, likes, followers)
├── routes/
│   ├── users.js
│   ├── posts.js
│   └── ... (comments, likes, followers)
├── middleware/
│   ├── errorHandler.js
│   ├── async.js
│   └── formatResponse.js
├── utils/
│   ├── errorResponse.js
│   └── mockData.js
├── public/
│   └── docs.html
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

## API Features and Design

### Main API Routes

* **Users**

  * `GET /users`: Show all users
  * `POST /users`: Add a new user

* **Posts**

  * `GET /posts`: Show all posts
  * `GET /posts/:id`: View one post
  * `POST /posts`: Add a post
  * `PUT /posts/:id`: Edit a post
  * `DELETE /posts/:id`: Remove a post

* **Others**: You can make similar routes for comments, likes, and followers.

---

### Handling Response Types

In `formatResponse.js`, the code checks the `Accept` header (like if the client wants JSON or XML) and sends the response in the right format.

---

### Managing Errors

There are custom files to catch and handle errors:

* `errorHandler.js`: Catches errors and shows messages
* `errorResponse.js`: Makes error messages look the same
* `async.js`: Helps catch async route errors easily

---

## Testing and Mock Data

### Fake Data for Testing

`mockData.js` inside the `utils/` folder is used to try the API before adding a real database.

---

### Simple API Documentation

A basic HTML file is available to explain how to use the API:

```
GET /docs.html
```

This file is saved in the `public/` folder.

---

## Final Steps Before Finishing

### Testing Tips

Try out the routes using Postman or Insomnia. Make sure to:

* Check if correct status codes are returned
* Test if the data is displayed properly
* Try changing headers to test different formats (e.g., Accept: application/json)

---

### Start Server Again (If Needed)

To restart the server anytime:

```bash
npm run dev
```


