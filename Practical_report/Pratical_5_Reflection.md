## Reflection - Practical 5 - Using Supabase Cloud Storage and What I did 

### Main ideas applied:

1. Cloud storage buckets: I utilized Supabase's buckets to store uploaded files and manage them in the cloud versus on my own server.

2. Supabase setup: I set Supabase clients on the frontend and backend along with project keys.

3. Access rules: I created access rules for who could upload or read files; for instance, uploads require login while read access can be public.

4. Direct uploads: I used Supabase's uploads directly form the cloud to allow the frontend upload files directly in seconds using Supabase's tools.

5. Database integration: I stored metadata about files such as the url they are stored in PostgreSQL using Prisma to allow direct playback and display of files later.

What I learned:

i. Why it is better to use cloud storage over local storage from a scaling and reliability perspective. 

ii. How to set access policies in Supabase and troubleshoot so that access and uploads are secure.

iii. How to create a good upload cycle from the React frontend, Express backend, and Supabase cloud storage.

iv. How to connect the cloud file urls to records in the database so the app would display the associated videos and thumbnails.

v. The basics of CDNs, public/private file access, and how to properly secure the upload process.

Challenges I Faced:

1. Fixing Supabase Access Policies;

Initially, file uploads were failing because the rules were too restrictive. I read the docs to understand how to grant proper permissions for logged in users and public readers.

2. Moving Old Files to Supabase;

I had to write scripts to move existing files from local to Supabase, which was difficult. Some of the videos did not have thumbnails or had the same name, so I had to ensure files had unique paths and only uploaded if files existed.

What I Learned:

i. Supabase is a solid cloud storage solution and will not lock into a vendor.

ii. Uploading files directly from the frontend to the cloud avoids backend loads and makes uploads quick.

iii. Appropriate access policies are very important for preventing headaches.

iv. Storing file metadata in the database is more manageable and is better for showing files.

v. Using cloud storage with a CDN means your app loads files faster in more locations and there is better scalability.