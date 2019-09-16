const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  //  ;
  User.findOne({ email: req.body.email })
    .lean()
    .then(data => {
      if (data) {
        res.send("Account Found, PLease log in.");
      } else {
        let encrypted = bcrypt.hashSync(req.body.password, 10);
        console.log("encrypted", encrypted);
      }
      req.body.password = encrypted;
    });

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
