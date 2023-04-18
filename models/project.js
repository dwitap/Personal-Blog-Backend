const mongoose = require("mongoose");

const Project = mongoose.model("Project", {
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  project: {
    required: true,
    type: String,
  },
});

module.exports = Project;
