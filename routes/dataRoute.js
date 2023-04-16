const express = require("express");
const data = require("../controllers/getDataController");

const router = express.Router();

router.get("/about", data.getAllAbout);
router.get("/skills", data.getAllSkills);
router.get("/services", data.getAllServices);
router.get("/contacts", data.getAllContacts);
router.get("/testimonials", data.getAllTestimonials);

module.exports = router;
