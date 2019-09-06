const Place = require("../models/place");

// module.exports = (req, res) => {
//   Place.findOne({ _id: req.params.id })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// };
module.exports = (req, res) => {
  console.log(req.query);
  Place.find(req.query)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
