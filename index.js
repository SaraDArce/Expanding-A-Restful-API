const express = require("express");
const app = express();
const PORT = 8080;

//Importing the data from our fake database file
// The require function will go and fetch the module.exports of whatever file you put in the argument
const users = require("./data/users");
const posts = require("./data/posts");

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// Read All Users
// Creating a GET route for the entire users database.
// This would be impractical in larger data sets.
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Read One User
// Creating a simple GET route for individual users,
// using a route parameter for the unique id.
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) {
    res.json(user);
  }
});

// Read All Posts
// Creating a GET route for the entire users database.
// This would be impractical in larger data sets.
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Read One User
// Creating a simple GET route for individual users,
// using a route parameter for the unique id.
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (post) {
    res.json(post);
  }
});

app.get("/", (req, res) => {
  res.send("Work in progress...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
