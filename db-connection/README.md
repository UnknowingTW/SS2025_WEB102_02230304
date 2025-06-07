# Database Connection

## Objectives
1. Establish a connection to a PostgreSQL database using `pg` library.
2. Test the connection by querying data from a sample table.
3. Handle errors and ensure proper resource cleanup.

## Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd db-connection
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the database configuration in `db-test.js`:
   - Replace the following values with your database credentials:
     ```javascript
     user: 'your_username',
     host: 'your_host',
     database: 'your_database',
     password: 'your_password',
     port: 5432
     ```

4. Run the test script:
   ```bash
   node db-test.js
   ```

5. Verify the output:
   - The script should display the rows from the `student` table and the total count of students.

## Solutions
### Example Output
- **Successful Connection**:
  ```bash
  Connected to PostgreSQL database!
  Student in database:
  ┌─────────┬───────────────┬───────────────┐
  │ (index) │     name      │     age       │
  ├─────────┼───────────────┼───────────────┤
  │    0    │ 'John Doe'    │      20       │
  │    1    │ 'Jane Smith'  │      22       │
  └─────────┴───────────────┴───────────────┘
  Total students: 2
  Connection pool closed
  ```

- **Error Handling**:
  If the connection fails, an error message will be displayed:
  ```bash
  Database connection error: Error: password authentication failed for user "invalid_user"
  ```

### Images
![Database Connection Success](Image1.jpg)
![Error Handling Example](Image2.jpg)
