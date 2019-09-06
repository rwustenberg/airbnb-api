const Place = require("../models/place");
const mongoose = require("mongoose");

module.exports = (req, res) => {
  console.log(req.body);
  Place.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
