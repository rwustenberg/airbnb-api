const Amenity = require("../models/amenity");

module.exports = (req, res) => {
  Type.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
