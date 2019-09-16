const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  console.log("encrypted", encrypted);
  User.findOne({ email: req.body.email }).lean()
	.then(user => {
		let match = bcrypt.compareSync(req.body.password, user.password)
			if(match){
				delete user.password
				res.send(user)} else {res.send("wrong!!")}
			}).catch(err => {
				console.log(err)
				res.send(err)
			})
		}


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
