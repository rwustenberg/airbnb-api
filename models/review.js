const mongoose = require("mongoose");

const Review = mongoose.model("review", {
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Please enter user"]
  },
  date: { type: Date, default: Date.now },
  rating: { type: Number, default: 0 },
  content: { type: String, required: [true, "Leave your feedback here"] },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "place",
    required: [true, "please enter your location"]
  }
});

module.exports = Review;
