const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

/* app.get("/", (req, res) => {
  res.send("<h1>Hello!!!!</h1>");
});

app.get("/about-me", (req, res) => {
  res.send("<h1>About-me</h1>");
}); */

app.get("/", (req, res) => {
  res.render("home", {
    page_title: "Deep | Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    page_title: "Deep | About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    page_title: "Deep | Contact",
  });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Server is running @ http://localhost:${port}`);
});
