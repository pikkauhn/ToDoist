const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    taskName: {
        type: String,
    },
    taskDescription: {
        type: String,
    },
    dueDate: {
        type: String,
    },
    Frequency: {
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
    },
    ProjectID: {
        type: Number,
    },
    UserID: {
        type: Number,
    }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;