# File Upload Server

## Objectives
1. Set up a file upload server using `Express` and `Multer`.
2. Handle file uploads securely and efficiently.
3. Provide feedback on successful uploads or errors.

## Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd file-upload-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   - Update the following values as needed:
     ```
     PORT=8000
     FRONTEND_URL=http://localhost:3000
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Test the file upload:
   - Use a tool like Postman or a frontend client to send a `POST` request to:
     ```
     http://localhost:8000/upload
     ```
   - Attach a file in the request body.

6. Verify the output:
   - Uploaded files will be saved in the `uploads` directory.
   - The server will respond with a success message or an error.

## Solutions
### Example Output
- **Successful Upload**:
  ```json
  {
    "message": "File uploaded successfully!",
    "file": {
      "originalname": "example.jpg",
      "filename": "example-12345.jpg",
      "path": "uploads/example-12345.jpg"
    }
  }
  ```

- **Error Handling**:
  If the upload fails, an error message will be displayed:
  ```json
  {
    "error": "File upload failed. Please try again."
  }
  ```

### Images
#### Successful Upload
![Successful Upload](upload-success.jpg)

#### Error Handling
![Error Handling](upload-error.jpg)
