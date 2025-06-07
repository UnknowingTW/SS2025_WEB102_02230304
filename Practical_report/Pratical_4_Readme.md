# Practical 4 – Connecting PostgreSQL with Prisma ORM

This project links the TikTok backend to a **PostgreSQL** database using **Prisma ORM**. Instead of using temporary in-memory data, it stores everything in a real database. It also adds user authentication, seed data for testing, and database migrations.

---

### 1. Install Required Packages

Run these commands to install Prisma and authentication tools:

```bash
npm install @prisma/client
npm install prisma --save-dev
npm install bcrypt jsonwebtoken
````

---

### 2. Initialize Prisma and Database

Start Prisma setup by running:

```bash
npx prisma init
```

---

### 3. Create Database and Apply Migrations

Run migrations and seed the database with initial data:

```bash
npx prisma migrate dev --name init
npm run seed
```

---

## Project Structure

```
server/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── videoController.js
│   │   └── commentController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── lib/
│   │   └── prisma.js
│   ├── routes/
│   └── app.js
├── .env
└── package.json
```

---

## Setting Up PostgreSQL

Open your terminal and log in to PostgreSQL as the default user:

```sql
sudo -u postgres psql
```

Create a database and user, then give the user access:

```sql
CREATE DATABASE tiktok_db;
CREATE USER tiktok_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
```

---

## Configuring Prisma

Add your database URL to the `.env` file:

```env
DATABASE_URL="postgresql://tiktok_user:your_password@localhost:5432/tiktok_db?schema=public"
```

---

## Authentication Setup

* Passwords are hashed using `bcrypt` for security.
* JSON Web Tokens (`jsonwebtoken`) are used to create secure login tokens.
* Protected routes use an authentication middleware (`auth.js`) to check tokens.

Set these environment variables for JWT:

```env
JWT_SECRET=yourverylongandsecurerandomsecret
JWT_EXPIRE=30d
```

---

## Seeding the Database

Run the seed script to add sample data:

```bash
npm run seed
```

This will add:

* 10 users
* 50 videos
* 200 comments
* 300 likes
* 40 follow relationships

---

## Testing the API

Use tools like **Postman** to test your API features:

* Register and login users
* Create videos (requires login token)
* Like videos and follow users
* Fetch users, videos, and comments
