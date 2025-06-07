# Reflection: Database Connection

## a) Documentation

In this practical, I implemented a database connection using the `pg` library in Node.js. The key concepts applied include:

- **Connection Pooling**: Used a connection pool to manage multiple database connections efficiently.
- **Query Execution**: Tested the connection by running a query to fetch data from the `student` table.
- **Error Handling**: Implemented error handling to manage connection issues and query failures.
- **Resource Cleanup**: Ensured proper release of database clients and closure of the connection pool.

## b) Reflection

### What I Learned
- How to configure and use the `pg` library for PostgreSQL connections.
- The importance of connection pooling for performance and scalability.
- Best practices for error handling and resource cleanup in database operations.

### Challenges Faced
| Challenge                                         | Solution                                          |
|--------------------------------------------------|--------------------------------------------------|
| Incorrect database credentials causing connection failure | Verified credentials and updated the configuration. |
| Forgetting to release the client after a query    | Added a `finally` block to ensure the client is always released. |

### Screenshots
#### Successful Connection
![Database Connection Success](Image1.jpg)

#### Error Handling Example
![Error Handling Example](Image2.jpg)

## Conclusion
This practical enhanced my understanding of database connectivity in Node.js. It emphasized the importance of proper error handling and resource management to build robust applications.
