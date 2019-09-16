const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  console.log("encrypted", encrypted);
  User.create(req.body)
    .then(user => {
      let obj = user.toObject();
      let token = jwt.sign(obj, "secretCode");
      console.log("token", token);
      res.send(token);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
