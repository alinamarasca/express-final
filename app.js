const express = require("express");

const app = express();
//register view engine

// app.set("views", "./views");
app.set("view engine", "ejs");

const PORT = 3200;

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/find-pet", (req, res) => {
  res.render("searchPet", { title: "Find Pet" });
});

app.get("/find-shelter", (req, res) => {
  res.render("searchShelter", { title: "Find Shelter" });
});

app.get("/FAQ", (req, res) => {
  res.render("FAQ", { title: "About Adoption" });
});

app.get("/welcome", (req, res) => {
  res.render("loginSignup", { title: "Welcome!" });
});

app.get("/my-pets", (req, res) => {
  const addedPets = [
    { title: "Barksalot", type: "dog", character: "shy" },
    { title: "Meowsalot", type: "cat", character: "crazy" },
    { title: "Digsalot", type: "pig", character: "active" },
    { title: "Eatsalot", type: "hamster", character: "aggressive" },
  ];
  res.render("myPets", { title: "My Pets", addedPets: addedPets });
});

app.get("/my-pets/create", (req, res) => {
  res.render("create", { title: "Add Pet" });
});

// redirect
app.get("/login", (req, res) => {
  res.redirect("/welcome");
});

app.get("/signup", (req, res) => {
  res.redirect("/welcome");
});

//404
app.use((req, res) => {
  res.status(404).send("Sorry, this page does not exist.");
});

app.listen(PORT);
