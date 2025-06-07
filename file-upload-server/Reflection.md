# Reflection: File Upload Server

## a) Documentation

In this practical, I implemented a file upload server using `Express` and `Multer`. The key concepts applied include:

- **Middleware Integration**: Used `Multer` middleware to handle file uploads.
- **File Validation**: Ensured only specific file types (e.g., images) are allowed.
- **Error Handling**: Implemented error handling for invalid file types and upload failures.
- **Directory Management**: Configured the server to save uploaded files in a specific directory (`uploads`).

## b) Reflection

### What I Learned
- How to configure and use `Multer` for handling file uploads in an Express application.
- The importance of validating file types and sizes to enhance security.
- Best practices for error handling in file upload scenarios.

### Challenges Faced
| Challenge                                         | Solution                                          |
|--------------------------------------------------|--------------------------------------------------|
| Handling large file uploads                      | Configured `Multer` to limit file size.          |
| Invalid file types causing server errors         | Added file type validation using `fileFilter`.   |
| Directory not existing for uploads               | Ensured the `uploads` directory is created dynamically. |

### Screenshots
#### Successful Upload
![Successful Upload](upload-success.jpg)

#### Error Handling
![Error Handling](upload-error.jpg)

## Conclusion
This practical enhanced my understanding of handling file uploads in a Node.js application. It emphasized the importance of middleware configuration, validation, and error handling to build a secure and efficient server.
