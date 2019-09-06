const Place = require("../models/place");

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

// Place.create({
//   title: { type: "Unbelievable Infinite Pool" },
//   description: {
//     type: "Villa by the Beach",
//     required: [true, "description is required"]
//   },
//   type: { type: "Entire Villa" },
//   city: { type: "String", required: [true, "Enter City"] },
//   country: { type: String, required: [true, "Enter Country Name"] },
//   price: { type: Number, required: [true, "Give Me Your Money"] },
//   rating: { type: Number, default: 0 },
//   guests: { type: Number, required: [true, "How many People?"] },
//   bathrooms: { type: Number, required: [true, "How many toilets do you need"] }
// });
