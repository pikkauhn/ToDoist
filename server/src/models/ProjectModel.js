const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
    },
    projectDescription: {
        type: String,
    },
    projectDate: {
        type: String,
    },
    projectCompleted: {
        type: Boolean,
    },
    projectImportant: {
        type: Boolean,
    },
    projectHot: {
        type: Boolean,
    },
    projectPriority: {
        type: Number,
    },
    UserID: {
        type: Number,
    }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;