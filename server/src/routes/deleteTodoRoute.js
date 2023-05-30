const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const todo = await TodoModel.findById(id);
    await todo.deleteOne();
    res.status(200).json(todo);
}