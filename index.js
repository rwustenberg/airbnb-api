const express = require("express");
const mongoose = require("mongoose");

const database = require("./database.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Airbnb API");
});

app.post("/places", (req, res) => {
  const Place = require("./models/place");
  Place.create({
    title: "Unbelievable Infinity Pool",
    description: "House by the beach",
    type: "Entire House",
    city: "Samui",
    country: "Thailand",
    price: 200,
    rating: 3,
    guests: 5,
    bathrooms: 2
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {});
});

app.listen(4000, () => {
  console.log("Ready on port 4000");
});
