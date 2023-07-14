const ProjectModel = require('../models/ProjectModel')

module.exports = async (req, res) => {
    const UserID = req.user;
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    const projectDate = req.body.projectDate;
    const { projectImportant } = req.body.projectImportant;
    const { projectHot } = req.body.projectHot;
    const { projectComplete } = req.body.projectComplete;

    const project = new ProjectModel({
        projectName,
        projectDescription,
        projectDate,
        projectImportant,
        projectHot,
        projectComplete,
        UserID,
    });
    const newProject = await project.save();
    res.json(newProject);
};