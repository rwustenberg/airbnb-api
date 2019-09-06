const Place = require("../models/place");

module.exports = (req, res) => {
  console.log("get places");
  Place.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err));
};
