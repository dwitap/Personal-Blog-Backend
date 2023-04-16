const data = require("../index.json");

const aboutController = {
  getAllAbout: (req, res) => {
    return res.status(200).json({
      message: "Get all about data",
      data: data.about,
    });
  },
  getAllSkills: (req, res) => {
    return res.status(200).json({
      message: "Get all about data",
      data: data.skills,
    });
  },
  getAllServices: (req, res) => {
    return res.status(200).json({
      message: "Get all about data",
      data: data.services,
    });
  },
  getAllQualifications: (req, res) => {
    return res.status(200).json({
      message: "Get all about data",
      data: data.qualifications,
    });
  },
  getAllContacts: (req, res) => {
    return res.status(200).json({
      message: "Get all about data",
      data: data.contacts,
    });
  },
};

module.exports = aboutController;
