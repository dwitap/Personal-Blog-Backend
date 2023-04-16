const mongoose = require("mongoose");

const Service = mongoose.model("Service", {
  icon: String,
  title: String,
  sub: String,
});

module.exports = Service;
