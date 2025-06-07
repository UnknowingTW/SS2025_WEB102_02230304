## Reflection – Practical 3: File Upload with Express.js and What I Did

### Main Topics Covered:

1. Multer Configuration: Configured Multer to safely manage file uploads via processing of multipart/form-data.

2. Express.js Server: Created API routes that work with file uploads, validate files, and return file information.

3. CORS: Configured CORS to allow my frontend (Next.js) and backend (Express) to communicate.

4. File Validation: Checked to ensure that valid files were only produced from the upload.

5. Timeout: Created a feature that displayed upload progress on the frontend using Axios.

What I Learned:

i. How to configure Multer to manage file uploads from the server-side.

ii. How to create middleware which filters files and manages errors with the upload.

iii.How to allow stored files to be safe and return consistent information about an upload.

iv. How to connect a React OR Next.js frontend to a separate Express backend for upload purposes.

v.  How progressing an upload gives the app better usability.

Challenges I Faced
1. CORS and Permissions

At first, CORS was blocking the frontend from sending files. Once I added cors middleware and set the headers correctly, this issue was resolved.
2. Multer Validation Issues

Multer would sometimes silently fail if the files being uploaded were not within the stated rules. I was able to resolve this by adding a file filter, and handling errors through proper custom middleware.

What I Learned Most:

i.  Multer is a very powerful tool that provides a lot of functionality for uploading files with express apps.

ii. File type and size checks are crucial to the security of your application.

iii.Upload status really gives the user a sense of where things are at.

iv. When your frontend and backend server are separate, you will want to set CORS correctly.