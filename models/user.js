const mongoose = require("mongoose");

const Type = mongoose.model("user", {
  avatar: {
    type: String,
    default: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  email: { type: String, required: "please provide email" },
  location: { type: String, required: "Please provide location" },
  name: { type: Sting, required: "Please enter Name" },
  password: { type: String, select: false, required: "Please enter password" }
});

module.exports = User;
