const mongoose = require("mongoose");

const Testimonial = mongoose.model("Testimonial", {
  testi: String,
  picture: String,
  title: String,
  sub: String,
});

module.exports = Testimonial;
