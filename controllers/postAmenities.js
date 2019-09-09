const Amenity = require("../models/amenity");
const mongoose = require("mongoose");

module.exports = (req, res) => {
  console.log(req.body);
  Amenity.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
