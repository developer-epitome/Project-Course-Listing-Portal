const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Given Data
const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
];

// Home Route
app.get("/", (req, res) => {
  res.render("home", { totalCourses: courses.length });
});

// All Courses
app.get("/courses", (req, res) => {
  res.render("courses", { courses: courses });
});

// Single Course (Route Parameter)
app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.send("Course Not Found");
  }

  res.render("course-details", { course: course });
});

// About Page
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
