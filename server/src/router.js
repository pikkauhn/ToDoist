const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const updateTodosRoute = require('./routes/updateTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createTodosRoute = require('./routes/createTodosRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');

const router = express.Router();

router.get('/todos', isLoggedIn, readTodosRoute);
router.post('/todos', isLoggedIn, createTodosRoute);
router.put('/todos/:id', isLoggedIn, updateTodosRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

module.exports = router;