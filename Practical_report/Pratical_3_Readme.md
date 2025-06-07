# Practical 3 – File Upload Using Express.js

This project shows how to build a backend server for uploading files using **Node.js**, **Express.js**, and **Multer**. It works together with a React or Next.js frontend. The project includes file validation, error handling, and proper CORS settings to make uploads safe and smooth.

---

### 1. Installing Packages

Run this command to add the needed tools:

```bash
npm install express cors multer morgan dotenv
````

---

### 2. Start the Server

Use this to run the backend server:

```bash
node server.js
```

---

## Setting Up the Project

### Creating the Project Folder

Do this to start your project:

```bash
mkdir file-upload-server
cd file-upload-server
npm init -y
```

---

### Project Folder Layout

Here’s how the files and folders are organized:

```
file-upload-server/
├── server.js
├── .env
├── uploads/     # This folder is automatically created by Multer to store files
```

---

## Features Built

### 1. Multer Setup

* Handles `multipart/form-data` so files can be uploaded.
* Saves uploaded files into the `uploads/` folder.
* Configured to:

  * Set where files go and how they are named.
  * Accept only PDF files using a filter.
  * Limit the file size to prevent very large uploads.

---

### 2. Upload API Route

```http
POST /api/upload
```

* Accepts one file at a time.
* Checks that the file is a PDF and not too big.
* Returns details about the file when upload is successful.

---

### 3. CORS Setup

Configured so that the frontend (for example, running on `http://localhost:3000`) can send requests to this backend without problems.

---

### 4. Connecting with Frontend

* Updated the frontend code to send files using Axios.
* Used `FormData` to attach files properly.
* Used `onUploadProgress` to show upload progress to the user.

---

## How to Test the App

1. Run the backend server:

   ```bash
   node server.js
   ```

2. Run the frontend:

   ```bash
   npm run dev
   ```

3. In your browser:

   * Go to the upload page.
   * Select or drag and drop a PDF file.
   * Watch the upload progress bar.
   * Check the `uploads/` folder in the backend to see the saved files.
