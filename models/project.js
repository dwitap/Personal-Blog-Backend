const mongoose = require("mongoose");

const Project = mongoose.model("Project", {
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
});

module.exports = Project;
