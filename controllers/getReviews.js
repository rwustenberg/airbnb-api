const Review = require("../models/review");

module.exports = (req, res) => {
  Review.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
