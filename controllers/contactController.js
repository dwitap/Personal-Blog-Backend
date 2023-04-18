require("../utils/db");
const Project = require("../models/project");

const contactController = {
  createProjectReq: async (req, res) => {
    try {
      const newProject = await Project.create(req.body);

      return res.status(201).json({
        data: newProject,
        message: "Project request successfully sent",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server error post project",
      });
    }
  },
};

module.exports = contactController;
