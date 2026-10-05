/*
Purpose:
Express framework with Node.js
- Try GET, POST, PUT, DELETE methods
- use routes instead of the pure paths - like an API in your own software's backend
- compare and contrast GET query vs params
*/

const express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

// Middleware setup for each of our needs on the web server
// Serving static files (Modified to serve at the root level for the assignment)
app.use(express.static("public"));

// Serving JSON
app.use(express.json());

// Serving traditional HTML body
// Fixed the spelling of parameterLimit here
app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
    parameterLimit: 5000,
  }),
);

// ---------------------------------------------------------------------------------------------------------------
// CLASS PRACTICE ROUTES
// ---------------------------------------------------------------------------------------------------------------

// http://localhost:3000
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the root path of the server<h1>");
});

app.get("/students/:name/:age/:city", (req, res) => {
  console.log(req.params);
  if (!req.params.name || !req.params.age || !req.params.city) {
    return res.status(400).json({ error: "Missing path parameters" });
  }
  const name = req.params.name;
  const city = req.params.city;
  const age = req.params.age;

  res.json({
    student_name: name,
    student_age: age,
    student_city: city,
  });
});

app.post("/college", (req, res) => {
  const college = {
    method: "POST", // I made this up!
    name: "George Brown Polytechnic",
    location: "Tronto",
    established: 1967,
  };
  res.json(college);
});

app.put("/college", (req, res) => {
  const college = {
    method: "PUT", // I made this up!
    name: "George Brown Polytechnic",
    location: "Tronto",
    established: 1967,
  };
  res.json(college);
});

app.delete("/college", (req, res) => {
  const college = {
    method: "DELETE", // I made this up!
    name: "George Brown Polytechnic",
    location: "Tronto",
    established: 1967,
  };
  res.json(college);
});

// ---------------------------------------------------------------------------------------------------------------
// ASSIGNMENT REQUIRED ROUTES
// ---------------------------------------------------------------------------------------------------------------

// GET /hello (Updated from your practice code to match assignment text)
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects an array of { firstname, lastname })
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

// ---------------------------------------------------------------------------------------------------------------

app.listen(SERVER_PORT, () => {
  console.log("Server is running on http://localhost:" + SERVER_PORT);
});
