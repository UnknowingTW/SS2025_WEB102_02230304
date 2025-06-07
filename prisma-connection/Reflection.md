# Reflection: Prisma Connection

## a) Documentation

In this practical, I implemented a Prisma connection with a PostgreSQL database. The key concepts applied include:

- **Prisma Schema**: Defined models and relationships in the `schema.prisma` file.
- **Database Migrations**: Used Prisma CLI to create and apply migrations.
- **Prisma Client**: Queried the database using the generated Prisma Client.
- **Environment Variables**: Configured the database connection securely using a `.env` file.

## b) Reflection

### What I Learned
- How to set up and configure Prisma with a PostgreSQL database.
- The process of defining models and running migrations.
- Using Prisma Client for efficient database queries.
- The importance of environment variables for secure configuration.

### Challenges Faced
| Challenge                                         | Solution                                          |
|--------------------------------------------------|--------------------------------------------------|
| Setting up the database connection               | Used `.env` to securely configure the connection.|
| Understanding Prisma schema syntax               | Referred to the official Prisma documentation.   |
| Debugging migration errors                       | Used `npx prisma migrate reset` to resolve issues.|

### Screenshots
#### Prisma Studio
![Prisma Studio](prisma-studio.jpg)

#### Migration Error
![Migration Error](migration-error.jpg)

## Conclusion
This practical enhanced my understanding of Prisma and its integration with PostgreSQL. It highlighted the importance of schema design, migrations, and secure configuration for database-driven applications.
