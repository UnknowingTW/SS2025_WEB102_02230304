# Practical 6 – Authentication with Hono, JWT, and Prisma

This project adds security to a REST API by implementing **email and password authentication** along with **JWT authorization**. It uses **Hono** (a lightweight TypeScript framework), a **PostgreSQL** database managed by **Prisma ORM**, and runs on **Bun** runtime.

---

## Getting Started

### 1. Clone the Repository and Install Packages

```bash
git clone https://github.com/rubcstswe/web102-hono-auth-jwt-prisma-forked.git
cd web102-hono-auth-jwt-prisma-forked
bun install
```

### 2. Initialize the Database with Prisma

```bash
bunx prisma db push
bunx prisma generate
```

---

## How Authentication Works

### Register New Users (`/register`)

* Takes email and password from the user
* Passwords are securely hashed with `Bun.password.hash()`
* Saves the hashed password and creates a new user account with a starting balance

**POST** `/register` Example Request:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### User Login (`/login`)

* Checks password using `Bun.password.verify()`
* If valid, returns a JWT token signed with a secret key

**POST** `/login` Example Request:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

**Successful Login Response:**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## Authorization Using JWT

* Certain routes are protected with JWT authentication middleware from Hono
* JWT token must be sent in the `Authorization` header as `Bearer <token>`

**Example of a Protected Route:**

**GET** `/protected/account/balance`

**Request Header:**

```
Authorization: Bearer JWT_TOKEN
```

**Response Example:**

```json
{
  "data": {
    "Account": [
      {
        "balance": 0,
        "id": "75a34064-f8c4-4a7e-90dd-4958c452fbf4"
      }
    ]
  }
}
```

---

## Prisma Database Models

```ts
model User {
  id             String    @id @default(uuid())
  email          String    @unique
  hashedPassword String
  Account        Account[]
}

model Account {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id])
  balance Int    @default(0)
}
```

---

## Project Files and Structure

```
src/
├── index.ts            # Main Hono app and route handlers
├── lib/
│   └── prisma.ts       # Prisma client setup
├── middleware/
│   └── auth.ts         # JWT authentication middleware
└── prisma/
    └── schema.prisma   # Prisma database schema
```

---

## Technologies Used

* **Hono** – A fast and modern web framework for TypeScript
* **Prisma ORM** – Provides a type-safe interface to PostgreSQL
* **PostgreSQL** – Database for storing users and accounts
* **Bun** – JavaScript runtime with built-in tooling
* **JWT** – JSON Web Tokens for secure authentication and authorization

