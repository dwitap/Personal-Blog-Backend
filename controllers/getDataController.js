require("../config/db");
const About = require("../models/about");
const Skills = require("../models/skill");
const Services = require("../models/service");
const Testimonial = require("../models/testimonial");
const Contacts = require("../models/contact");

const aboutController = {
  getAllAbout: async (req, res) => {
    try {
      const findAboutData = await About.find();

      return res.status(200).json({
        message: "Get all about data",
        data: findAboutData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  getAllSkills: async (req, res) => {
    try {
      const findSkillsData = await Skills.find();

      return res.status(200).json({
        message: "Get all skill data",
        data: findSkillsData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  getAllServices: async (req, res) => {
    try {
      const findServiceData = await Services.find();

      return res.status(200).json({
        message: "Get all service data",
        data: findServiceData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  getAllTestimonials: async (req, res) => {
    try {
      const findTestimonialData = await Testimonial.find();

      return res.status(200).json({
        message: "Get all testimonial",
        data: findTestimonialData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  getAllContacts: async (req, res) => {
    try {
      const findContactData = await Contacts.find();

      return res.status(200).json({
        message: "Get all contact data",
        data: findContactData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
};

module.exports = aboutController;
