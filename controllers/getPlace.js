const Place = require("../models/place");

module.exports = (req, res) => {
  Place.findOne({ _id: req.params.id })
    .populate("type")
    .populate({ path: "user", select: "name avatar" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
// module.exports = (req, res) => {
//   console.log(req.query);
//   Place.find(req.query)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// };
