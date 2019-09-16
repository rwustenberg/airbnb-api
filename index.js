const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const database = require("./database.js");
const cors = require("cors");
const app = express();
const env = require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Airbnb API");
});
app.use(cors({ credentials: true }));
app.get("/places", require("./controllers/getPlaces"));
app.post("/places", require("./controllers/postPlace"));
app.patch("/places/:id", require("./controllers/patchPlace"));
app.delete("/places/:id", require("./controllers/deletePlace"));
app.post("/type", require("./controllers/postType"));
app.get("/type", require("./controllers/getType"));
app.post("/user", require("./controllers/postUsers"));
app.post("/amenities", require("./controllers/postAmenities"));
app.get("/amenities", require("./controllers/getAmenities"));
app.get("/place/:id", require("./controllers/getPlace"));
app.post("/reviews", require("./controllers/postReviews"));
app.get("/reviews", require("./controllers/getReviews"));
app.post("/signup", require("./controllers/postSignup"));

app.listen(process.env.PORT, () => {
  console.log(`Ready on ${process.env.PORT}}`);
});
