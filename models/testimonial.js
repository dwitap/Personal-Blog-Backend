const mongoose = require("mongoose");

const Testimonial = mongoose.model("Testimonial", {
  testimonial: String,
  picture: String,
  title: String,
  sub: String,
});

module.exports = Testimonial;
