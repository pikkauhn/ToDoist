const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {

    if (req.err) {                
        console.log(req.err)
        res.json(req.err)
    } else {
        const user = req.user;
        const todos = await TodoModel.find({ UserID: user });
        console.log(user)
        res.json(todos);
    }
}