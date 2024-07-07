const express = require("express");
const app = express("");
const path = require("path");
engine = require("ejs-mate");

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));


/* HOME */
app.get("/", (req, res) => {
  res.render("home.ejs");
});

/* ABOUT US */
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

/* SERVICES */
app.get("/services", (req, res) => {
  res.render("services.ejs");
});

/* GALLERY */
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

/* TRAINING */
app.get("/training", (req, res) => {
  res.render("training.ejs");
});

/* CONTACT US */
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

/* SERVICE REQUEST */
app.get("/service", (req, res) => {
  res.render("service.ejs");
});

/* CAREERS */
app.get("/careers", (req, res) => {
  res.render("careers.ejs");
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
