const Place = require("../models/place");
const Review = require("../models/review");
const Type = require("../models/type");

module.exports = (req, res) => {
  Place.findOne({ _id: req.params.id })
    .populate("type")
    .populate({ path: "host", select: "name avatar" })
    .lean()
    .then(place => {
      Review.find({ place: place._id })
        .populate("author")
        .lean()
        .then(reviews => {
          place.reviews = reviews;
          place.image = place.images[0];
          res.send(place);
        });
    })
    .catch(err => {
      res.send(err);
    });
};
// .then(data => {
// 	let places = data.map(p => {
// 		return Review.find({ place: p._id })
// 			.then(reviews => {
// 				p.reviews = reviews.length;
// 				p.image = p.images[0];
// 				delete p.images;
// 				return p;
// 			})
// 			.catch(err => res.send(err));
// 	});
// 	Promise.all(places)
// 		.then(data => res.send(data))
// 		.catch(err => res.send(err));
// })
