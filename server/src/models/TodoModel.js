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
   }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;