const Place = require("../models/place");
const Review = require("../models/review");
const Type = require("../models/type");

module.exports = (req, res) => {
  console.log("get places");
  Place.find({})
    .populate("type")
    .populate("host")
    .select("guests description city country images price title type")
    .lean()
    .then(data => {
      let places = data.map(p => {
        return Review.find({ place: p._id })
          .then(reviews => {
            p.reviews = reviews.length;
            p.image = p.images[0];
            //p.type = p.type.name;
            delete p.images;
            return p;
          })
          .catch(err => res.send(err));
      });
      Promise.all(places)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    })
    .catch(err => res.send(err));
};
