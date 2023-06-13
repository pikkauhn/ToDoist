const TodoModel = require('../models/TodoModel')

module.exports = async (req, res) => {
    const { taskUser } = user;
    const { taskName } = req.body.taskName;
    const { taskDescription } = req.body.taskDescription;
    const { taskDate } = req.body.taskDate;
    const { taskFrequency } = req.body.taskFrequency;
    const { taskImportant } = req.body.taskImportant;
    const { taskRanking } = req.body.taskRanking;
    const { taskHot } = req.body.taskHot;
    const { taskProject } = req.body.taskProject;
    const { taskComplete } = req.body.taskComplete;

    const todo = new TodoModel({
        taskUser,
        taskName,
        taskDescription,
        taskDate,
        taskFrequency,
        taskImportant,
        taskRanking,
        taskHot,
        taskProject,
        taskComplete,
    });
    const newTodo = await todo.save();
    res.json(newTodo);
};