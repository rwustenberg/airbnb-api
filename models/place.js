const mongoose = require("mongoose");

const Place = mongoose.model("place", {
  title: { type: String, required: [true, "title of place"] },
  description: { type: String, required: [true, "description is required"] },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "type",
    required: [true, "Type of property"]
  },
  city: { type: String, required: [true, "City"] },
  country: { type: String, required: [true, "enter country name"] },
  price: { type: Number, required: [true, "give me your money"] },
  rating: { type: Number, default: 0 },
  guests: { type: Number, required: [true, "How many People?"] },
  bathrooms: { type: Number, required: [true, "How many toilets do you need"] }
});

module.exports = Place;
