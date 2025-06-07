
## Reflection - Practical 1: Creating a RESTful API using Express.js and What I Have Done

### Key Points:

1.  RESTful API Design: Set out distinct URL patterns for my app's users, posts, comments, likes, and followers.

2.  Express.js: Used Express.js to fit my logic into separate controllers, routes, and middleware to enforce separation and cleanliness.

3.  Content Negotiation: Added a method for the server to respond in various formats such as JSON or XML based on what the client requested.

4.  Middleware: Created reusable pieces of code for handling errors and async functions.

5.  API Documentation: Published a simple webpage (docs.html) explaining how to use my API.

What I Have Learnt

6.  I now know how to properly create APIs with clear URL paths, correct HTTP methods and status codes.

7.  I understand the value of organizing backend code and separating uploads in order to maintain clear boundaries between routes, controllers and middleware.

8.  I have learnt how to build any size API with Express.js to help scale and let it become bigger while making testing easier.

9.  I understand how to use content negotiation so my API can return different response types.

10. I understand how using shared error-handling middleware can improve debugging and lead to a more consistent code.

Challenges I Encountered:

1. Order of Middleware + Consistency of Responses

Working out the correct ordering of middleware was confusing, as I sometimes forgot to call next() or the server ended up sending two responses by mistake. I solved this with planning the flow carefully, and making a helper function for async routes.

2. Uniformity of Responses

Making sure my API responses looked the same was tricky at first. I solved this issue by writing middleware which formats the success and error messages in a similar way across all endpoints.

Final Thoughts:

- Taking the time to organize code into folders and files is very important for any project that has potential to grow. Middleware is a powerful part of Express for logging, data validation, response formatting, and error handing. Putting together an API documentation page, even if just a small one, makes it much easier for others (or, for my future self!) to figure out and use the API. Designing with mock data allowed me to build the API logic first without spending too much time thinking about databases.