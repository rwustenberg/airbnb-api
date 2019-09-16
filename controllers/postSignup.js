const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  console.log("encrypted", encrypted);
  User.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
};
