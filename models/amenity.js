const mongoose = require("mongoose");

const Amenity = mongoose.model("amenity", {
  name: String,
  icon: String
});

module.exports = Amenity;
