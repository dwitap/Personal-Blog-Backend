const mongoose = require("mongoose");

const Skill = mongoose.model("Skill", {
  icon: String,
  title: String,
  sub: String,
});

module.exports = Skill;
