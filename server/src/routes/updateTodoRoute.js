const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
    const filter = { _id: req.params.id };
    const update = {
        taskComplete: req.params.complete,
        taskImportant: req.params.important,
        taskRanking: req.params.ranking,
        taskHot: req.params.hot,
        taskProject: req.params.project
    };
    const todo = await TodoModel.findOneAndUpdate(filter, update, {
        returnOriginal: false
    });
    res.json(todo);
}