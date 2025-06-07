## Reflection – Practical 4: Connecting the TikTok Backend to PostgreSQL with Prisma ORM and What I have done

### Main ideas that I have used:

1. PostgreSQL - set-up configured a real database to hold information as opposed to temporary in memory objects.

2. Prisma - utilized Prisma for much simpler database queries and for automatically mapping schema changes to the database.

3. User Authentication - implemented user authentication to store passwords securely in the database using bcrypt and created tokens (JWT) to authenticate the user during subsequent requests.

4. Seed data - created scripts to seed the database automatically with 'sample' users, videos and comments to load into the app for testing.

5. Protected Endpoints - created specific endpoints to ensure only logged-in users can access via middleware.

What I have learned:

i. The techniques to connect a node.js app to a PostgreSQL database.

ii. How to use the schema files with Prisma to define and easily modify the database structure.

iii. How to securely handle user passwords and sessions via encrypted passwords and JWT.

iv. How seed scripts can save time allowing for the addition of many test records automatically.

v. I can also use Prisma's client to query related data easily, like videos, user videos and comments.

Challenges I Encountered:

1. Fixing Environment and Prisma Connection;

Initially, I had a problem with the .env file and the connection string; I was getting an error when trying to connect to the database. I eventually got it fixed by looking carefully at the format and running commands to see if I was connected.

2. Dealing with Complex Data Relationships;

Getting videos with the users and any comments was more difficult than expected because it required nested queries to get the relationships. Prisma also had options such as include and select that made getting related data a lot easier.

What I Learned:

i. Working with an ORM such as Prisma makes building databases much faster and easier than writing raw SQL.

ii. Prisma migrations really help you version control incremental changes to the database overtime.

iii. Seed scripts are incredibly useful for populating the database with fake data for testing.

iv. Security factors such as password hashing and JWT tokens are extremely important for actual applications.

v. Mixing a database with REST API controllers is essential to building back-end systems ready for deployment.