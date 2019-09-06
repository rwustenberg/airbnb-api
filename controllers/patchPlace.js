const Place = require("../models/place");

module.exports = (req, res) => {
  console.log(req.body);
  Place.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};
