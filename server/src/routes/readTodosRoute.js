const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
    const user = req.user;
    const todos = await TodoModel.find({ UserID: user });
    res.json(todos);
}