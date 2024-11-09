const Project = require("../models/Project");

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a project
exports.addProject = async (req, res) => {
    const { name, description } = req.body;
    //   const image = req.file ? req.file.path : ""; // Handle image upload

    const project = new Project({ name, description });
    try {
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};