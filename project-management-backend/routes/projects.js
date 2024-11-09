const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Routes
router.get("/", projectController.getProjects);
router.post("/", projectController.addProject); // No image upload logic

module.exports = router;
