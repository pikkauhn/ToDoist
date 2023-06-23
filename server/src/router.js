const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const updateTodosRoute = require('./routes/updateTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createTodosRoute = require('./routes/createTodosRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');
const getUserSettingsRoute = require('./routes/getUserSettingsRoute');
const createUserSettingsRoute = require('./routes/createUserSettingsRoute');
const updateUserSettingsRoute = require('./routes/updateUserSettingsRoute');
const deleteUserSettingsRoute = require('./routes/deleteUserSettingsRoute');

const router = express.Router();

router.get('/todos', isLoggedIn, readTodosRoute);
router.get('/settings', isLoggedIn, getUserSettingsRoute);

router.post('/todos', isLoggedIn, createTodosRoute);
router.post('/settings', isLoggedIn, createUserSettingsRoute);

// router.put('/settings', isLoggedIn, updateUserSettingsRoute);
router.put('/todos/:id', isLoggedIn, updateTodosRoute);

router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);
// router.delete('/settings', isLoggedIn, deleteUserSettingsRoute);

module.exports = router;