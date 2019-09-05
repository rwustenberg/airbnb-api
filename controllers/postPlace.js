const mongoose = require("mongoose");
const Place = require("./airbnb-api/places");

// const Place = mongoose.model("place", {
// 	title: { type: String, required: [true, "title of place"] },
// 	description: { type: String, required: [true, "description is required"] },
// 	type: { type: String, required: [true, "type of accomodation"] },
// 	city: { type: String, required: [true, "City"] },
// 	country: { type: String, required: [true, "enter country name"] },
// 	price: { type: Number, required: [true, "give me your money"] },
// 	rating: { type: Number, default: 0 },
// 	guests: { type: Number, required: [true, "How many People?"] },
// 	bathrooms: { type: Number, required: [true, "How many toilets do you need"] }
// });

Place.create({
  title: { type: "Unbelievable Infinite Pool" },
  description: {
    type: "Villa by the Beach",
    required: [true, "description is required"]
  },
  type: { type: "Entire Villa" },
  city: { type: "String", required: [true, "Enter City"] },
  country: { type: String, required: [true, "Enter Country Name"] },
  price: { type: Number, required: [true, "Give Me Your Money"] },
  rating: { type: Number, default: 0 },
  guests: { type: Number, required: [true, "How many People?"] },
  bathrooms: { type: Number, required: [true, "How many toilets do you need"] }
});
