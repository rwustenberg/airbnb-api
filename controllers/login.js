const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  encrypted = bcrypt.hashSync(req.body.password, 10);
  console.log("encrypted", encrypted);
  User.findOne({ email: req.body.email })
    .lean()
    .then(user => {
      let match = bcrypt.compareSync(req.body.password, user.password);
      if (match) {
        delete user.password;
        res.send(user);
      } else {
        res.send("Password is incorrect");
      }
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
