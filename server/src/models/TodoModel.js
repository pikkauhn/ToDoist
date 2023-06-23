const { date } = require('joi');
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    taskName: {
        type: String,
    },
    taskDescription: {
        type: String,
    },
    taskDate: {
        type: Date,
    },
    taskFrequency: {
        type: String,
    },
    
    taskImportant: {
        type: Boolean,
    },
    taskHot: {
        type: Boolean,
    },
    taskPriority: {
        type: Number,
    },
    taskComplete: {
        type: Boolean,
    },
    taskProject: {
        type: Number,
    },
    UserID: {
        type: String,
    }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;