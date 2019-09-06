const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const database = require("./database.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Airbnb API");
});

app.get("/places", require("./controllers/getPlaces"));
app.post("/places", require("./controllers/postPlace"));
app.get("/places/:id", require("./controllers/getPlace"));
app.patch("/places/:id", require("./controllers/patchPlace"));
// app.post("/places", (req, res) => {
//   const Place = require("./models/place");
//   Place.create({
//     title: "Unbelievable Infinity Pool",
//     description: "House by the beach",
//     type: "Entire House",
//     city: "Samui",
//     country: "Thailand",
//     price: 200,
//     rating: 3,
//     guests: 5,
//     bathrooms: 2
//   })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {});
// });
// app.get("/places", (req, res) => {
//   const Place = require("./models/place");
//   Place.find({}).then(data => {
//     res.send(data);
//   });
// });

app.listen(4000, () => {
  console.log("Ready on port 4000");
});
