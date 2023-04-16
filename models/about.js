const mongoose = require("mongoose");

const About = mongoose.model("About", {
  icon: String,
  title: String,
  sub: String,
});

module.exports = About;
