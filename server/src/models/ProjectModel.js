const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
    },
    ProjectDescription: {
        type: String,
    },
    dueDate: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    important: {
        type: Boolean,
    },
    hot: {
        type: Boolean,
    },
    priority: {
        type: Number,
    }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = PojectModel;