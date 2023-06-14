const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
    const user = req.user;
    const todos = await TodoModel.find({ taskUser: user });
    res.json(todos);
}