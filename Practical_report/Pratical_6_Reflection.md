## Reflection – Practical 6: Building a Secure REST API with Hono, Prisma, and JWT

## What I Learned 

### Main Ideas Encountered:

1.  Password Hashing: I used built-in functions from Bun to securely hash passwords to avoid storing user passwords as plain text.

2.  JWT Authentication: Created signed tokens so users can stay logged in without having to store sessions on the server.

2.  Protected Routes: Used the JWT middleware in Hono to restrict access to specific API endpoints for already logged-in users.

3.  Prisma ORM: Designed user and account tables and connected them together which made handling data in the database easier.

4.  REST API: Created nice API endpoints for registering, logging in, and checking account details.

What I Learned:

i.  The difference between authentication (which is proving who we are), and authorization (which is what we are allowed to do).

ii. How to hash passwords securely with Bun and keep user data safe.

iii.How JWT tokens work and how to validate them to protect routes in our API.

iv. Writing clean, organized code that uses routes and middleware in Hono.

v.  How Prisma can make it easy to build and query a database while stopping us from falling into common pitfalls.

Problems I Encounters:

1. Typing JWT Data in TypeScript
Typing the JWT information in Hono was a pain. The way forward was to add the appropriate typings extensions so Hono could see what information the token had, which solved my issue.

2. Handling Duplicate Emails
Initially, incorrect email submissions were met with confusing errors when trying to register the same email. I figured out how to catch Prisma's specific error so I could give a more concise error message like "Email already exists".

What I learned:

- JWT is a great asset for authentication, but once we have the secret keys we must keep them safe and never expose them in code.

- Hono is simple and fast for building APIs.

- Bun provides fast hashes and spins up servers quickly.

- Prisma reduces boilerplate with using databases, a better return in code readability.