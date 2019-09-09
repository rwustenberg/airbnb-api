const Review = require("../models/review");
const mongoose = require("mongoose");

module.exports = (req, res) => {
  console.log(req.body);
  Review.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
