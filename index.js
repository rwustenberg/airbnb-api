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

app.get("/places", require("./controllers/getPlace"));
app.post("/places", require("./controllers/postPlace"));
app.get("/places/:id", require("./controllers/getPlace"));
app.patch("/places/:id", require("./controllers/patchPlace"));
app.delete("/places/:id", require("./controllers/deletePlace"));
app.post("/type", require("./controllers/postType"));
app.get("/type", require("./controllers/getType"));

app.listen(4000, () => {
  console.log("Ready on port 4000");
});
