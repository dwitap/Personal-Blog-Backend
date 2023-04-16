const mongoose = require("mongoose");

const Contact = mongoose.model("Contact", {
  icon: String,
  title: String,
  sub: String,
});

module.exports = Contact;
