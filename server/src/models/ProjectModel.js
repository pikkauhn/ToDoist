const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    taskName: {
        type: String,
    },
    taskDescription: {
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
    }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = PojectModel;