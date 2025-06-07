## Reflection – Practical 2: TikTok REST API with Express.js and What I Did

### Main ideas taken advantage of:

1.  RESTful Routing: created standard API endpoints for different resources using standard HTTP methods; GET, POST, etc...

2.  Express.js backend: created a Node.js server using Express.js to handle all API requests.

3.  Controller architecture: wrote dedicated controller functions for resources, which improved readability.

4.  In-memory data modeling: simulated real database connections using fake data that existed in-memory when building the API.

5.  Modular routing: separated routes into distinct files for users, videos, and comments to make everything a lot easier to manage.

What I Learned

i.  Why using REST API design conventions is important for builds that are easy to grow, understand, and read.

ii. How to set up a full back-end system with Express, which includes routing, middleware, and controllers.

iii.How to structure request handlers for complex endpoints that deal with different resources; like comments on videos or likes for videos.

iv. How to test APIs using tools such as curl and Postman; to check that the requests and responses are functioning correctly.

Challenges I Encountered:

1. Driven Troubles

During early development, sorting out how to implement routes like /users/:id/videos and /videos/:id/comments was complicated. I was able to overcome this challenge by developing route handlers for the above routes using the url parameters to retrieve the correct data.

2. Managing Clean Controller Code

It was difficult to manage the duplicate code and simplify the controller functions for content development. I became better at distinguishing concerns and reusing analogous code to ease the maintenance burden.

My Observations:

- Breaking my routes/controllers down into modules made it easier to manage and build functionality on the backend.
- RESTful APIs work well when the APIs have clear rules governing interactions, as well as a well-defined structure.
- Using in-memory data is beneficial during testing of an API before integrating a persistent database. 
- Testing endpoints early is also helpful for expressing any bugs related to endpoints and/or API flow.