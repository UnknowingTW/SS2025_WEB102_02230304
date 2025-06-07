# Prisma Connection

## Objectives
1. Set up a Prisma connection with a PostgreSQL database.
2. Perform database migrations and CRUD operations.
3. Use Prisma Client for querying the database.

## Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd prisma-connection
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```
     DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>?schema=public"
     ```

4. Initialize Prisma:
   ```bash
   npx prisma init
   ```

5. Define your Prisma schema in `prisma/schema.prisma`.

6. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

7. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

8. Start the application:
   ```bash
   npm start
   ```

9. Test the connection:
   - Use Prisma Studio to view and manage your database:
     ```bash
     npx prisma studio
     ```

## Solutions
### Example Prisma Schema
```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}
```

### Example Query
```typescript
const users = await prisma.user.findMany();
console.log(users);
```

### Images
#### Prisma Studio
![Prisma Studio](prisma-studio.jpg)
